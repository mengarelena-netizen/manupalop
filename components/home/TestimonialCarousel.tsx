"use client";

import { useEffect, useRef, useState } from "react";

export type Testimonio = { quote: string; name: string; year: string };

// Mismos colores que btn(): naranja de marca y oscurece al pasar el raton.
const ARROW =
  "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-0 bg-brand p-0 text-on-brand shadow-[0_6px_16px_rgba(23,20,15,0.12)] transition-[background,color,box-shadow] duration-200 hover:bg-brand-dark hover:text-white disabled:cursor-default disabled:bg-line disabled:text-ink-muted disabled:shadow-none";

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

/** Fila de testimonios que se desliza con el dedo; las flechas son para raton. */
export default function TestimonialCarousel({
  items,
}: {
  items: Testimonio[];
}) {
  const track = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    // Margen de 2px: con zoom el scroll se queda a medio pixel del final.
    const update = () => {
      setAtStart(el.scrollLeft <= 2);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Avanza una tarjeta: su ancho mas el gap de la fila.
  const go = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const step = card.offsetWidth + parseFloat(getComputedStyle(el).columnGap);
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={track}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="region"
        aria-label="Testimonios de clientes"
        tabIndex={0}
      >
        {items.map((t) => (
          <blockquote
            key={t.name}
            className="m-0 flex w-[min(85%,340px)] shrink-0 snap-start flex-col rounded-card bg-surface-alt p-7"
          >
            <p className="mx-0 mt-0 mb-4 text-[16px]">{t.quote}</p>
            <cite className="mt-auto block font-bold not-italic">
              {t.name}{" "}
              <span className="font-normal text-ink-muted">{t.year}</span>
            </cite>
          </blockquote>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          className={ARROW}
          aria-label="Testimonio anterior"
          onClick={() => go(-1)}
          disabled={atStart}
        >
          <Chevron dir="left" />
        </button>
        <button
          type="button"
          className={ARROW}
          aria-label="Testimonio siguiente"
          onClick={() => go(1)}
          disabled={atEnd}
        >
          <Chevron dir="right" />
        </button>
      </div>
    </div>
  );
}
