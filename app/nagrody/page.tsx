import AwardsListWithMore from "@/components/about/AwardsListWithMore";
import SectionHeader from "@/components/about/SectionHeader";
import { fetchFestivals } from "@/data/festivals";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  const festivals = await fetchFestivals({ limit: 50 });

  return (
    <div className="bg-linear-to-t from-(--color-deep-teal-medium) to-(--color-soft-charcoal)">
      <section className="py-16 px-4 mt-10 max-w-6xl mx-auto ">
        <div className="mb-8">
          <Link
            href="/o-nas#nagrody"
            className="inline-flex items-center gap-2 text-(--color-champagne-gold) font-montserrat text-sm uppercase tracking-wider hover:text-(--color-off-white) transition-colors"
          >
            <ArrowLeft size={16} />
            Powrót
          </Link>
        </div>
        <SectionHeader
          title={
            <>
              Nasze{" "}
              <span className="text-(--color-champagne-gold)">nagrody</span>
            </>
          }
          description={
            <>
              Tylko w ostatnich 10 latach zdobyliśmy ponad{" "}
              <strong className="text-(--color-champagne-gold)">
                85 głównych nagród
              </strong>{" "}
              festiwalowych, w tym 14 Grand Prix, 50 Złotych Medali oraz liczne
              nagrody uznaniowe
            </>
          }
        />

        <AwardsListWithMore initialFestivals={festivals} pageSize={50} />
      </section>
    </div>
  );
}
