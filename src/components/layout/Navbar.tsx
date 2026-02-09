"use client";

import { createPageUrl } from '@/utils/helpers';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'O nas', page: 'About' },
  { name: 'Dyrygent', page: 'Conductor' },
  { name: 'Koncerty', page: 'Concerts' },
  { name: 'Twórczość', page: 'Creativity' },
  { name: 'Wsparcie', page: 'Support' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[rgb(var(--color-soft-charcoal-rgb)/0.95)] backdrop-blur-md py-4 shadow-[0_4px_30px_rgb(var(--color-deep-teal-rgb)/0.3)]' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href={createPageUrl('Home')} 
            className="inline-flex items-center"
          >
            <Image
              src="/assets/logo/logo2-1-2.png"
              alt="Chór Politechniki Morskiej w Szczecinie"
              width={220}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                href={createPageUrl(link.page)}
                className={`font-montserrat text-sm uppercase tracking-wider transition-colors ${
                  pathname?.includes(link.page.toLowerCase())
                    ? 'text-[var(--color-champagne-gold)]'
                    : 'text-[rgb(var(--color-off-white-rgb)/0.8)] hover:text-[var(--color-champagne-gold)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button
          <Link
            href={createPageUrl('Concerts')}
            className="hidden lg:flex px-6 py-2 border border-[var(--color-champagne-gold)] text-[var(--color-champagne-gold)] font-montserrat text-sm uppercase tracking-wider hover:bg-[var(--color-champagne-gold)] hover:text-[var(--color-soft-charcoal)] transition-all duration-300"
          >
            Bilety
          </Link> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-(--color-off-white) p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[var(--color-soft-charcoal)] pt-24"
          >
            <div className="flex flex-col items-center gap-8 py-12">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  href={createPageUrl(link.page)}
                  className={`font-playfair text-2xl transition-colors ${
                    pathname?.includes(link.page.toLowerCase())
                      ? 'text-[var(--color-champagne-gold)]'
                      : 'text-[var(--color-off-white)] hover:text-[var(--color-champagne-gold)]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href={createPageUrl('Concerts')}
                className="mt-8 px-8 py-4 bg-[var(--color-champagne-gold)] text-[var(--color-soft-charcoal)] font-montserrat font-semibold text-sm uppercase tracking-wider"
              >
                Kup bilet
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}