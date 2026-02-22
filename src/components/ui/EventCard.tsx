import { EventItem } from "@/data/events";
import { createEventDetailsUrl } from "@/utils/helpers";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import Link from "next/link";

interface EventCardProps {
  event: EventItem;
  index: number;
}

function EventCard({ event, index }: EventCardProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      time: date.toLocaleTimeString("pl-PL", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      day: date.getDate(),
      month: date.toLocaleString("pl-PL", { month: "short" }).toUpperCase(),
      year: date.getFullYear(),
    };
  };
  const dateInfo = formatDate(event.date);
  return (
    <div
      key={event.id}
      id={`event-${event.id}`}
      className={`${index === 0 ? "border-t" : ""} group relative border-b border-[rgb(var(--color-off-white-rgb)/0.1)] py-8 hover:bg-[rgb(var(--color-deep-teal-rgb)/0.2)] [&:has(.ticket-link:hover)]:bg-transparent hover:[&:not(:has(.ticket-link:hover))_.event-title]:text-(--color-champagne-gold) hover:[&:not(:has(.ticket-link:hover))_.event-arrow]:text-(--color-champagne-gold) hover:[&:not(:has(.ticket-link:hover))_.event-arrow]:translate-x-1 hover:[&:not(:has(.ticket-link:hover))_.event-arrow]:-translate-y-1 transition-colors duration-300 cursor-pointer px-4 -mx-4 animate-reveal fade-up`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <Link
        href={createEventDetailsUrl(event.title, event.id)}
        className="absolute inset-0 z-10"
        aria-label={`Zobacz szczegóły wydarzenia: ${event.title}`}
      />

      <ArrowRight
        size={32}
        className="event-arrow absolute top-4 right-4 z-10 hidden md:block text-(--color-off-white-dark) -rotate-45 transition-all duration-300"
      />
      <div className="relative z-0 flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <span className="block font-playfair text-4xl text-(--color-champagne-gold)">
              {dateInfo.day}
            </span>
            <span className="block font-montserrat text-sm text-[rgb(var(--color-off-white-rgb)/0.6)]">
              {dateInfo.month}
            </span>
          </div>
          <div className="h-16 w-px bg-[rgb(var(--color-off-white-rgb)/0.2)]" />

          <h3 className="event-title md:hidden font-playfair text-2xl text-(--color-off-white) transition-colors">
            {event.title}
          </h3>
        </div>

        <div className="hidden md:block flex-1 md:pr-12">
          <h3 className="event-title font-playfair text-2xl text-(--color-off-white) transition-colors mb-2">
            {event.title}
          </h3>
          <div className="flex flex-wrap gap-4 text-[rgb(var(--color-off-white-rgb)/0.6)] font-montserrat text-sm">
            <span className="flex items-center gap-2">
              <Clock size={14} />
              {dateInfo.time}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} />
              {event.location}
            </span>
          </div>
        </div>

        <div className="md:hidden flex flex-col gap-2 text-[rgb(var(--color-off-white-rgb)/0.6)] font-montserrat text-sm">
          <span className="flex items-center gap-2">
            <Clock size={14} />
            {dateInfo.time}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={14} />
            {event.location}
          </span>
        </div>
      </div>

      {event.link && (
        <div className="pointer-events-auto">
          <Link
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="ticket-link relative z-20 mt-4 inline-flex w-fit px-5 py-2 border border-(--color-champagne-gold)/60 text-(--color-champagne-gold) font-montserrat text-xs uppercase tracking-wider hover:border-(--color-champagne-gold) hover:bg-(--color-champagne-gold)/10 transition-all md:absolute md:bottom-4 md:right-4 md:mt-0"
          >
            Kup bilet
          </Link>
        </div>
      )}
    </div>
  );
}

export default EventCard;
