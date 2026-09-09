"use client";

import Link from "next/link";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MotionButton } from "@/components/motion/primitives";
import { lift, SPRING_PANEL } from "@/components/motion/config";
import { btn } from "@/lib/site-ui";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "manupalop-cookie-consent";
const OPEN_EVENT = "manupalop:abrir-cookies";
const CHANGE_EVENT = "manupalop:cookies";

const BANNER_BTN =
  "px-[22px] py-[11px] text-[14px] max-tablet:flex-auto max-tablet:text-center";
const OPCION = "flex cursor-pointer items-start gap-3";
const CHECKBOX =
  "mx-0 mt-0.5 mb-0 h-[18px] w-[18px] flex-none accent-brand disabled:cursor-not-allowed";

export type CookieConsent = {
  necesarias: true;
  analiticas: boolean;
  fecha: string;
};

// El valor vive en localStorage, fuera de React, asi que se lee con
// useSyncExternalStore igual que el ano del pie. En el servidor devuelve
// undefined ("aun no se sabe") para que el banner no parpadee en la
// hidratacion de quien ya respondio; null significa "no hay respuesta".
function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function getServerSnapshot(): string | undefined {
  return undefined;
}

function parsear(raw: string | null | undefined): CookieConsent | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<CookieConsent>;
    if (typeof parsed?.analiticas !== "boolean") return null;
    return {
      necesarias: true,
      analiticas: parsed.analiticas,
      fecha: typeof parsed.fecha === "string" ? parsed.fecha : "",
    };
  } catch {
    return null;
  }
}

export function tieneConsentimientoAnalitico(): boolean {
  if (typeof window === "undefined") return false;
  return parsear(getSnapshot())?.analiticas === true;
}

export function abrirPanelCookies() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export default function CookieConsent() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const [panel, setPanel] = useState(false);
  const [ajustes, setAjustes] = useState(false);
  const [analiticas, setAnaliticas] = useState(false);

  // Solo se muestra cuando consta que no hay respuesta guardada (raw === null)
  // o cuando se abre a mano desde la politica de cookies.
  const visible = panel || raw === null;

  useEffect(() => {
    const abrir = () => {
      setAnaliticas(parsear(getSnapshot())?.analiticas ?? false);
      setAjustes(true);
      setPanel(true);
    };
    window.addEventListener(OPEN_EVENT, abrir);
    return () => window.removeEventListener(OPEN_EVENT, abrir);
  }, []);

  const guardar = useCallback((acepta: boolean) => {
    const valor: CookieConsent = {
      necesarias: true,
      analiticas: acepta,
      fecha: new Date().toISOString(),
    };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(valor));
    } catch {
      // Navegacion privada o almacenamiento bloqueado: el banner reaparecera.
    }
    setAnaliticas(acepta);
    setAjustes(false);
    setPanel(false);
    // Las herramientas de analitica se enganchan a este evento: solo deben
    // cargarse cuando analiticas es true (art. 22.2 LSSI-CE).
    window.dispatchEvent(
      new CustomEvent<CookieConsent>(CHANGE_EVENT, { detail: valor }),
    );
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-x-0 top-auto bottom-0 z-300 border-t border-line bg-surface pt-5 pb-[calc(20px_+_env(safe-area-inset-bottom))] shadow-[0_-12px_40px_rgba(10,8,6,0.14)]"
          role="dialog"
          aria-labelledby="cookie-banner-titulo"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={SPRING_PANEL}
        >
          <div className="mx-auto flex max-w-[980px] flex-col items-stretch gap-4 px-[18px] tablet:flex-row tablet:items-center tablet:gap-x-8 tablet:gap-y-6 tablet:px-6">
            <div className="min-w-0 flex-auto">
              <h2
                id="cookie-banner-titulo"
                className="mx-0 mt-0 mb-1.5 text-[17px] font-bold"
              >
                Cookies en manupalop.com
              </h2>
              <p className="m-0 text-[14px] leading-[1.6] text-ink-muted">
                Usamos cookies técnicas necesarias para que la web funcione y,
                solo si las aceptas, cookies analíticas para entender cómo se
                usa el sitio. Puedes aceptarlas, rechazarlas o configurarlas.
                Más información en la{" "}
                <Link
                  href="/politica-de-cookies"
                  className="text-brand-dark underline"
                >
                  Política de cookies
                </Link>
                .
              </p>

              {ajustes ? (
                <div className="mt-[18px] grid gap-3.5 border-t border-line pt-4">
                  <label className={OPCION}>
                    <input
                      type="checkbox"
                      className={CHECKBOX}
                      checked
                      disabled
                    />
                    <span className="grid gap-0.5">
                      <strong className="text-[14px] text-ink">
                        Cookies técnicas o necesarias
                      </strong>
                      <em className="text-[13px] leading-[1.55] text-ink-muted not-italic">
                        Imprescindibles para la navegación, la seguridad y el
                        proceso de pago. Están exentas de consentimiento y no
                        pueden desactivarse.
                      </em>
                    </span>
                  </label>
                  <label className={OPCION}>
                    <input
                      type="checkbox"
                      className={CHECKBOX}
                      checked={analiticas}
                      onChange={(e) => setAnaliticas(e.target.checked)}
                    />
                    <span className="grid gap-0.5">
                      <strong className="text-[14px] text-ink">
                        Cookies analíticas o de medición
                      </strong>
                      <em className="text-[13px] leading-[1.55] text-ink-muted not-italic">
                        Nos permiten medir visitas y contenidos más leídos de
                        forma agregada (Google Analytics). Solo se instalan si
                        las aceptas.
                      </em>
                    </span>
                  </label>
                </div>
              ) : null}
            </div>

            <div className="flex flex-none flex-wrap items-center gap-x-3 gap-y-2.5">
              {ajustes ? (
                <MotionButton
                  type="button"
                  className={cn(btn(), BANNER_BTN)}
                  onClick={() => guardar(analiticas)}
                  {...lift}
                >
                  Guardar preferencias
                </MotionButton>
              ) : (
                <>
                  <MotionButton
                    type="button"
                    className={cn(btn(), BANNER_BTN)}
                    onClick={() => guardar(true)}
                    {...lift}
                  >
                    Aceptar todas
                  </MotionButton>
                  <MotionButton
                    type="button"
                    className={cn(btn({ variant: "outline" }), BANNER_BTN)}
                    onClick={() => guardar(false)}
                    {...lift}
                  >
                    Rechazar
                  </MotionButton>
                  <MotionButton
                    type="button"
                    className="cursor-pointer border-0 bg-transparent p-1 font-sans text-[14px] font-semibold text-ink-muted underline hover:text-brand-dark max-tablet:flex-[1_1_100%] max-tablet:text-center"
                    onClick={() => setAjustes(true)}
                    {...lift}
                  >
                    Configurar
                  </MotionButton>
                </>
              )}
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
