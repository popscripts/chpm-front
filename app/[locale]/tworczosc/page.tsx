import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Creativity from "@/screens/Creativity";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.creativity" });
  return { title: t("title"), description: t("description") };
}

export default function Page() {
  return <Creativity />;
}
