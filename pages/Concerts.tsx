"use client";

import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import { motion } from 'framer-motion';
import { Clock, ExternalLink, MapPin } from 'lucide-react';
import Image from 'next/image';

const concerts = [
  {
    id: 'c-2026-03-12-krakow',
    title: 'Wiosenna Gala Chóralna',
    date: '2026-03-12',
    time: '19:00',
    venue: 'Filharmonia Krakowska',
    city: 'Kraków',
    description: 'Wieczór muzyki sakralnej i współczesnych kompozycji chóralnych.',
    image_url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900&q=80',
    ticket_url: 'https://example.com/bilety/krakow-2026-03-12',
    is_past: false
  },
  {
    id: 'c-2026-04-05-warszawa',
    title: 'Koncert Wielkanocny',
    date: '2026-04-05',
    time: '18:30',
    venue: 'Teatr Wielki',
    city: 'Warszawa',
    description: 'Wspolny koncert z orkiestra kameralna. Repertuar: Pergolesi, Vivaldi.',
    image_url: 'https://images.unsplash.com/photo-1485562569060-2eec283d3391?w=900&q=80',
    ticket_url: 'https://example.com/bilety/warszawa-2026-04-05',
    is_past: false
  },
  {
    id: 'c-2025-12-14-gdansk',
    title: 'Zimowy Koncert Dobroczynny',
    date: '2025-12-14',
    time: '20:00',
    venue: 'Polska Filharmonia Baltycka',
    city: 'Gdansk',
    description: 'Podsumowanie roku artystycznego z udziałem gosci specjalnych.',
    image_url: 'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=900&q=80',
    ticket_url: '',
    is_past: true
  },
  {
    id: 'c-2025-10-20-poznan',
    title: 'Muzyka Filmowa na Zywo',
    date: '2025-10-20',
    time: '19:30',
    venue: 'Aula UAM',
    city: 'Poznan',
    description: 'Najpiekniejsze motywy filmowe w wersjach chóralnych.',
    image_url: 'https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=900&q=80',
    ticket_url: '',
    is_past: true
  }
];

export default function Concerts() {

  return (
    <div className="bg-(--color-soft-charcoal) min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden bg-linear-to-b from-(--color-deep-teal)/40 via-(--color-deep-teal)/20 to-(--color-soft-charcoal)">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1501612780327-45045538702b?w=1920&q=80"
            alt="Koncert"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-b from-(--color-deep-teal)/80 to-(--color-soft-charcoal)" />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-playfair text-5xl md:text-7xl text-(--color-off-white) mb-6">
              Koncerty
            </h1>
            <p className="font-montserrat text-lg text-(--color-off-white)/70">
              Dołącz do nas na niezapomnianym muzycznym przeżyciu
            </p>
          </motion.div>
        </div>
      </section>


      {/* Concert List */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
            <div className="grid gap-6">
              {concerts.map((concert, index) => (
                <motion.div
                  key={concert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-(--color-deep-teal)/15 border border-(--color-off-white)/10 hover:border-(--color-champagne-gold)/30 transition-all overflow-hidden shadow-lg"
                >
                  <div className="grid md:grid-cols-[300px_1fr] gap-6">
                    {/* Image */}
                    <div className="relative aspect-video md:aspect-auto overflow-hidden bg-(--color-deep-teal)">
                      <Image
                        src={concert.image_url || "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80"}
                        alt={concert.title}
                        fill
                        sizes="(min-width: 768px) 300px, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-linear-to-r from-(--color-deep-teal)/60 to-transparent" />
                      
                      {/* Date badge */}
                      <div className="absolute top-4 left-4 bg-(--color-champagne-gold) px-4 py-2">
                        <span className="block font-playfair text-2xl text-(--color-soft-charcoal)">
                          {format(new Date(concert.date), 'd', { locale: pl })}
                        </span>
                        <span className="block font-montserrat text-xs text-(--color-soft-charcoal) uppercase">
                          {format(new Date(concert.date), 'MMM', { locale: pl })}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="font-playfair text-3xl text-(--color-off-white) mb-4 group-hover:text-(--color-champagne-gold) transition-colors">
                          {concert.title}
                        </h3>
                        
                        <div className="space-y-2 mb-6">
                          <div className="flex items-center gap-3 text-(--color-off-white)/60 font-montserrat text-sm">
                            <Clock size={16} className="text-(--color-champagne-gold)" />
                            {concert.time}
                          </div>
                          <div className="flex items-center gap-3 text-(--color-off-white)/60 font-montserrat text-sm">
                            <MapPin size={16} className="text-(--color-champagne-gold)" />
                            {concert.venue}, {concert.city}
                          </div>
                        </div>

                        {concert.description && (
                          <p className="text-(--color-off-white)/70 font-montserrat leading-relaxed">
                            {concert.description}
                          </p>
                        )}
                      </div>

                      {concert.ticket_url && !concert.is_past && (
                        <div className="mt-6">
                          <a
                            href={concert.ticket_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-(--color-champagne-gold) text-(--color-soft-charcoal) font-montserrat font-semibold text-sm uppercase tracking-wider hover:bg-(--color-champagne-gold)/90 transition-all"
                          >
                            Kup bilet
                            <ExternalLink size={16} />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
                    </section >
        </div>

  );
}