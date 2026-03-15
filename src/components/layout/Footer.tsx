import { SOCIAL_MEDIA } from "@/utils/constants";
import { Link } from "@/i18n/navigation";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="relative z-10 bg-(--color-deep-teal) pt-20 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-playfair text-3xl text-(--color-off-white) mb-4 block"
            >
              {t("brandName")}
            </Link>
            <p className="text-[rgb(var(--color-off-white-rgb)/0.6)] font-montserrat text-sm leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat text-sm uppercase tracking-wider text-(--color-champagne-gold) mb-6">
              {t("contactHeading")}
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
              {t("socialHeading")}
            </h4>
            <div className="flex gap-4">
              {SOCIAL_MEDIA.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    aria-label={social.name}
                    className="w-10 h-10 border border-[rgb(var(--color-off-white-rgb)/0.2)] flex items-center justify-center text-[rgb(var(--color-off-white-rgb)/0.7)] hover:text-(--color-champagne-gold) hover:border-[var(--color-champagne-gold)] transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            <p className="text-[rgb(var(--color-off-white-rgb)/0.5)] font-montserrat text-xs mt-6">
              {t("followText")}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[rgb(var(--color-off-white-rgb)/0.1)] mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[rgb(var(--color-off-white-rgb)/0.4)] font-montserrat text-xs">
          <p>© 2026 {t("brandName")}. {t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
