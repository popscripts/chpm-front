import AboutPreview from "@/components/home/AboutPreview";
import ConcertsPreview from "@/components/home/ConcertsPreview";
import ConductorPreview from "@/components/home/ConductorPreview";
import CreativityPreview from "@/components/home/CreativityPreview";
import HeroSection from "@/components/home/HeroSection";
import SupportPreview from "@/components/home/SupportPreview";

export default async function Home() {
  return (
    <div className="bg-(--color-soft-charcoal)">
      <HeroSection />
      <AboutPreview />
      <ConcertsPreview />
      <CreativityPreview />
      <ConductorPreview />
      <SupportPreview />
    </div>
  );
}

