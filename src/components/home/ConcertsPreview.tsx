"use client";

import { createPageUrl } from '@/utils/helpers';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

const upcomingConcerts = [
  {
    id: 1,
    title: "Koncert Wielkanocny",
    date: "2026-04-05",
    time: "19:00",
    venue: "Filharmonia Narodowa",
    city: "Warszawa"
  },
  {
    id: 2,
    title: "Festiwal Muzyki Sakralnej",
    date: "2026-05-15",
    time: "18:30",
    venue: "Katedra św. Jana",
    city: "Kraków"
  },
  {
    id: 3,
    title: "Letnie Brzmienia",
    date: "2026-06-20",
    time: "20:00",
    venue: "Amfiteatr Miejski",
    city: "Gdańsk"
  }
];

export default function ConcertsPreview() {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      day: date.getDate(),
      month: date.toLocaleString('pl-PL', { month: 'short' }).toUpperCase(),
      year: date.getFullYear()
    };
  };

  return (
    <section className="bg-[var(--color-soft-charcoal)] py-24 px-6 shadow-[0_10px_60px_-15px_var(--color-deep-teal)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <span className="text-[var(--color-champagne-gold)] font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
              Koncerty
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[var(--color-off-white)] leading-tight">
              Nadchodzące wydarzenia
            </h2>
          </div>
          <Link
            href={createPageUrl('Concerts')}
            className="inline-flex items-center gap-3 text-[var(--color-champagne-gold)] font-montserrat font-semibold text-sm uppercase tracking-wider hover:gap-5 transition-all duration-300 group mt-6 md:mt-0"
          >
            Zobacz wszystkie
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Concert List */}
        <div className="space-y-0">
          {upcomingConcerts.map((concert, index) => {
            const dateInfo = formatDate(concert.date);
            return (
              <motion.div
                key={concert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border-t border-[rgb(var(--color-off-white-rgb)/0.1)] py-8 hover:bg-[rgb(var(--color-deep-teal-rgb)/0.2)] transition-colors duration-300 cursor-pointer px-4 -mx-4"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Date */}
                  <div className="flex items-center gap-4 md:w-48">
                    <div className="text-center">
                      <span className="block font-playfair text-4xl text-[var(--color-champagne-gold)]">{dateInfo.day}</span>
                      <span className="block font-montserrat text-sm text-[rgb(var(--color-off-white-rgb)/0.6)]">{dateInfo.month}</span>
                    </div>
                    <div className="h-16 w-px bg-[rgb(var(--color-off-white-rgb)/0.2)]" />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="font-playfair text-2xl text-[var(--color-off-white)] group-hover:text-[var(--color-champagne-gold)] transition-colors mb-2">
                      {concert.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-[rgb(var(--color-off-white-rgb)/0.6)] font-montserrat text-sm">
                      <span className="flex items-center gap-2">
                        <Clock size={14} />
                        {concert.time}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={14} />
                        {concert.venue}, {concert.city}
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowRight 
                    size={24} 
                    className="text-[rgb(var(--color-off-white-rgb)/0.3)] group-hover:text-[var(--color-champagne-gold)] group-hover:translate-x-2 transition-all duration-300" 
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}