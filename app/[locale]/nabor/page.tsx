import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import JoinUs from "@/screens/JoinUs";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.joinus" });
  return { title: t("title"), description: t("description") };
}

export default function Page() {
  return (
    <div className="pt-30">
      <JoinUs />
      <div className="h-30 w-full bg-(--color-deep-teal-medium)" />
    </div>
  );
}
