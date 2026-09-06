"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/** Cabecera con el menu movil. Sustituye al bloque "Menu movil" de script.js. */
export default function SiteHeader({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    const { overflow, paddingRight } = document.body.style;
    document.body.style.overflow = "hidden";
    if (gap > 0) document.body.style.paddingRight = `${gap}px`;
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [open]);

  // En la home los anclas son internos; en el resto vuelven a la portada.
  const base = home ? "" : "/";

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <Link href="/" className="logo" onClick={close}>
          MANU <span>PALOP</span>
        </Link>

        <nav className={`main-nav${open ? " open" : ""}`} id="mainNav">
          <button className="nav-close" aria-label="Cerrar menú" onClick={close}>
            &times;
          </button>
          <Link href="/" onClick={close}>
            Home
          </Link>
          <a href={`${base}#ruge`} onClick={close}>
            Club VIP
          </a>
          <a href={`${base}#testimonios`} onClick={close}>
            Testimonios
          </a>
          <Link href="/diario" onClick={close}>
            Diario
          </Link>
          <Link href="/libro" onClick={close}>
            Mi libro
          </Link>
          <Link href="/contacto" onClick={close}>
            Contacto
          </Link>
        </nav>

        <a href={`${base}#ruge`} className="btn btn-accent nav-cta">
          Club VIP
        </a>

        <button
          className="nav-toggle"
          id="navToggle"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        className={`nav-backdrop${open ? " open" : ""}`}
        onClick={close}
        aria-hidden="true"
      />
    </header>
  );
}
