"use client";

import { useCallback, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { AnimatePresence, motion } from "motion/react";
import Portal from "@/components/Portal";
import { MotionA, MotionButton } from "@/components/motion/primitives";
import {
  FADE,
  lift,
  SPRING_PANEL,
  SPRING_TAP,
} from "@/components/motion/config";
import { btn } from "@/lib/site-ui";

const CLAVE_PUBLICA = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = CLAVE_PUBLICA ? loadStripe(CLAVE_PUBLICA) : null;

const ESTADO = "pt-9 pb-11 text-center text-ink-muted";

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
      <MotionA
        href={fallbackHref}
        target="_blank"
        rel="noopener"
        className={className}
        {...lift}
      >
        {children}
      </MotionA>
    );
  }

  return (
    <>
      <MotionButton
        type="button"
        className={className}
        onClick={abrir}
        {...lift}
      >
        {children}
      </MotionButton>

      <Portal>
        <AnimatePresence>
          {abierto ? (
            <motion.div
              className="fixed inset-0 z-210 flex items-center justify-center bg-[rgba(10,8,6,0.74)] p-3 desktop:px-4 desktop:py-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={FADE}
              onClick={(e) => {
                if (e.target === e.currentTarget) cerrar();
              }}
            >
              <motion.div
                className="relative max-h-[90dvh] w-full overflow-y-auto overscroll-contain rounded-card bg-white px-3 pt-0 pb-4 shadow-[0_24px_60px_rgba(0,0,0,0.28)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden desktop:max-w-[620px] desktop:px-5 desktop:pb-6"
                role="dialog"
                aria-modal="true"
                aria-label="Pago del Club VIP"
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.97 }}
                transition={SPRING_PANEL}
              >
                <div className="sticky top-0 z-2 flex justify-end rounded-t-card bg-white pt-2 pb-1">
                  <motion.button
                    type="button"
                    className="cursor-pointer border-0 bg-transparent px-1 py-0 text-[32px] leading-none text-ink-muted hover:text-ink"
                    aria-label="Cerrar"
                    onClick={cerrar}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={SPRING_TAP}
                  >
                    &times;
                  </motion.button>
                </div>

                {error ? (
                  <div className={ESTADO}>
                    <p className="mx-0 mt-0 mb-5">
                      No se ha podido abrir el pago.
                    </p>
                    <MotionA
                      href={fallbackHref}
                      target="_blank"
                      rel="noopener"
                      className={btn()}
                      {...lift}
                    >
                      Continuar en Stripe
                    </MotionA>
                  </div>
                ) : clientSecret ? (
                  <EmbeddedCheckoutProvider
                    stripe={stripePromise}
                    options={{ clientSecret }}
                  >
                    <EmbeddedCheckout />
                  </EmbeddedCheckoutProvider>
                ) : (
                  <div className={ESTADO}>
                    <p className="mx-0 mt-0 mb-5">Cargando el pago seguro...</p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Portal>
    </>
  );
}
