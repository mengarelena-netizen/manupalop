"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

// El ano se calcula en el navegador, como antes. Con export estatico
// calcularlo en el servidor lo dejaria congelado en la fecha del build.
const noop = () => () => {};
const currentYear = () => new Date().getFullYear();
const noYear = () => null;

export default function SiteFooter() {
  const year = useSyncExternalStore(noop, currentYear, noYear);

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          &copy; <span id="year">{year}</span> Manu Palop
        </p>
        <div className="footer-links">
          <Link href="/aviso-legal">Aviso legal</Link>
          <Link href="/politica-de-privacidad">Política de privacidad</Link>
          <Link href="/politica-de-cookies">Política de cookies</Link>
          <Link href="/condiciones-de-contratacion">
            Condiciones de contratación
          </Link>
        </div>
      </div>
    </footer>
  );
}
