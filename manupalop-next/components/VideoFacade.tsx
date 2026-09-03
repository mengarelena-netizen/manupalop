"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* La miniatura es solo una fachada: hasta que no se pulsa no se carga nada de
   YouTube. Al reproducir se usa controls=0 y controles propios, para que no
   aparezca el marco de YouTube (titulo, barra inferior, sello "Shorts"). */

type YTNamespace = typeof window & { YT?: any; onYouTubeIframeAPIReady?: () => void };

let ytApi: Promise<any> | null = null;

function loadYouTubeApi(): Promise<any> {
  if (ytApi) return ytApi;
  ytApi = new Promise((resolve, reject) => {
    const w = window as YTNamespace;
    if (w.YT && w.YT.Player) return resolve(w.YT);
    const previous = w.onYouTubeIframeAPIReady;
    w.onYouTubeIframeAPIReady = () => {
      if (typeof previous === "function") previous();
      resolve(w.YT);
    };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return ytApi;
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
  const [mode, setMode] = useState<"idle" | "loading" | "playing">("idle");
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any>(null);

  const restore = useCallback(() => {
    // Al terminar volvemos a la miniatura, en vez de dejar la pantalla final
    // de YouTube con sus videos sugeridos.
    playerRef.current?.destroy?.();
    playerRef.current = null;
    setReady(false);
    setPaused(false);
    setMode("idle");
  }, []);

  useEffect(() => {
    if (mode !== "playing" || !stageRef.current || playerRef.current) return;

    // El nodo lo crea el navegador, no React: la API de YouTube lo sustituye
    // por su iframe y React no debe intentar conciliarlo despues.
    const mount = document.createElement("div");
    stageRef.current.prepend(mount);

    let cancelled = false;
    loadYouTubeApi()
      .then((YT) => {
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
            controls: 0, // sin marco de YouTube durante la reproduccion
            rel: 0,
            fs: 0,
            disablekb: 1,
            playsinline: 1,
            modestbranding: 1,
            iv_load_policy: 3,
          },
          events: {
            onReady: (e: any) => {
              e.target.playVideo();
              setReady(true);
              // El reproductor mide su tamano al crearse; le pedimos que lo
              // recalcule ya montado en el marco vertical.
              window.dispatchEvent(new Event("resize"));
            },
            onStateChange: (e: any) => {
              setPaused(e.data === YT.PlayerState.PAUSED);
              if (e.data === YT.PlayerState.ENDED) restore();
            },
          },
        });
      })
      .catch(() => {
        // Si la API de YouTube no carga, al menos que el video se pueda ver.
        if (cancelled || !stageRef.current) return;
        const iframe = document.createElement("iframe");
        iframe.src =
          "https://www.youtube-nocookie.com/embed/" +
          videoId +
          "?autoplay=1&rel=0&playsinline=1";
        iframe.title = "Vídeo testimonio";
        iframe.allow = "autoplay; encrypted-media; picture-in-picture";
        iframe.allowFullscreen = true;
        stageRef.current.replaceChildren(iframe);
        setReady(true);
      });

    return () => {
      cancelled = true;
    };
  }, [mode, videoId, restore]);

  if (mode !== "playing") {
    return (
      <button
        type="button"
        className={`video-wrap${mode === "loading" ? " is-loading" : ""}`}
        aria-label={ariaLabel}
        onClick={() => setMode("playing")}
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
      className={`video-wrap is-playing${ready ? " is-ready" : ""}${
        paused ? " is-paused" : ""
      }`}
    >
      {/* Capa propia: un solo boton de pausa/reproduccion encima del video, que
          ademas impide que el usuario llegue al reproductor de YouTube. */}
      <button
        type="button"
        className="video-toggle"
        aria-label={paused ? "Reproducir vídeo" : "Pausar vídeo"}
        onClick={() => {
          const p = playerRef.current;
          if (!p) return;
          const YT = (window as YTNamespace).YT;
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
    </div>
  );
}
