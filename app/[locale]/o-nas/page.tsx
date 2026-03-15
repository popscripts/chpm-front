import { fetchFestivals } from "@/data/festivals";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import About from "@/screens/About";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });
  return { title: t("title"), description: t("description") };
}

export default async function Page() {
  const festivals = await fetchFestivals({ limit: 4 });
  return <About festivals={festivals} />;
}
