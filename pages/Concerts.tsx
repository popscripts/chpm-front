"use client";

import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import { motion } from 'framer-motion';
import { Clock, ExternalLink, MapPin } from 'lucide-react';
import { useState } from 'react';

const placeholderConcerts = [
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
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingConcerts = placeholderConcerts.filter(c => !c.is_past);
  const pastConcerts = placeholderConcerts.filter(c => c.is_past);
  const displayConcerts = activeTab === 'upcoming' ? upcomingConcerts : pastConcerts;

  return (
    <div className="bg-(--color-soft-charcoal) min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden bg-gradient-to-b from-(--color-deep-teal)/40 via-(--color-deep-teal)/20 to-(--color-soft-charcoal)">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501612780327-45045538702b?w=1920&q=80"
            alt="Koncert"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-(--color-deep-teal)/80 to-(--color-soft-charcoal)" />
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

      {/* Tabs */}
      <section className="py-12 px-6 bg-gradient-to-b from-(--color-deep-teal)/20 to-(--color-soft-charcoal) shadow-[0_10px_40px_-15px_rgba(0,56,77,0.3)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-3 font-montserrat text-sm uppercase tracking-wider transition-all ${
                activeTab === 'upcoming'
                  ? 'bg-(--color-champagne-gold) text-(--color-soft-charcoal)'
                  : 'border border-(--color-off-white)/30 text-(--color-off-white) hover:bg-(--color-off-white)/5'
              }`}
            >
              Nadchodzące ({upcomingConcerts.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-8 py-3 font-montserrat text-sm uppercase tracking-wider transition-all ${
                activeTab === 'past'
                  ? 'bg-(--color-champagne-gold) text-(--color-soft-charcoal)'
                  : 'border border-(--color-off-white)/30 text-(--color-off-white) hover:bg-(--color-off-white)/5'
              }`}
            >
              Archiwum ({pastConcerts.length})
            </button>
          </div>
        </div>
      </section>

      {/* Concert List */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {displayConcerts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-(--color-off-white)/50 font-montserrat">
                {activeTab === 'upcoming' ? 'Brak nadchodzących koncertów' : 'Brak archiwalnych koncertów'}
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {displayConcerts.map((concert, index) => (
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
                      <img
                        src={concert.image_url || `https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80`}
                        alt={concert.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-(--color-deep-teal)/60 to-transparent" />
                      
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
          )}
        </div>
      </section>
    </div>
  );
}