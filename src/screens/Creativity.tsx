import Discography from "@/components/creativity/Discography";
import Hero from "@/components/creativity/Hero";
import SeeRepertoire from "@/components/creativity/SeeRepertoire";
import Streamings from "@/components/creativity/Streamings";
import Videos from "@/components/creativity/Videos";
import SectionScrollHeader, {
  ScrollSectionLink,
} from "@/components/layout/SectionScrollHeader";
import { getTranslations } from "next-intl/server";

export default async function Creativity() {
  const t = await getTranslations("creativityPage.scroll");

  const sectionLinks: ScrollSectionLink[] = [
    { label: t("streamings"), id: "streamingi" },
    { label: t("videos"), id: "teledyski" },
    { label: t("albums"), id: "albumy" },
    { label: t("repertoire"), id: "repertuar" },
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
