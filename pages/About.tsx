import Achievements from "@/components/about/Achievements";
import Awards from "@/components/about/Awards";
import Hero from "@/components/about/Hero";
import Project from "@/components/about/Project";
import Stats from "@/components/about/Stats";
import Story from "@/components/about/Story";
import WhatIsSpecial from "@/components/about/WhatIsSpecial";
import SectionScrollHeader, {
  ScrollSectionLink,
} from "@/components/layout/SectionScrollHeader";

export default function About() {
  const sectionLinks: ScrollSectionLink[] = [
    { label: "Kim jesteśmy", id: "kim-jestesmy" },
    { label: "Nagrody", id: "nagrody" },
    { label: "Co nas wyróżnia", id: "co-nas-wyroznia" },
    { label: "Osiągnięcia", id: "osiagniecia" },
    { label: "Wspólne brzmienia", id: "wspolne-brzmienia" },
  ];

  return (
    <div className="bg-(--color-soft-charcoal)">
      <Hero />
      <SectionScrollHeader items={sectionLinks} />
      <Story />
      <Stats />
      <Awards />
      <WhatIsSpecial />
      <Achievements />
      <Project />
    </div>
  );
}
