"use client";

import Link from "next/link";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "manupalop-cookie-consent";
const OPEN_EVENT = "manupalop:abrir-cookies";
const CHANGE_EVENT = "manupalop:cookies";

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

  if (!visible) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-labelledby="cookie-banner-titulo"
    >
      <div className="cookie-banner-inner">
        <div className="cookie-banner-texto">
          <h2 id="cookie-banner-titulo">Cookies en manupalop.com</h2>
          <p>
            Usamos cookies técnicas necesarias para que la web funcione y, solo
            si las aceptas, cookies analíticas para entender cómo se usa el
            sitio. Puedes aceptarlas, rechazarlas o configurarlas. Más
            información en la{" "}
            <Link href="/politica-de-cookies">Política de cookies</Link>.
          </p>

          {ajustes ? (
            <div className="cookie-opciones">
              <label className="cookie-opcion">
                <input type="checkbox" checked disabled />
                <span>
                  <strong>Cookies técnicas o necesarias</strong>
                  <em>
                    Imprescindibles para la navegación, la seguridad y el
                    proceso de pago. Están exentas de consentimiento y no pueden
                    desactivarse.
                  </em>
                </span>
              </label>
              <label className="cookie-opcion">
                <input
                  type="checkbox"
                  checked={analiticas}
                  onChange={(e) => setAnaliticas(e.target.checked)}
                />
                <span>
                  <strong>Cookies analíticas o de medición</strong>
                  <em>
                    Nos permiten medir visitas y contenidos más leídos de forma
                    agregada (Google Analytics). Solo se instalan si las
                    aceptas.
                  </em>
                </span>
              </label>
            </div>
          ) : null}
        </div>

        <div className="cookie-banner-acciones">
          {ajustes ? (
            <button
              type="button"
              className="btn btn-accent"
              onClick={() => guardar(analiticas)}
            >
              Guardar preferencias
            </button>
          ) : (
            <>
              <button
                type="button"
                className="btn btn-accent"
                onClick={() => guardar(true)}
              >
                Aceptar todas
              </button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => guardar(false)}
              >
                Rechazar
              </button>
              <button
                type="button"
                className="cookie-link"
                onClick={() => setAjustes(true)}
              >
                Configurar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
