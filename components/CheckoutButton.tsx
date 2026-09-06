"use client";

import { useCallback, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";

const CLAVE_PUBLICA = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = CLAVE_PUBLICA ? loadStripe(CLAVE_PUBLICA) : null;

export default function CheckoutButton({
  className,
  children,
  fallbackHref,
}: {
  className?: string;
  children: React.ReactNode;
  fallbackHref: string;
}) {
  const [abierto, setAbierto] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const cerrar = useCallback(() => {
    setAbierto(false);
    setClientSecret(null);
    setError(false);
  }, []);

  const abrir = useCallback(async () => {
    setAbierto(true);
    setError(false);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const datos = await res.json();
      if (!res.ok || !datos.clientSecret) throw new Error("sin client secret");
      setClientSecret(datos.clientSecret);
    } catch {
      setError(true);
    }
  }, []);

  useEffect(() => {
    if (!abierto) return;
    const alPulsar = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar();
    };
    const scrollPrevio = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", alPulsar);
    return () => {
      document.body.style.overflow = scrollPrevio;
      document.removeEventListener("keydown", alPulsar);
    };
  }, [abierto, cerrar]);

  if (!stripePromise) {
    return (
      <a
        href={fallbackHref}
        target="_blank"
        rel="noopener"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <>
      <button type="button" className={className} onClick={abrir}>
        {children}
      </button>

      {abierto ? (
        <div
          className="checkout-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) cerrar();
          }}
        >
          <div
            className="checkout-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Pago del Club VIP"
          >
            <div className="checkout-cabecera">
              <button
                type="button"
                className="checkout-close"
                aria-label="Cerrar"
                onClick={cerrar}
              >
                &times;
              </button>
            </div>

            {error ? (
              <div className="checkout-estado">
                <p>No se ha podido abrir el pago.</p>
                <a
                  href={fallbackHref}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-accent"
                >
                  Continuar en Stripe
                </a>
              </div>
            ) : clientSecret ? (
              <EmbeddedCheckoutProvider
                stripe={stripePromise}
                options={{ clientSecret }}
              >
                <EmbeddedCheckout />
              </EmbeddedCheckoutProvider>
            ) : (
              <div className="checkout-estado">
                <p>Cargando el pago seguro...</p>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
