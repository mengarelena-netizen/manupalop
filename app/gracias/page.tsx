import type { Metadata } from "next";
import Link from "next/link";
import Stripe from "stripe";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

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

      <main className="section" id="gracias">
        <div className="container gracias-inner">
          {pendiente ? (
            <>
              <h1 className="section-title">El pago no se ha completado</h1>
              <p className="section-lead">
                No se ha cobrado nada. Puedes volver a intentarlo cuando
                quieras, o escribirme si necesitas ayuda.
              </p>
              <Link href="/#ruge" className="btn btn-accent">
                Volver a intentarlo
              </Link>
            </>
          ) : (
            <>
              <h1 className="section-title">Bienvenido al Club VIP</h1>
              <p className="section-lead">
                Tu pago se ha realizado correctamente. Recibirás un correo con
                el recibo y los siguientes pasos para empezar. Si no lo ves en
                unos minutos, revisa la carpeta de spam.
              </p>
              <p className="gracias-nota">
                ¿Alguna duda? Escríbeme a{" "}
                <a href="mailto:hola@manupalop.com">hola@manupalop.com</a>.
              </p>
              <Link href="/" className="btn btn-dark">
                Volver al inicio
              </Link>
            </>
          )}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
