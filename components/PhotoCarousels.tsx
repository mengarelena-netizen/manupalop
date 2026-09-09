"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Portal from "@/components/Portal";
import {
  CROSSFADE,
  FADE,
  SPRING_PANEL,
  SPRING_TAP,
} from "@/components/motion/config";
import { cn } from "@/lib/utils";

export type Photo = { src: string; alt: string };

const ROTATE_MS = 3000;

// Las fotos se sirven en el tamano en que se ven. El lightbox las abre a
// pantalla completa, asi que ahi se pide la variante grande.
const at2x = (src: string) => src.replace(/\.webp$/, "@2x.webp");
const atFull = (src: string) => src.replace(/\.webp$/, "-full.webp");

function Carousel({
  label,
  intervalMs,
  photos,
  onPick,
  className,
  priority = false,
}: {
  label?: string;
  intervalMs: number;
  photos: Photo[];
  onPick: (p: Photo) => void;
  className?: string;
  priority?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const paused = useRef(false);
  const box = useRef<HTMLDivElement | null>(null);

  // El carrusel no gira mientras no se ve. Si no, al bajar la pagina te
  // encuentras una foto que aun se esta descargando en vez de la primera.
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || photos.length < 2) return;
    const timer = setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % photos.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [visible, intervalMs, photos.length]);

  return (
    <div
      ref={box}
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
          <motion.img
            key={p.src}
            className={cn(
              "absolute inset-0 h-full w-full cursor-pointer object-cover object-[center_20%]",
              i === index ? "pointer-events-auto" : "pointer-events-none",
            )}
            initial={false}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={CROSSFADE}
            src={p.src}
            srcSet={`${p.src} 1x, ${at2x(p.src)} 2x`}
            alt={p.alt}
            // Solo la primera foto de cada carrusel entra en la carga inicial;
            // las demas eran 3,7 MB compitiendo con lo que si se ve.
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 && priority ? "high" : undefined}
            decoding="async"
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
    <Portal>
      <AnimatePresence>
        {photo ? (
          <motion.div
            className="fixed inset-0 z-200 flex items-center justify-center bg-[rgba(10,8,6,0.92)] p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={FADE}
            onClick={(e) => {
              if (e.target === e.currentTarget) onClose();
            }}
          >
            <motion.button
              className="absolute top-6 right-8 cursor-pointer border-0 bg-transparent text-[36px] text-white"
              aria-label="Cerrar"
              onClick={onClose}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              transition={SPRING_TAP}
            >
              &times;
            </motion.button>
            <motion.img
              className="max-h-[90vh] max-w-full rounded-[10px]"
              src={atFull(photo.src)}
              alt={photo.alt}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={SPRING_PANEL}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Portal>
  );
}

export function PhotoGallery({
  photos,
  intervalMs = 3600,
  className,
  priority = false,
}: {
  photos: Photo[];
  intervalMs?: number;
  className?: string;
  priority?: boolean;
}) {
  const [zoomed, setZoomed] = useState<Photo | null>(null);

  return (
    <>
      <Carousel
        intervalMs={intervalMs}
        photos={photos}
        onPick={setZoomed}
        className={className}
        priority={priority}
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
