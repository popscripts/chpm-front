import AboutPreview from "@/components/home/AboutPreview";
import ConcertsPreview from "@/components/home/ConcertsPreview";
import ConductorPreview from "@/components/home/ConductorPreview";
import CreativityPreview from "@/components/home/CreativityPreview";
import HeroSection from "@/components/home/HeroSection";
import MultimediaSection from "@/components/home/MultimediaSection";
import SupportPreview from "@/components/home/SupportPreview";
import SectionScrollHeader from "@/components/layout/SectionScrollHeader";

const sections = [
  { id: "o-nas", label: "O nas" },
  { id: "multimedia", label: "Teledyski" },
  { id: "wydarzenia", label: "Wydarzenia" },
  { id: "dyrygent", label: "Dyrygent" },
  { id: "tworczosc", label: "Twórczość" },
  { id: "wesprzyj-nas", label: "Wsparcie" },
]

export default function Home() {
  return (
    <div className="bg-(--color-soft-charcoal)">
      <HeroSection />
      <SectionScrollHeader items={sections} />
      <AboutPreview />
      <MultimediaSection />
      <ConcertsPreview />
      <ConductorPreview />
      <CreativityPreview />
      <SupportPreview />
    </div>
  );
}
