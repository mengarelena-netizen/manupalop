import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HeroSection from "@/components/home/HeroSection";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import AboutSection from "@/components/home/AboutSection";
import ClubVipSection from "@/components/home/ClubVipSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ProgramFitSection from "@/components/home/ProgramFitSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export const metadata: Metadata = {
  title: "Manu Palop | Recupera el control de tu cuerpo y tu vida",
  description:
    "Desarrollo personal a través del cuerpo y la mente. Bajé 60 kg y hoy te acompaño con salud, mentalidad, hábitos y respiración consciente. Tu cuerpo es el comienzo. Tu transformación es el destino.",
  keywords: [
    "salud",
    "mentalidad",
    "hábitos",
    "respiración consciente",
    "desarrollo personal",
    "acompañamiento personal",
    "pérdida de peso",
    "Manu Palop",
  ],
};

export default function Home() {
  return (
    <>
      <SiteHeader home />
      <HeroSection />
      <BeforeAfterSection />
      <AboutSection />
      <ClubVipSection />
      <TestimonialsSection />
      <ProgramFitSection />
      <FinalCtaSection />
      <SiteFooter />
    </>
  );
}
