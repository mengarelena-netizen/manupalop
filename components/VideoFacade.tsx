"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

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
    <div
      className={cn(
        "relative block aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-[22px] bg-black shadow-[0_18px_44px_rgba(23,20,15,0.22)] [transition:transform_0.25s_ease,box-shadow_0.25s_ease] tablet:max-w-[320px] motion-reduce:transition-none",
        !started &&
          "hover:shadow-[0_24px_54px_rgba(23,20,15,0.28)] hover:[transform:translateY(-4px)] motion-reduce:hover:[transform:none]",
      )}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 block h-full w-full border-0 object-cover"
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
          className="group absolute inset-0 z-1 h-full w-full cursor-pointer border-0 bg-transparent p-0 focus-visible:outline-3 focus-visible:outline-offset-[-6px] focus-visible:outline-brand"
          aria-label={ariaLabel}
          onClick={() => {
            videoRef.current?.play().catch(() => {});
            setStarted(true);
          }}
        >
          <span
            className="absolute top-1/2 left-1/2 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-brand shadow-[0_6px_22px_rgba(0,0,0,0.35)] [transform:translate(-50%,-50%)] [transition:transform_0.25s_ease,background_0.25s_ease] group-hover:bg-brand-dark group-hover:[transform:translate(-50%,-50%)_scale(1.08)] group-focus-visible:bg-brand-dark group-focus-visible:[transform:translate(-50%,-50%)_scale(1.08)] motion-reduce:transition-none motion-reduce:group-hover:[transform:translate(-50%,-50%)] motion-reduce:group-focus-visible:[transform:translate(-50%,-50%)]"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" focusable="false" className="ml-[3px] h-[30px] w-[30px] fill-white">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
