import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Container from "@/components/Container";
import { MotionA } from "@/components/motion/primitives";
import { lift } from "@/components/motion/config";
import { btn, LEAD, SECTION } from "@/lib/site-ui";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Método TEMIS: La antidieta | Manu Palop",
  description:
    "Método TEMIS: la antidieta. Todo lo que aprendí perdiendo 60 kg, en un libro.",
};

export default function Temis() {
  return (
    <>
      <SiteHeader />

      <section className={SECTION} id="temis">
        <Container className="grid max-w-[900px] grid-cols-1 items-center gap-10 desktop:grid-cols-[1.2fr_0.8fr]">
          <div className="desktop:text-left" data-reveal="">
            <h2>
              Método TEMIS:
              <br />
              <span className="text-brand-dark">La antidieta</span>
            </h2>
            <p className={cn(LEAD, "mb-8")}>
              Todo lo que aprendí perdiendo 60 kg, en un libro. No hay
              soluciones mágicas ni atajos: comparto la teoría que desmonta
              mitos, la práctica con pasos concretos y la mentalidad para romper
              los patrones que te sabotean. Es mi forma de decirte que sí se
              puede, y que no estás solo.
            </p>
            <MotionA
              href="https://amzn.to/3VvIIgj"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(btn(), "mx-auto mt-2 block w-fit desktop:mx-0")}
              {...lift}
            >
              Quiero leerlo
            </MotionA>
          </div>
          <div data-reveal="zoom">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-auto max-h-[560px] w-full rounded-card object-cover border border-line shadow-xs"
              src="/images/opt/libro.webp"
              srcSet="/images/opt/libro.webp 1x, /images/opt/libro@2x.webp 2x"
              width={612}
              height={816}
              alt="Manu Palop con su libro Método TEMIS"
            />
          </div>
        </Container>
      </section>

      <SiteFooter />
    </>
  );
}
