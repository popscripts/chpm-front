import AwardsListWithMore from "@/components/about/AwardsListWithMore";
import SectionHeader from "@/components/ui/SectionHeader";
import type { FestivalItem } from "@/data/festivals";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";

type AwardsProps = {
  festivals: FestivalItem[];
};

export default async function Awards({ festivals }: AwardsProps) {
  const t = await getTranslations("awardsPage");

  return (
    <div className="bg-linear-to-t from-(--color-deep-teal-medium) to-(--color-soft-charcoal)">
      <section className="py-16 px-4 mt-10 max-w-6xl mx-auto">
        <div className="mb-8">
          <Link
            href={{ pathname: "/o-nas", hash: "nagrody" }}
            className="inline-flex items-center gap-2 text-(--color-champagne-gold) font-montserrat text-sm uppercase tracking-wider hover:text-(--color-off-white) transition-colors"
          >
            <ArrowLeft size={16} />
            {t("back")}
          </Link>
        </div>

        <SectionHeader
          title={t("title")}
          description={t.rich("descriptionRich", {
            highlight: (chunks) => (
              <strong className="text-(--color-champagne-gold)">{chunks}</strong>
            ),
          })}
        />

        <AwardsListWithMore initialFestivals={festivals} pageSize={50} />
      </section>
    </div>
  );
}
