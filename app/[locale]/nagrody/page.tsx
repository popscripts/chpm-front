import { fetchFestivals } from "@/data/festivals";
import Awards from "@/screens/Awards";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.awards" });
  return { title: t("title"), description: t("description") };
}

export default async function Page() {
  const festivals = await fetchFestivals({ limit: 50 });

  return <Awards festivals={festivals} />;
}
