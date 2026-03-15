import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Home from "@/screens/Home";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });
  return { title: t("title"), description: t("description") };
}

export default function HomePage() {
  return <Home />;
}
