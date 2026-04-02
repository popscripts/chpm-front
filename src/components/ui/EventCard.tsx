import { EventItem } from "@/data/events";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

interface EventCardProps {
  event: EventItem;
  index: number;
  isCompact?: boolean;
}

async function EventCard({ event, index, isCompact = false }: EventCardProps) {
  const locale = await getLocale();
  const t = await getTranslations("events");
  const localeStr = locale === "en" ? "en-GB" : "pl-PL";

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      time: date.toLocaleTimeString(localeStr, {
        hour: "2-digit",
        minute: "2-digit",
      }),
      day: date.getDate(),
      month: date.toLocaleString(localeStr, { month: "short" }).toUpperCase(),
      year: date.getFullYear(),
    };
  };

  const eventSlug = event.title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const dateInfo = formatDate(event.date);
  return (
    <div
      id={`event-${event.id}`}
      className={`${index === 0 ? "border-t" : ""} ${isCompact ? "py-3" : "py-8"} group relative border-b border-[rgb(var(--color-off-white-rgb)/0.1)] hover:bg-[rgb(var(--color-deep-teal-rgb)/0.2)] [&:has(.ticket-link:hover)]:bg-transparent hover:[&:not(:has(.ticket-link:hover))_.event-title]:text-(--color-champagne-gold) hover:[&:not(:has(.ticket-link:hover))_.event-arrow]:text-(--color-champagne-gold) hover:[&:not(:has(.ticket-link:hover))_.event-arrow]:translate-x-1 hover:[&:not(:has(.ticket-link:hover))_.event-arrow]:-translate-y-1 transition-colors duration-300 cursor-pointer px-4 -mx-4 animate-reveal fade-up`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <Link
        href={{ pathname: "/wydarzenia/[id]", params: { id: `${eventSlug}--${event.id}` } }}
        className="absolute inset-0 z-10"
        aria-label={t("eventDetailsAria", { title: event.title })}
      />

      <ArrowRight
        size={isCompact ? 24 : 32}
        className="event-arrow absolute top-4 right-4 z-10 hidden md:block text-(--color-off-white-dark) -rotate-45 transition-all duration-300"
      />
      <div className="relative z-0 flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <span className={`block font-playfair  text-(--color-champagne-gold) ${isCompact ? "text-3xl" : "text-4xl"}`}>
              {dateInfo.day}
            </span>
            <span className="block font-montserrat text-sm text-[rgb(var(--color-off-white-rgb)/0.6)]">
              {dateInfo.month}
            </span>
          </div>
          <div className="h-16 w-px bg-[rgb(var(--color-off-white-rgb)/0.2)]" />

          <h3 className={`event-title md:hidden font-playfair ${isCompact ? "text-xl" : "text-2xl"} text-(--color-off-white) transition-colors`}>
            {event.title}
          </h3>
        </div>

        <div className="hidden md:block flex-1 md:pr-12">
          <h3 className={`event-title font-playfair ${isCompact ? "text-xl" : "text-2xl"} text-(--color-off-white) transition-colors mb-2`}>
            {event.title}
          </h3>
          <div className="flex flex-wrap gap-4 text-[rgb(var(--color-off-white-rgb)/0.6)] font-montserrat text-sm">
            <span className="flex items-center gap-2">
              <Clock size={14} className="shrink-0" />
              {dateInfo.time}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="shrink-0" />
              {event.location}
            </span>
          </div>
        </div>

        <div className="md:hidden flex flex-col gap-2 text-[rgb(var(--color-off-white-rgb)/0.6)] font-montserrat text-sm">
          <span className="flex items-center gap-2">
            <Clock size={14} className="shrink-0" />
            {dateInfo.time}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={14} className="shrink-0" />
            {event.location}
          </span>
        </div>
      </div>

      {event.link && (
        <div className="pointer-events-auto">
          <a
            href={event.link}
            aria-label={t("buyTicketAria", { title: event.title })}
            className="ticket-link relative z-20 mt-4 inline-flex w-fit px-5 py-2 border border-(--color-champagne-gold)/60 text-(--color-champagne-gold) font-montserrat text-xs uppercase tracking-wider hover:border-(--color-champagne-gold) hover:bg-(--color-champagne-gold)/10 transition-all md:absolute md:bottom-4 md:right-4 md:mt-0"
          >
            {t("buyTicket")}
          </a>
        </div>
      )}
    </div>
  );
}

export default EventCard;
