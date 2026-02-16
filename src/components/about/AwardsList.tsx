import type { FestivalItem } from "@/data/festivals";

type AwardsListProps = {
  festivals: FestivalItem[];
};

export default function AwardsList({ festivals }: AwardsListProps) {
  if (!festivals.length) {
    return null;
  }

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-(--color-champagne-gold)/20" />
      <ul className="space-y-10">
        {festivals.map((festival, index) => (
          <li
            key={festival.id}
            className="relative pl-10 animate-reveal fade-up"
            style={{ transitionDelay: `${index * 90}ms` }}
          >
            <div className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-(--color-champagne-gold) shadow-[0_0_12px_rgba(212,175,55,0.5)]" />
            <div className="flex flex-col gap-3">
              <div>
                <span className="text-(--color-champagne-gold) font-semibold text-sm uppercase tracking-[0.2em]">
                  {festival.year ?? ""}
                </span>
                <h3 className="font-playfair text-2xl text-(--color-off-white) mt-2">
                  {festival.title}
                </h3>
                {festival.description ? (
                  <p className="text-(--color-off-white)/60 font-montserrat text-sm mt-2">
                    {festival.description}
                  </p>
                ) : null}
              </div>
              {festival.awards.length > 0 ? (
                <ul className="space-y-2 border-(--color-off-white)/10 pl-5">
                  {festival.awards.map((award) => (
                    <li key={award.id} className="relative">
                      <span className="absolute -left-5 top-2 h-1.5 w-1.5 rounded-full bg-(--color-champagne-gold)/70" />
                      <p className="text-(--color-off-white)/80 font-montserrat text-sm">
                        {award.title}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-(--color-off-white)/50 font-montserrat text-sm">
                  Brak przypisanych nagród.
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
