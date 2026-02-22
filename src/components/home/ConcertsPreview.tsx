import EventCard from "@/components/ui/EventCard";
import type { EventItem } from "@/data/events";
import { fetchEvents } from "@/data/events";
import { createPageUrl } from "@/utils/helpers";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function ConcertsPreview() {
  const upcomingConcerts: EventItem[] = await fetchEvents(3);

  return (
    <section className="bg-[--color-soft-charcoal] py-24 px-6 shadow-[0_10px_60px_-15px_var(--color-deep-teal)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 animate-reveal fade-up">
          <div>
            <span className="text-(--color-champagne-gold) font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
              Koncerty
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white) leading-tight">
              Nadchodzące wydarzenia
            </h2>
          </div>
          <Link
            href={createPageUrl("wydarzenia")}
            className="inline-flex items-center gap-3 text-(--color-champagne-gold) font-montserrat font-semibold text-sm uppercase tracking-wider hover:gap-5 transition-all duration-300 group mt-6 md:mt-0"
          >
            Zobacz wszystkie
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Concert List */}
        <div className="space-y-0">
          {upcomingConcerts.map((concert, index) => {
            return <EventCard key={concert.id} event={concert} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
}
