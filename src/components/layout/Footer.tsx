import { SOCIAL_MEDIA } from "@/utils/constants";
import { createPageUrl } from "@/utils/helpers";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-(--color-deep-teal) pt-20 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href={createPageUrl("")}
              className="font-playfair text-3xl text-(--color-off-white) mb-4 block"
            >
              Chór Politechniki Morskiej w Szczecinie
            </Link>
            <p className="text-[rgb(var(--color-off-white-rgb)/0.6)] font-montserrat text-sm leading-relaxed">
              Chór akademicki z tradycją sięgającą ponad 20 lat. Wykonujemy szeroki repertuar, od muzyki klasycznej po współczesną.
            </p>
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
                  Politechnika Morska w Szczecinie <br />
ul. Wały Chrobrego 1-2<br />
70-500 Szczecin
                </span>
              </li>
                            <li className="flex items-center gap-3 text-[rgb(var(--color-off-white-rgb)/0.7)] font-montserrat text-sm">
                <Phone size={18} className="text-(--color-champagne-gold)" />
                <a
                  href="tel:+48601774746"
                  className="hover:text-(--color-champagne-gold) transition-colors"
                >
                  +48 601 774 746
                </a>
              </li>
              <li className="flex items-center gap-3 text-[rgb(var(--color-off-white-rgb)/0.7)] font-montserrat text-sm">
                <Mail size={18} className="text-(--color-champagne-gold)" />
                <a
                  href="mailto:chor@pm.szczecin.pl"
                  className="hover:text-(--color-champagne-gold) transition-colors"
                >
                  chor@pm.szczecin.pl
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
              {SOCIAL_MEDIA.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 border border-[rgb(var(--color-off-white-rgb)/0.2)] flex items-center justify-center text-[rgb(var(--color-off-white-rgb)/0.7)] hover:text-(--color-champagne-gold) hover:border-[var(--color-champagne-gold)] transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
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
          <p>© 2026 Chór Politechniki Morskiej w Szczecinie. Wszelkie prawa zastrzeżone.</p>
          
        </div>
      </div>
    </footer>
  );
}
