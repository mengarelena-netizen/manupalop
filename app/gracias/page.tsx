import type { Metadata } from "next";
import Stripe from "stripe";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Container from "@/components/Container";
import { MotionLink } from "@/components/motion/primitives";
import { lift } from "@/components/motion/config";
import { btn, HEADING, LEAD, SECTION } from "@/lib/site-ui";

export const metadata: Metadata = {
  title: "Bienvenido al Club VIP | Manu Palop",
  robots: { index: false, follow: false },
};

async function estadoSesion(id: string | undefined) {
  const clave = process.env.STRIPE_SECRET_KEY;
  if (!id || !clave) return null;
  try {
    const stripe = new Stripe(clave);
    const sesion = await stripe.checkout.sessions.retrieve(id);
    return sesion.status;
  } catch (error) {
    console.error("Stripe gracias:", error);
    return null;
  }
}

export default async function Gracias({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;
  const estado = await estadoSesion(session_id);
  const pendiente = estado === "open" || estado === "expired";

  return (
    <>
      <SiteHeader />

      <main className={SECTION} id="gracias">
        <Container className="max-w-[680px] text-center">
          {pendiente ? (
            <>
              <h1 className={HEADING} data-reveal="">
                El pago no se ha completado
              </h1>
              <p className={LEAD} data-reveal="">
                No se ha cobrado nada. Puedes volver a intentarlo cuando
                quieras, o escribirme si necesitas ayuda.
              </p>
              <div data-reveal="zoom">
                <MotionLink href="/#ruge" className={btn()} {...lift}>
                  Volver a intentarlo
                </MotionLink>
              </div>
            </>
          ) : (
            <>
              <h1 className={HEADING} data-reveal="">
                Bienvenido al Club VIP
              </h1>
              <p className={LEAD} data-reveal="">
                Tu pago se ha realizado correctamente. Recibirás un correo con
                el recibo y los siguientes pasos para empezar. Si no lo ves en
                unos minutos, revisa la carpeta de spam.
              </p>
              <p
                className="mx-0 mt-0 mb-7 text-[15px] text-ink-muted"
                data-reveal=""
              >
                ¿Alguna duda? Escríbeme a{" "}
                <a href="mailto:hola@manupalop.com">hola@manupalop.com</a>.
              </p>
              <MotionLink
                href="/"
                className={btn({ variant: "dark" })}
                {...lift}
              >
                Volver al inicio
              </MotionLink>
            </>
          )}
        </Container>
      </main>

      <SiteFooter />
    </>
  );
}
