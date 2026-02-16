import { createPageUrl } from "@/utils/helpers";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-(--color-deep-teal) pt-20 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href={createPageUrl("")}
              className="font-playfair text-3xl text-(--color-off-white) mb-4 block"
            >
              Chór Politechniki Morskiej w Szczecinie
            </Link>
            <p className="text-[rgb(var(--color-off-white-rgb)/0.6)] font-montserrat text-sm leading-relaxed">
              Chór kameralny z tradycją sięgającą ponad 30 lat. Tworzymy muzykę,
              która porusza serca.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat text-sm uppercase tracking-wider text-(--color-champagne-gold) mb-6">
              Menu
            </h4>
            <ul className="space-y-3">
              {[
                { name: "O nas", page: "o-nas" },
                { name: "Dyrygent", page: "dyrygent" },
                { name: "Koncerty", page: "koncerty" },
                { name: "Twórczość", page: "tworczosc" },
                { name: "Wsparcie", page: "wsparcie" },
              ].map((link) => (
                <li key={link.page}>
                  <Link
                    href={createPageUrl(link.page)}
                    className="text-[rgb(var(--color-off-white-rgb)/0.7)] hover:text-(--color-champagne-gold) transition-colors font-montserrat text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat text-sm uppercase tracking-wider text-(--color-champagne-gold) mb-6">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[rgb(var(--color-off-white-rgb)/0.7)] font-montserrat text-sm">
                <MapPin
                  size={18}
                  className="text-(--color-champagne-gold) shrink-0 mt-0.5"
                />
                <span>
                  ul. Muzyczna 12
                  <br />
                  00-001 Warszawa
                </span>
              </li>
              <li className="flex items-center gap-3 text-[rgb(var(--color-off-white-rgb)/0.7)] font-montserrat text-sm">
                <Mail size={18} className="text-(--color-champagne-gold)" />
                <a
                  href="mailto:kontakt@harmonia.pl"
                  className="hover:text-(--color-champagne-gold) transition-colors"
                >
                  kontakt@harmonia.pl
                </a>
              </li>
              <li className="flex items-center gap-3 text-[rgb(var(--color-off-white-rgb)/0.7)] font-montserrat text-sm">
                <Phone size={18} className="text-(--color-champagne-gold)" />
                <a
                  href="tel:+48123456789"
                  className="hover:text-(--color-champagne-gold) transition-colors"
                >
                  +48 123 456 789
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-montserrat text-sm uppercase tracking-wider text-(--color-champagne-gold) mb-6">
              Social Media
            </h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[rgb(var(--color-off-white-rgb)/0.2)] flex items-center justify-center text-[rgb(var(--color-off-white-rgb)/0.7)] hover:text-(--color-champagne-gold) hover:border-[var(--color-champagne-gold)] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[rgb(var(--color-off-white-rgb)/0.2)] flex items-center justify-center text-[rgb(var(--color-off-white-rgb)/0.7)] hover:text-(--color-champagne-gold) hover:border-[var(--color-champagne-gold)] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[rgb(var(--color-off-white-rgb)/0.2)] flex items-center justify-center text-[rgb(var(--color-off-white-rgb)/0.7)] hover:text-(--color-champagne-gold) hover:border-[var(--color-champagne-gold)] transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>

            {/* Newsletter signup hint */}
            <p className="text-[rgb(var(--color-off-white-rgb)/0.5)] font-montserrat text-xs mt-6">
              Śledź nas, aby nie przegapić żadnego koncertu
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[rgb(var(--color-off-white-rgb)/0.1)] mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[rgb(var(--color-off-white-rgb)/0.4)] font-montserrat text-xs">
          <p>© 2026 Chór Harmonia. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-(--color-champagne-gold) transition-colors"
            >
              Polityka prywatności
            </a>
            <a
              href="#"
              className="hover:text-(--color-champagne-gold) transition-colors"
            >
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
