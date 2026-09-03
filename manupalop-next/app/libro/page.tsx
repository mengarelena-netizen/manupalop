import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Mi libro: Método TEMIS | Manu Palop",
  description:
    "Método TEMIS: la antidieta. Todo lo que aprendí perdiendo 60 kg, en un libro.",
};

export default function Libro() {
  return (
    <>
      <SiteHeader />

      <section className="section" id="libro">
        <div className="container libro-grid">
          <div className="libro-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/libro.jpg"
              alt="Manu Palop con su libro Método TEMIS"
            />
          </div>
          <div className="libro-content">
            <h2 className="libro-title">Método TEMIS: la antidieta</h2>
            <p className="section-lead">
              Todo lo que aprendí perdiendo 60 kg, en un libro. No hay soluciones
              mágicas ni atajos: comparto la teoría que desmonta mitos, la práctica
              con pasos concretos y la mentalidad para romper los patrones que te
              sabotean. Es mi forma de decirte que sí se puede, y que no estás solo.
            </p>
            <a href="#" className="btn btn-accent">
              Quiero leerlo
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
