import AboutPreview from "@/components/home/AboutPreview";
import ConcertsPreview from "@/components/home/ConcertsPreview";
import ConductorPreview from "@/components/home/ConductorPreview";
import CreativityPreview from "@/components/home/CreativityPreview";
import HeroSection from "@/components/home/HeroSection";
import SupportPreview from "@/components/home/SupportPreview";
import SectionScrollHeader from "@/components/layout/SectionScrollHeader";

const sections = [
  { id: "o-nas", label: "O nas" },
  { id: "wydarzenia", label: "Wydarzenia" },
  { id: "tworczosc", label: "Twórczość" },
  { id: "dyrygent", label: "Dyrygent" },
  { id: "wesprzyj-nas", label: "Wsparcie" },
]

export default function Home() {
  return (
    <div className="bg-(--color-soft-charcoal)">
      <HeroSection />
      <SectionScrollHeader items={sections} />
      <AboutPreview />
      <ConcertsPreview />
      <CreativityPreview />
      <ConductorPreview />
      <SupportPreview />
    </div>
  );
}
