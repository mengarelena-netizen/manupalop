import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import { MotionLink } from "@/components/motion/primitives";
import { lift } from "@/components/motion/config";
import Container from "@/components/Container";
import { btn, HEADING, LEAD, SECTION } from "@/lib/site-ui";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Prensa y colaboraciones | Manu Palop",
  description:
    "Formulario de contacto solo para prensa, podcasts y colaboraciones.",
};

export default function Contacto() {
  return (
    <>
      <SiteHeader />

      <section className={SECTION} id="contacto">
        <Container className="grid grid-cols-1 items-start gap-14 desktop:grid-cols-2">
          <div data-reveal="">
            <h2 className={HEADING}>Prensa y colaboraciones</h2>
            <p className={LEAD}>
              Este formulario es solo para medios de comunicación, podcasts y
              propuestas de colaboración.
            </p>
          </div>

          <div data-reveal="zoom">
            <ContactForm />
          </div>
        </Container>

        <Container>
          <div className="mt-16 border-t border-line pt-12 text-left desktop:text-center">
            <p
              className={cn(LEAD, "mx-0 my-0 font-bold desktop:mx-auto")}
              data-reveal=""
            >
              ¿Quieres perder peso conmigo? Únete directamente al Club VIP.
            </p>
            <div data-reveal="zoom">
              <MotionLink
                href="/#ruge"
                className={cn(btn(), "mx-auto mt-4 block w-fit")}
                {...lift}
              >
                Más información
              </MotionLink>
            </div>
          </div>
        </Container>
      </section>

      <SiteFooter />
    </>
  );
}
