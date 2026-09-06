"use client";

import { useEffect, useRef, useState } from "react";

export type Photo = { src: string; alt: string };

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
      className={className ? `carousel ${className}` : "carousel"}
      // Pausa al pasar el raton, para poder mirar una foto con calma
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {label ? <span className="carousel-label">{label}</span> : null}
      <div className="carousel-track">
        {photos.map((p, i) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={p.src}
            className={i === index ? "active" : undefined}
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
      className={`lightbox${photo ? " open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button className="lightbox-close" aria-label="Cerrar" onClick={onClose}>
        &times;
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo?.src ?? ""} alt={photo?.alt ?? ""} />
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

  return (
    <>
      <div className="carousels">
        <Carousel
          label="140 kg"
          intervalMs={3200}
          photos={antes}
          onPick={setZoomed}
        />
        <Carousel
          label="80 kg"
          intervalMs={2800}
          photos={despues}
          onPick={setZoomed}
        />
      </div>

      <Lightbox photo={zoomed} onClose={() => setZoomed(null)} />
    </>
  );
}
