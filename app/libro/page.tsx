import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Container from "@/components/Container";
import { MotionA } from "@/components/motion/primitives";
import { lift } from "@/components/motion/config";
import { btn, CARD, HEADING, LEAD, SECTION } from "@/lib/site-ui";
import { cn } from "@/lib/utils";
import { ExternalLink, Laptop, Copy, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Método TEMIS: Rutina y Plan de Alimentación | Manu Palop",
  description:
    "Accede a la rutina de entrenamiento y al plan de alimentación del Método TEMIS para poner en práctica todo lo aprendido en el libro.",
};

const CARD_LABEL =
  "mx-0 mt-0 mb-2.5 text-[13px] font-extrabold tracking-[0.04em] uppercase text-brand-dark";
const CARD_TEXT = "m-0 text-[16px] text-ink";

export default function Libro() {
  return (
    <>
      <SiteHeader />

      <section className={SECTION} id="libro">
        <Container className="max-w-[760px] text-center">
          {/* Header Section matching Homepage layout & typography */}
          <div className="mx-auto max-w-[660px] mb-12 text-center" data-reveal="">
            <h2 className={HEADING}>
              Ahora te toca a ti:
              <br />
              <span className="text-brand-dark">Método TEMIS</span>
            </h2>

            <p className={cn(LEAD, "mx-auto mb-6 text-[18px] font-bold text-ink")}>
              Es hora de poner en práctica todo lo que has aprendido en el
              Método TEMIS.
            </p>

            <p className={cn(LEAD, "mx-auto")}>
              Ya tienes todas las claves y consejos para lograr una pérdida de
              peso sana y sostenible tal y como yo lo hice en el pasado. El
              siguiente paso es ponerlo en práctica. Para ayudarte en el camino
              he preparado esta rutina y este plan para ti.
            </p>
          </div>

          {/* Main Content Cards matching Homepage CARD & FIT_TEXT styles */}
          <div className="flex flex-col gap-8 text-left">
            {/* 1. Rutina de Entrenamiento */}
            <div
              className={cn(CARD, "bg-surface-alt p-7 sm:p-9")}
              data-reveal="zoom"
            >
              <p className={CARD_LABEL}>ESTA ES LA RUTINA DE ENTRENAMIENTO:</p>

              <p className={cn(CARD_TEXT, "mb-8")}>
                Haz clic en el botón y si tienes descargada la aplicación{" "}
                <strong className="font-bold">Hevy</strong> la rutina se
                añadirá a tu biblioteca.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <MotionA
                  href="https://hevy.com/folder/690087"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    btn({ variant: "dark" }),
                    "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-bold text-center",
                  )}
                  {...lift}
                >
                  <span>Rutina de entrenamiento</span>
                  <ExternalLink className="h-4 w-4 opacity-80" />
                </MotionA>

                <span className="text-[14px] text-ink-muted text-center sm:text-right">
                  Aplicación Hevy
                </span>
              </div>
            </div>

            {/* 2. Plan de Alimentación */}
            <div
              className={cn(CARD, "bg-surface-alt p-7 sm:p-9")}
              data-reveal="zoom"
            >
              <p className={CARD_LABEL}>Y ESTE EL PLAN DE ALIMENTACIÓN:</p>

              <p className={cn(CARD_TEXT, "font-bold mb-3")}>
                Sigue estas instrucciones para poder trabajar con él:
              </p>

              <ul className="mx-0 mb-6 flex flex-col gap-2.5 p-0 list-none text-[15px] text-ink">
                <li className="flex items-center gap-3 rounded-card border border-line bg-surface p-3 font-medium">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-[12px] font-extrabold text-brand-dark">
                    1
                  </span>
                  <span className="flex items-center gap-2">
                    <Laptop className="h-4 w-4 text-ink-muted" />
                    Accede desde un ordenador.
                  </span>
                </li>
                <li className="flex items-center gap-3 rounded-card border border-line bg-surface p-3 font-medium">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-[12px] font-extrabold text-brand-dark">
                    2
                  </span>
                  <span className="flex items-center gap-2">
                    <Copy className="h-4 w-4 text-ink-muted" />
                    Haz una copia del archivo.
                  </span>
                </li>
              </ul>

              {/* Graphic showing Google Sheets Archivo -> Hacer una copia */}
              <div className="mb-6 rounded-card border border-line bg-surface p-4 sm:p-5">
                <div className="flex items-center justify-between border-b border-line pb-2 mb-3 text-xs text-ink-muted font-mono">
                  <span className="font-semibold text-ink">
                    DIETA MÉTODO TEMIS
                  </span>
                  <span>Google Sheets</span>
                </div>

                <div className="rounded-lg border border-line bg-surface-alt p-3 text-xs text-ink font-sans">
                  <div className="flex flex-wrap items-center gap-3 border-b border-line pb-2 mb-2">
                    <span className="font-bold text-white bg-brand-dark px-2 py-0.5 rounded text-[11px] flex items-center gap-1">
                      1. Archivo
                    </span>
                    <span className="text-ink-muted">Editar</span>
                    <span className="text-ink-muted">Ver</span>
                    <span className="text-ink-muted">Insertar</span>
                    <span className="text-ink-muted">Formato</span>
                    <span className="text-ink-muted">Datos</span>
                  </div>

                  <div className="pl-2 space-y-1">
                    <div className="text-ink-muted py-0.5">Nuevo</div>
                    <div className="text-ink-muted py-0.5">Abrir</div>
                    <div className="font-bold text-white bg-brand-dark px-2.5 py-1 rounded text-[12px] flex items-center justify-between max-w-[190px]">
                      <span>2. Hacer una copia</span>
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <div className="text-ink-muted py-0.5">Compartir</div>
                  </div>
                </div>
              </div>

              <p className={cn(CARD_TEXT, "italic text-ink-muted mb-8")}>
                Ahora vuelve a tu libro para entender cómo funciona y cómo
                sacarle el máximo partido.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <MotionA
                  href="https://docs.google.com/spreadsheets/d/12B9DtUELL4ach9e-30yMrab8IfAILvsBMfh8srTZAWI/edit?gid=1013620638#gid=1013620638"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    btn({ variant: "dark" }),
                    "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-bold text-center",
                  )}
                  {...lift}
                >
                  <span>Plan de alimentación</span>
                  <ExternalLink className="h-4 w-4 opacity-80" />
                </MotionA>

                <span className="text-[14px] text-ink-muted text-center sm:text-right">
                  Plantilla de Google Sheets
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SiteFooter />
    </>
  );
}
