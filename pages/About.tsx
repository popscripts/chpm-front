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
import type { FestivalItem } from "@/data/festivals";

type AboutProps = {
  festivals?: FestivalItem[];
};

export default function About({ festivals = [] }: AboutProps) {
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
      <Awards festivals={festivals} />
      <WhatIsSpecial />
      <Achievements />
      <Project />
    </div>
  );
}
