"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type Photo = { src: string; alt: string };

const ROTATE_MS = 3000;

function Carousel({
  label,
  intervalMs,
  photos,
  onPick,
  className,
}: {
  label?: string;
  intervalMs: number;
  photos: Photo[];
  onPick: (p: Photo) => void;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    if (photos.length < 2) return;
    const timer = setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % photos.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [intervalMs, photos.length]);

  return (
    <div
      className={cn(
        "relative aspect-[4/5] overflow-hidden rounded-card bg-line",
        className,
      )}
      // Pausa al pasar el raton, para poder mirar una foto con calma
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {label ? (
        <span className="absolute top-4 left-4 z-2 rounded-full bg-brand px-[18px] py-1.5 text-[14px] font-extrabold tracking-[0.03em] text-on-brand uppercase">
          {label}
        </span>
      ) : null}
      <div className="relative h-full w-full">
        {photos.map((p, i) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={p.src}
            className={cn(
              "absolute inset-0 h-full w-full cursor-pointer object-cover object-[center_20%] transition-opacity duration-1000 ease-[ease]",
              i === index
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0",
            )}
            src={p.src}
            alt={p.alt}
            onClick={() => onPick(p)}
          />
        ))}
      </div>
    </div>
  );
}

function Lightbox({
  photo,
  onClose,
}: {
  photo: Photo | null;
  onClose: () => void;
}) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-200 items-center justify-center bg-[rgba(10,8,6,0.92)] p-10",
        photo ? "flex" : "hidden",
      )}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        className="absolute top-6 right-8 cursor-pointer border-0 bg-transparent text-[36px] text-white"
        aria-label="Cerrar"
        onClick={onClose}
      >
        &times;
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="max-h-[90vh] max-w-full rounded-[10px]"
        src={photo?.src ?? ""}
        alt={photo?.alt ?? ""}
      />
    </div>
  );
}

export function PhotoGallery({
  photos,
  intervalMs = 3600,
  className,
}: {
  photos: Photo[];
  intervalMs?: number;
  className?: string;
}) {
  const [zoomed, setZoomed] = useState<Photo | null>(null);

  return (
    <>
      <Carousel
        intervalMs={intervalMs}
        photos={photos}
        onPick={setZoomed}
        className={className}
      />
      <Lightbox photo={zoomed} onClose={() => setZoomed(null)} />
    </>
  );
}

export default function PhotoCarousels({
  antes,
  despues,
}: {
  antes: Photo[];
  despues: Photo[];
}) {
  const [zoomed, setZoomed] = useState<Photo | null>(null);

  // En movil las dos columnas pasan a dos filas que llenan la pantalla.
  const stacked =
    "mx-auto aspect-auto min-h-0 w-[min(100%,340px)] tablet:mx-0 tablet:aspect-[4/5] tablet:w-auto";

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-[1fr_1fr] gap-3 h-[calc(100svh_-_var(--header-h)_-_1px)] tablet:h-auto tablet:grid-cols-2 tablet:grid-rows-none tablet:gap-6">
        <Carousel
          label="140 kg"
          intervalMs={ROTATE_MS}
          photos={antes}
          onPick={setZoomed}
          className={stacked}
        />
        <Carousel
          label="80 kg"
          intervalMs={ROTATE_MS}
          photos={despues}
          onPick={setZoomed}
          className={stacked}
        />
      </div>

      <Lightbox photo={zoomed} onClose={() => setZoomed(null)} />
    </>
  );
}
