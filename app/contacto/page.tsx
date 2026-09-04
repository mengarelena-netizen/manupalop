import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Prensa y colaboraciones | Manu Palop",
  description:
    "Formulario de contacto solo para prensa, podcasts y colaboraciones.",
};

export default function Contacto() {
  return (
    <>
      <SiteHeader />

      <section className="section" id="contacto">
        <div className="container contacto-grid">
          <div>
            <h2 className="section-title">Prensa y colaboraciones</h2>
            <p className="section-lead">
              Este formulario es solo para medios de comunicación, podcasts y
              propuestas de colaboración.
            </p>
          </div>

          <ContactForm />
        </div>

        <div className="container">
          <div className="contacto-ruge-banner">
            <p className="section-lead">
              ¿Quieres perder peso conmigo? Únete directamente al Club VIP.
            </p>
            <Link href="/#ruge" className="btn btn-accent contacto-ruge-cta">
              Más información
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
