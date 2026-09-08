"use client";

import { useRef, useState } from "react";

export default function VideoFacade({
  src,
  poster,
  posterAlt,
  ariaLabel,
  width,
  height,
}: {
  src: string;
  poster: string;
  posterAlt: string;
  ariaLabel: string;
  width: number;
  height: number;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [started, setStarted] = useState(false);

  return (
    <div className={`video-wrap${started ? " is-playing" : ""}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        width={width}
        height={height}
        preload="none"
        playsInline
        controls={started}
        aria-label={posterAlt}
        onEnded={() => {
          videoRef.current?.load();
          setStarted(false);
        }}
      />
      {!started && (
        <button
          type="button"
          className="video-cover"
          aria-label={ariaLabel}
          onClick={() => {
            videoRef.current?.play().catch(() => {});
            setStarted(true);
          }}
        >
          <span className="video-play" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
