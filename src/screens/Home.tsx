import AboutPreview from "@/components/home/AboutPreview";
import ConcertsPreview from "@/components/home/ConcertsPreview";
import ConductorPreview from "@/components/home/ConductorPreview";
import CreativityPreview from "@/components/home/CreativityPreview";
import HeroSection from "@/components/home/HeroSection";
import SupportPreview from "@/components/home/SupportPreview";
import SectionScrollHeader from "@/components/layout/SectionScrollHeader";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("home.sections");

  const sections = [
    { id: "o-nas", label: t("about") },
    { id: "wydarzenia", label: t("events") },
    { id: "tworczosc", label: t("creativity") },
    { id: "dyrygent", label: t("conductor") },
    { id: "wesprzyj-nas", label: t("support") },
  ];

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

