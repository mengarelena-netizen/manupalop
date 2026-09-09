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
  title: "Manu Palop | Pérdida de peso",
  description:
    "Perdí 60 kg y ahora acompaño a otras personas a lograrlo. Únete al Club VIP.",
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
