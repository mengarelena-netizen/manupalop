import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Container from "@/components/Container";
import { btn, LEAD, SECTION } from "@/lib/site-ui";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Mi libro: Método TEMIS | Manu Palop",
  description:
    "Método TEMIS: la antidieta. Todo lo que aprendí perdiendo 60 kg, en un libro.",
};

export default function Libro() {
  return (
    <>
      <SiteHeader />

      <section className={SECTION} id="libro">
        <Container className="grid max-w-[660px] grid-cols-1 items-center gap-14 desktop:grid-cols-[1.2fr_0.8fr]">
          <div className="desktop:text-left">
            <h2>
              Método TEMIS:
              <br />
              La antidieta
            </h2>
            <p className={cn(LEAD, "mb-10")}>
              Todo lo que aprendí perdiendo 60 kg, en un libro. No hay
              soluciones mágicas ni atajos: comparto la teoría que desmonta
              mitos, la práctica con pasos concretos y la mentalidad para romper
              los patrones que te sabotean. Es mi forma de decirte que sí se
              puede, y que no estás solo.
            </p>
            <a
              href="https://amzn.to/3VvIIgj"
              target="_blank"
              className={cn(
                btn(),
                "mx-auto mt-2 block w-fit desktop:mx-0",
              )}
            >
              Quiero leerlo
            </a>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="max-h-[560px] w-full rounded-card object-cover"
              src="/images/libro.jpg"
              alt="Manu Palop con su libro Método TEMIS"
            />
          </div>
        </Container>
      </section>

      <SiteFooter />
    </>
  );
}
