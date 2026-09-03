import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Diario de un ex-Gordo | Manu Palop",
  description:
    "Apúntate gratis al Diario de un ex-Gordo y recibe consejos reales para transformar tu mente y tu cuerpo.",
};

export default function Diario() {
  return (
    <>
      <SiteHeader />

      <section className="section" id="diario">
        <div className="container diario-inner">
          <h2>Diario de un ex-Gordo</h2>
          <p className="section-lead">
            Apúntate gratis para recibir consejos reales para transformar tu mente
            y tu cuerpo, directamente en tu correo.
          </p>
          {/* Suscripcion gestionada por Substack */}
          <div className="diario-embed">
            <iframe
              src="https://manupalop84.substack.com/embed"
              width="480"
              height="150"
              title="Suscríbete al Diario de un ex-Gordo"
              frameBorder="0"
              scrolling="no"
              loading="lazy"
            ></iframe>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="diario-photo"
            src="/images/ad-2.jpg"
            alt="Manu Palop, antes y después"
          />
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
