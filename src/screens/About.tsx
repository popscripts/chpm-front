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
import { getTranslations } from "next-intl/server";

type AboutProps = {
  festivals?: FestivalItem[];
};

export default async function About({ festivals = [] }: AboutProps) {
  const t = await getTranslations("aboutPage.scroll");

  const sectionLinks: ScrollSectionLink[] = [
    { label: t("whoWeAre"), id: "kim-jestesmy" },
    { label: t("awards"), id: "nagrody" },
    { label: t("whatMakesUsSpecial"), id: "co-nas-wyroznia" },
    { label: t("achievements"), id: "osiagniecia" },
    { label: t("sharedSounds"), id: "wspolne-brzmienia" },
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
