"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { SPRING_PANEL, SPRING_TAP } from "@/components/motion/config";

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
    <motion.div
      className="relative block aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-[22px] bg-black tablet:max-w-[320px]"
      initial={false}
      animate={{ boxShadow: "0 18px 44px rgba(23, 20, 15, 0.22)" }}
      whileHover={
        started
          ? undefined
          : { y: -4, boxShadow: "0 24px 54px rgba(23, 20, 15, 0.28)" }
      }
      transition={SPRING_PANEL}
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
        <motion.button
          type="button"
          className="absolute inset-0 z-1 flex h-full w-full cursor-pointer items-center justify-center border-0 bg-transparent p-0 focus-visible:outline-3 focus-visible:outline-offset-[-6px] focus-visible:outline-brand"
          aria-label={ariaLabel}
          onClick={() => {
            videoRef.current?.play().catch(() => {});
            setStarted(true);
          }}
          initial="rest"
          whileHover="active"
          whileFocus="active"
          whileTap="press"
          animate="rest"
        >
          <motion.span
            className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-brand shadow-[0_6px_22px_rgba(0,0,0,0.35)]"
            aria-hidden="true"
            variants={{
              rest: { scale: 1, backgroundColor: "var(--accent)" },
              active: { scale: 1.08, backgroundColor: "var(--accent-dark)" },
              press: { scale: 0.94, backgroundColor: "var(--accent-dark)" },
            }}
            transition={SPRING_TAP}
          >
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              className="ml-[3px] h-[30px] w-[30px] fill-white"
            >
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </motion.span>
        </motion.button>
      )}
    </motion.div>
  );
}
