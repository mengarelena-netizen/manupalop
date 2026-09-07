"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* La miniatura es solo una fachada: hasta que no se pulsa no se carga nada de
   YouTube. En escritorio se usa controls=0 y controles propios, para que no
   aparezca el marco de YouTube. En tactil el navegador bloquea el autoplay con
   sonido, asi que alli van los controles nativos del reproductor. */

/* La API de YouTube no trae tipos; declaramos solo lo que usamos. */
interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  getPlayerState(): number;
  destroy?(): void;
}
interface YTPlayerEvent {
  target: YTPlayer;
  data: number;
}
interface YTApi {
  Player: new (
    el: HTMLElement,
    opts: {
      videoId: string;
      host?: string;
      width?: string | number;
      height?: string | number;
      playerVars?: Record<string, number>;
      events?: {
        onReady?: (e: YTPlayerEvent) => void;
        onStateChange?: (e: YTPlayerEvent) => void;
      };
    }
  ) => YTPlayer;
  PlayerState: {
    PLAYING: number;
    PAUSED: number;
    ENDED: number;
    BUFFERING: number;
  };
}
type YTNamespace = typeof window & {
  YT?: YTApi;
  onYouTubeIframeAPIReady?: () => void;
};

let ytApi: Promise<YTApi> | null = null;

function loadYouTubeApi(): Promise<YTApi> {
  if (ytApi) return ytApi;
  ytApi = new Promise((resolve, reject) => {
    const w = window as YTNamespace;
    if (w.YT && w.YT.Player) return resolve(w.YT);
    const previous = w.onYouTubeIframeAPIReady;
    w.onYouTubeIframeAPIReady = () => {
      if (typeof previous === "function") previous();
      resolve(w.YT as YTApi);
    };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return ytApi;
}

function prefersNativeControls() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(hover: none)").matches;
}

export default function VideoFacade({
  videoId,
  poster,
  posterAlt,
  ariaLabel,
  width,
  height,
}: {
  videoId: string;
  poster: string;
  posterAlt: string;
  ariaLabel: string;
  width: number;
  height: number;
}) {
  const [mode, setMode] = useState<"idle" | "playing">("idle");
  const [nativeControls, setNativeControls] = useState(false);
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(true);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const nativeRef = useRef(false);

  const restore = useCallback(() => {
    // Al terminar volvemos a la miniatura, en vez de dejar la pantalla final
    // de YouTube con sus videos sugeridos.
    playerRef.current?.destroy?.();
    playerRef.current = null;
    setStarted(false);
    setPaused(true);
    nativeRef.current = false;
    setNativeControls(false);
    setMode("idle");
  }, []);

  useEffect(() => {
    if (mode !== "playing" || !stageRef.current || playerRef.current) return;

    // El nodo lo crea el navegador, no React: la API de YouTube lo sustituye
    // por su iframe y React no debe intentar conciliarlo despues.
    const mount = document.createElement("div");
    stageRef.current.prepend(mount);
    const native = nativeRef.current;

    let cancelled = false;
    loadYouTubeApi()
      .then((YT: YTApi) => {
        if (cancelled) return;
        playerRef.current = new YT.Player(mount, {
          videoId,
          host: "https://www.youtube-nocookie.com",
          // Sin esto la API crea el iframe a 640x360 y el video vertical
          // queda descuadrado dentro del marco.
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 1,
            controls: native ? 1 : 0,
            rel: 0,
            fs: native ? 1 : 0,
            disablekb: native ? 0 : 1,
            playsinline: 1,
            modestbranding: 1,
            iv_load_policy: 3,
          },
          events: {
            onReady: (e: YTPlayerEvent) => {
              e.target.playVideo();
              // El reproductor mide su tamano al crearse; le pedimos que lo
              // recalcule ya montado en el marco vertical.
              window.dispatchEvent(new Event("resize"));
            },
            onStateChange: (e: YTPlayerEvent) => {
              const state = e.data;
              if (state === YT.PlayerState.PLAYING) {
                setStarted(true);
                setPaused(false);
              } else if (state === YT.PlayerState.BUFFERING) {
                setPaused(false);
              } else if (state === YT.PlayerState.ENDED) {
                restore();
              } else {
                setPaused(true);
              }
            },
          },
        });
      })
      .catch(() => {
        // Si la API de YouTube no carga, al menos que el video se pueda ver
        // con los controles del propio iframe.
        if (cancelled) return;
        const iframe = document.createElement("iframe");
        iframe.src =
          "https://www.youtube-nocookie.com/embed/" +
          videoId +
          "?autoplay=1&rel=0&playsinline=1";
        iframe.title = "Vídeo testimonio";
        iframe.allow = "autoplay; encrypted-media; picture-in-picture";
        iframe.allowFullscreen = true;
        mount.replaceWith(iframe);
        nativeRef.current = true;
        setNativeControls(true);
        setStarted(true);
      });

    return () => {
      cancelled = true;
      playerRef.current?.destroy?.();
      playerRef.current = null;
      mount.remove();
    };
  }, [mode, videoId, restore]);

  if (mode !== "playing") {
    return (
      <button
        type="button"
        className="video-wrap"
        aria-label={ariaLabel}
        onClick={() => {
          const native = prefersNativeControls();
          nativeRef.current = native;
          setNativeControls(native);
          setMode("playing");
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={poster}
          alt={posterAlt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
        />
        <span className="video-play" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M8 5.5v13l11-6.5z" />
          </svg>
        </span>
      </button>
    );
  }

  return (
    <div
      ref={stageRef}
      className={`video-wrap is-playing${started ? " is-started" : ""}${
        paused ? " is-paused" : ""
      }${nativeControls ? " is-native" : ""}`}
    >
      {!nativeControls && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="video-poster"
            src={poster}
            alt=""
            width={width}
            height={height}
            aria-hidden="true"
          />
          {/* Capa propia: un solo boton de pausa/reproduccion encima del video,
              que ademas impide que el usuario llegue al reproductor. */}
          <button
            type="button"
            className="video-toggle"
            aria-label={paused ? "Reproducir vídeo" : "Pausar vídeo"}
            onClick={() => {
              const p = playerRef.current;
              const YT = (window as YTNamespace).YT;
              if (!p || !YT) return;
              if (p.getPlayerState() === YT.PlayerState.PLAYING) p.pauseVideo();
              else p.playVideo();
            }}
          >
            <span className="video-toggle-icon" aria-hidden="true">
              <svg className="icon-pause" viewBox="0 0 24 24" focusable="false">
                <path d="M7 5h3.4v14H7zm6.6 0H17v14h-3.4z" />
              </svg>
              <svg className="icon-play" viewBox="0 0 24 24" focusable="false">
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
            </span>
          </button>
        </>
      )}
    </div>
  );
}
