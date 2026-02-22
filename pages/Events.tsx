import HashScrollToCenter from "@/components/layout/HashScrollToCenter";
import EventCard from "@/components/ui/EventCard";
import type { EventItem } from "@/data/events";
import { fetchEvents } from "@/data/events";
import Image from "next/image";

export default async function Events() {
  const events: EventItem[] = await fetchEvents();

  const formatMonthYear = (dateStr: string) => {
    const date = new Date(dateStr);
    if (Number.isNaN(date.getTime())) {
      return "Bez daty";
    }

    const monthYear = date.toLocaleDateString("pl-PL", {
      month: "long",
      year: "numeric",
    });

    return monthYear.charAt(0).toUpperCase() + monthYear.slice(1);
  };

  const eventsByMonth = events.reduce<Record<string, EventItem[]>>(
    (acc, event) => {
      const monthKey = formatMonthYear(event.date);
      if (!acc[monthKey]) {
        acc[monthKey] = [];
      }

      acc[monthKey].push(event);
      return acc;
    },
    {},
  );

  return (
    <div className="bg-(--color-soft-charcoal) min-h-screen">
      <HashScrollToCenter />

      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden bg-linear-to-b from-(--color-deep-teal)/40 via-(--color-deep-teal)/20 to-(--color-soft-charcoal)">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/event_hero.jpg"
            alt="Koncert"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-b from-(--color-deep-teal)/45 to-(--color-soft-charcoal)" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center animate-reveal fade-up">
            <h1 className="font-playfair text-5xl md:text-7xl text-(--color-off-white) mb-6">
              Wydarzenia i{" "}
              <span className="text-(--color-champagne-gold)">koncerty</span>
            </h1>
            <p className="font-montserrat text-lg text-(--color-off-white)/70">
              Dołącz do nas na niezapomnianym muzycznym przeżyciu
            </p>
          </div>
        </div>
      </section>

      {/* Concert List */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        {events.length === 0 && (
          <p className="text-(--color-off-white)/70 font-montserrat text-center">
            Brak zaplanowanych koncertów.
          </p>
        )}

        {events.length > 0 && (
          <div className="grid gap-12">
            {Object.entries(eventsByMonth).map(([monthLabel, monthEvents]) => (
              <section key={monthLabel}>
                <h2 className="animate-reveal fade-left text-(--color-off-white-medium) font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
                  {monthLabel}
                </h2>

                <div className="grid">
                  {monthEvents.map((event, index) => (
                    <EventCard key={event.id} event={event} index={index} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
