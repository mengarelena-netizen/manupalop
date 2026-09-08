"use client";

import { useState } from "react";

/* La miniatura es solo una fachada: hasta que no se pulsa no se carga nada de
   YouTube. Al pulsar se monta el iframe con autoplay=1 en la propia src, dentro
   del gesto del usuario, que es lo unico que los navegadores aceptan para
   arrancar el video con sonido. Los controles son los del reproductor: una capa
   propia encima se queda pegada en tactil (:hover no se suelta tras el toque). */

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
  const [playing, setPlaying] = useState(false);

  if (!playing) {
    return (
      <button
        type="button"
        className="video-wrap"
        aria-label={ariaLabel}
        onClick={() => setPlaying(true)}
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
    <div className="video-wrap is-playing">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3`}
        title={posterAlt}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
      />
    </div>
  );
}
