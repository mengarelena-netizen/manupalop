"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SiteFooter() {
  // El ano se calcula en el navegador, como antes. Con export estatico
  // calcularlo en el servidor lo dejaria congelado en la fecha del build.
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>&copy; <span id="year">{year}</span> Manu Palop</p>
        <div className="footer-links">
          <Link href="/diario">Diario</Link>
          <Link href="/libro">Mi libro</Link>
          <Link href="/contacto">Contacto</Link>
          <a href="#">Menciones legales</a>
          <Link href="/politica-de-privacidad">Política de privacidad</Link>
        </div>
      </div>
    </footer>
  );
}
