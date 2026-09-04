"use client";

import { useEffect, useRef, useState } from "react";

type Photo = { src: string; alt: string };

function Carousel({
  label,
  intervalMs,
  photos,
  onPick,
}: {
  label: string;
  intervalMs: number;
  photos: Photo[];
  onPick: (p: Photo) => void;
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
      className="carousel"
      // Pausa al pasar el raton, para poder mirar una foto con calma
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <span className="carousel-label">{label}</span>
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
        <Carousel label="140 kg" intervalMs={3200} photos={antes} onPick={setZoomed} />
        <Carousel label="80 kg" intervalMs={2800} photos={despues} onPick={setZoomed} />
      </div>

      <div
        className={`lightbox${zoomed ? " open" : ""}`}
        id="lightbox"
        onClick={(e) => {
          if (e.target === e.currentTarget) setZoomed(null);
        }}
      >
        <button
          className="lightbox-close"
          id="lightboxClose"
          aria-label="Cerrar"
          onClick={() => setZoomed(null)}
        >
          &times;
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img id="lightboxImg" src={zoomed?.src ?? ""} alt={zoomed?.alt ?? ""} />
      </div>
    </>
  );
}
