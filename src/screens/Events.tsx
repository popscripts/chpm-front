import HashScrollToCenter from "@/components/layout/HashScrollToCenter";
import EventCard from "@/components/ui/EventCard";
import type { EventItem } from "@/data/events";
import { fetchEvents, splitEventsByTimeline } from "@/data/events";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Events() {
  const t = await getTranslations("events");
  const locale = await getLocale();
  const events: EventItem[] = await fetchEvents(undefined, locale);
  const localeStr = locale === "en" ? "en-GB" : "pl-PL";
  const { upcoming, past } = splitEventsByTimeline(events);

  const formatMonthYear = (dateStr: string) => {
    const date = new Date(dateStr);
    if (Number.isNaN(date.getTime())) {
      return t("noDate");
    }

    const monthYear = date.toLocaleDateString(localeStr, {
      month: "long",
      year: "numeric",
    });

    return monthYear.charAt(0).toUpperCase() + monthYear.slice(1);
  };

  const groupEventsByMonth = (items: EventItem[]) =>
    items.reduce<Record<string, EventItem[]>>(
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

  const upcomingByMonth = groupEventsByMonth(upcoming);
  const pastByMonth = groupEventsByMonth(past);

  const renderSection = (
    sectionTitle: string,
    sectionEvents: EventItem[],
    groupedEvents: Record<string, EventItem[]>,
    emptyMessage: string,
    isCompact = false,
  ) => {
    if (sectionEvents.length === 0) {
      return (
        <p className="text-(--color-off-white)/70 font-montserrat text-center">
          {emptyMessage}
        </p>
      );
    }

    return (
      <div className="grid gap-12">
        {Object.entries(groupedEvents).map(([monthLabel, monthEvents]) => (
          <section key={`${sectionTitle}-${monthLabel}`}>
            <h3 className="animate-reveal fade-left text-(--color-off-white-medium) font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
              {monthLabel}
            </h3>

            <div className="grid">
              {monthEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} isCompact={isCompact} />
              ))}
            </div>
          </section>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-(--color-soft-charcoal) min-h-screen">
      <HashScrollToCenter />

      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden bg-linear-to-b from-(--color-deep-teal)/40 via-(--color-deep-teal)/20 to-(--color-soft-charcoal)">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/event_hero.jpg"
            alt={t("hero.imageAlt")}
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
              {t.rich("hero.titleRich", {
                highlight: (chunks) => (
                  <span className="text-(--color-champagne-gold)">{chunks}</span>
                ),
              })}
            </h1>
            <p className="font-montserrat text-lg text-(--color-off-white)/70">
              {t("hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Event Lists */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-14">
        <section>
          <h2 className="text-(--color-champagne-gold) font-playfair text-3xl md:text-4xl text-center mb-8 block">
            {t("upcomingHeading")}
          </h2>
          {renderSection(
            t("upcomingHeading"),
            upcoming,
            upcomingByMonth,
            t("noUpcomingEvents"),
          )}
        </section>

        <section className="pt-8">
          <h2 className="text-(--color-off-white) font-playfair text-3xl md:text-4xl text-center mb-8 block">
            {t("pastHeading")}
          </h2>
          {renderSection(
            t("pastHeading"),
            past,
            pastByMonth,
            t("noPastEvents"),
            true
          )}
        </section>
      </section>
    </div>
  );
}
