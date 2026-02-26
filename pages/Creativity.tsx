import Discography from "@/components/creativity/Discography";
import Hero from "@/components/creativity/Hero";
import SeeRepertoire from "@/components/creativity/SeeRepertoire";
import Streamings from "@/components/creativity/Streamings";
import Videos from "@/components/creativity/Videos";
import SectionScrollHeader, { ScrollSectionLink } from "@/components/layout/SectionScrollHeader";

export default function Creativity() {
  const sectionLinks: ScrollSectionLink[] = [
    { label: "Streamingi", id: "streamingi" },
    { label: "Teledyski", id: "teledyski" },
    { label: "Albumy", id: "albumy" },
    { label: "Repertuar", id: "repertuar" },
  ];
  return (
    <div className="bg-(--color-soft-charcoal) min-h-screen">
      <Hero />
      <SectionScrollHeader items={sectionLinks} />
      <Streamings />
      <Videos />
      <Discography />
      <SeeRepertoire />
    </div>
  );
}
