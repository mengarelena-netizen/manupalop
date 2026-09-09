import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Container from "@/components/Container";
import { LEAD, SECTION } from "@/lib/site-ui";

export const metadata: Metadata = {
  title: "Diario de un ex-Gordo | Manu Palop",
  description:
    "Apúntate gratis al Diario de un ex-Gordo y recibe consejos reales para transformar tu mente y tu cuerpo.",
};

export default function Diario() {
  return (
    <>
      <SiteHeader />

      <section className={SECTION} id="diario">
        <Container className="flex flex-col items-start text-left desktop:items-center desktop:text-center">
          <h2 data-reveal="">Diario de un ex-Gordo</h2>
          <p className={LEAD} data-reveal="">
            Apúntate gratis para recibir consejos reales para transformar tu
            mente y tu cuerpo, directamente en tu correo.
          </p>
          {/* Suscripcion gestionada por Substack */}
          <div
            className="relative mx-auto mt-7 aspect-[480/150] w-full max-w-[480px] self-center overflow-hidden rounded-card bg-white [--embed-scale:calc(min(480px,100vw_-_48px)/480px)] after:pointer-events-none after:absolute after:inset-0 after:rounded-card after:border after:border-line after:content-['']"
            data-reveal=""
          >
            <iframe
              className="absolute top-0 left-0 block h-[150px] w-[480px] origin-top-left border-0 bg-white [transform:scale(var(--embed-scale))]"
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
            className="mx-auto mt-12 h-auto w-full max-w-[320px] self-center rounded-card border border-line"
            src="/images/opt/ad-2.webp"
            srcSet="/images/opt/ad-2.webp 1x, /images/opt/ad-2@2x.webp 2x"
            width={320}
            height={240}
            alt="Manu Palop, antes y después"
            loading="lazy"
            decoding="async"
            data-reveal="zoom"
          />
        </Container>
      </section>

      <SiteFooter />
    </>
  );
}
