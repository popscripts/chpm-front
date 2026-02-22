import Hero from "@/components/events/hero";
import Facebook from "@/components/icons/Facebook";
import Instagram from "@/components/icons/Instagram";
import Tiktok from "@/components/icons/Tiktok";
import { EventItem } from "@/data/events";
import { createEventAnchorId } from "@/utils/helpers";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { ArrowLeft, Calendar, Clock, Globe, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EventDetailsProps {
  event?: EventItem | null;
}

function EventDetails({ event }: EventDetailsProps) {
  if (!event) {
    return (
      <div className="min-h-screen bg-(--color-soft-charcoal)">
        <Hero isAbsolute />
        <section className="relative mt-22.5 overflow-hidden">
          <div className="max-w-6xl mx-auto w-full px-6 py-10">
            <Link
              href="/wydarzenia"
              className="inline-flex items-center gap-2 text-(--color-off-white)/80 hover:text-(--color-champagne-gold) font-montserrat text-sm mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Wszystkie wydarzenia
            </Link>
            <h1 className="font-playfair text-3xl md:text-5xl text-(--color-off-white)">
              Nie znaleziono wydarzenia
            </h1>
          </div>
        </section>
      </div>
    );
  }

  const getPlaformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "facebook":
        return <Facebook size={18} />;
      case "instagram":
        return <Instagram size={18} />;
      case "tiktok":
        return <Tiktok size={18} />;
      default:
        return <Globe size={18} />;
    }
  };

  return (
    <div className="min-h-screen bg-(--color-soft-charcoal)">
      <Hero isAbsolute />
      <section className="relative mt-22.5 lg:h-[40vh] lg:mt-0 overflow-hidden">
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-6xl mx-auto w-full px-6 pb-10 animate-reveal fade-up">
            <Link
              href={`/wydarzenia#${createEventAnchorId(event.id)}`}
              className="inline-flex items-center gap-2 text-(--color-off-white)/80 hover:text-(--color-champagne-gold) font-montserrat text-sm mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Wszystkie wydarzenia
            </Link>
            <h1 className="font-playfair text-4xl md:text-6xl text-(--color-off-white)">
              {event.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 max-w-6xl mx-auto animate-reveal fade-up ">
        <div
          className={`grid gap-8 ${
            event.imageUrl ? "lg:grid-cols-[1fr_360px]" : "lg:grid-cols-1"
          }`}
        >
          <div>
            <div className="flex flex-wrap gap-5 text-[rgb(var(--color-off-white-rgb)/0.75)] font-montserrat text-sm mb-8">
              <span className="flex items-center gap-2">
                <Calendar size={15} className="text-(--color-champagne-gold)" />
                {format(new Date(event.date), "d MMMM yyyy, HH:mm", {
                  locale: pl,
                })}
              </span>
              {event.duration !== null && (
                <span className="flex items-center gap-2">
                  <Clock size={15} className="text-(--color-champagne-gold)" />
                  {event.duration} min
                </span>
              )}
              <span className="flex items-center gap-2">
                <MapPin size={15} className="text-(--color-champagne-gold)" />
                {event.location}
              </span>
            </div>

            <p className="text-(--color-off-white)/80 font-montserrat leading-relaxed whitespace-pre-line">
              {event.description}
            </p>

            {(event.link || event.socialMedia.length > 0) && (
              <div>
                <div className="mt-8 mb-4 flex flex-wrap items-center gap-3">
                  {event.socialMedia.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-2 py-2 border border-(--color-off-white)/20 text-(--color-off-white-medium) font-montserrat text-xs uppercase tracking-wider hover:border-(--color-champagne-gold)/40 hover:text-(--color-off-white) transition-colors"
                    >
                      {getPlaformIcon(social.platform)}
                    </a>
                  ))}
                </div>
                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 border border-(--color-champagne-gold)/60 text-(--color-champagne-gold) font-montserrat text-md uppercase tracking-wider hover:border-(--color-champagne-gold) hover:bg-(--color-champagne-gold)/10 transition-all"
                  >
                    Kup bilet
                  </a>
                )}
              </div>
            )}
          </div>

          {event.imageUrl && (
            <div className="flex items-center justify-center p-4">
              <div className="relative isolate w-full max-w-90">
                <div className="relative z-10 w-full">
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    width={720}
                    height={1080}
                    sizes="(min-width: 1024px) 360px, 100vw"
                    className="h-auto w-full object-contain"
                    unoptimized
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-full h-full border border-[rgb(var(--color-champagne-gold-rgb)/0.3)] z-0" />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default EventDetails;
