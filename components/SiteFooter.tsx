"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import Container from "@/components/Container";

const noop = () => () => {};
const currentYear = () => new Date().getFullYear();
const noYear = () => null;

export default function SiteFooter() {
  const year = useSyncExternalStore(noop, currentYear, noYear);

  return (
    <footer className="border-t border-line py-5 sm:py-7">
      <Container className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-y-3 text-center text-ink-muted">
        {/* Copyright */}
        <p className="m-0 text-xs sm:text-sm whitespace-nowrap">
          &copy; <span id="year">{year}</span> Manu Palop
        </p>

        {/* Links: 2 items per row on mobile (grid grid-cols-2), 1 row on desktop (sm:flex sm:w-auto) */}
        <div className="grid grid-cols-2 w-full sm:w-auto sm:flex sm:flex-wrap items-center justify-center gap-x-3.5 sm:gap-x-5 gap-y-1.5 text-xs sm:text-sm [&_a:hover]:text-brand-dark">
          <Link href="/aviso-legal">Aviso legal</Link>
          <Link href="/politica-de-privacidad">Política de privacidad</Link>
          <Link href="/politica-de-cookies">Política de cookies</Link>
          <Link href="/condiciones-de-contratacion">
            Condiciones de contratación
          </Link>
        </div>
      </Container>
    </footer>
  );
}
