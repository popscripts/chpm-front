"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

type NavLink = {
  key: "about" | "conductor" | "creativity" | "events" | "joinus" | "contact";
  href:
    | "/o-nas"
    | "/dyrygent"
    | "/tworczosc"
    | "/wydarzenia"
    | "/nabor"
    | "/kontakt";
};

const navLinks: NavLink[] = [
  { key: "about", href: "/o-nas" },
  { key: "conductor", href: "/dyrygent" },
  { key: "creativity", href: "/tworczosc" },
  { key: "events", href: "/wydarzenia" },
  { key: "joinus", href: "/nabor" },
  { key: "contact", href: "/kontakt" },
];

const splitIndex = Math.ceil(navLinks.length / 2);
const leftNavLinks = navLinks.slice(0, splitIndex);
const rightNavLinks = navLinks.slice(splitIndex);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("nav");
  const tLang = useTranslations("langSwitch");

  const otherLocale = locale === "pl" ? "en" : "pl";
  const switchPathname =
    !pathname || pathname === "/wydarzenia/[id]" ? "/wydarzenia" : pathname;

  const isLinkActive = (href: string) => {
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[rgb(var(--color-soft-charcoal-rgb)/0.9)] backdrop-blur-md border-b border-(--color-off-white)/10 py-4 shadow-[0_4px_30px_rgb(var(--color-soft-charcoal-rgb)/0.5)]"
            : "bg-transparent py-6 border-b border-(--color-off-white)/0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between lg:justify-around ">
          {/* Left desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {leftNavLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`font-montserrat text-sm uppercase tracking-wider transition-colors ${
                  isLinkActive(link.href)
                    ? "text-(--color-champagne-gold)"
                    : "text-[rgb(var(--color-off-white-rgb)/0.8)] hover:text-(--color-champagne-gold)"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/assets/logo/logo2-1-2.png"
              alt={t("logoAlt")}
              width={220}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Right desktop links + language switcher */}
          <div className="hidden lg:flex items-center gap-8">
            {rightNavLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`font-montserrat text-sm uppercase tracking-wider transition-colors ${
                  isLinkActive(link.href)
                    ? "text-(--color-champagne-gold)"
                    : "text-[rgb(var(--color-off-white-rgb)/0.8)] hover:text-(--color-champagne-gold)"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
            <Link
              href={switchPathname}
              locale={otherLocale}
              aria-label={tLang("ariaLabel")}
              className="font-montserrat text-sm uppercase tracking-wider border border-[rgb(var(--color-off-white-rgb)/0.3)] px-2 py-0.5 text-[rgb(var(--color-off-white-rgb)/0.8)] hover:text-(--color-champagne-gold) hover:border-(--color-champagne-gold) transition-colors"
            >
              {tLang("switchTo")}
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-(--color-off-white) p-2"
            aria-label={isMobileMenuOpen ? t("closeMenu") : t("openMenu")}
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
            className="fixed inset-0 z-45 bg-(--color-soft-charcoal) pt-24"
          >
            <div className="flex flex-col items-center gap-8 py-12">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className={`font-playfair text-2xl transition-colors ${
                    isLinkActive(link.href)
                      ? "text-(--color-champagne-gold)"
                      : "text-(--color-off-white) hover:text-(--color-champagne-gold)"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(link.key)}
                </Link>
              ))}
              <Link
                href={switchPathname}
                locale={otherLocale}
                aria-label={tLang("ariaLabel")}
                className="font-montserrat text-sm uppercase tracking-wider border border-[rgb(var(--color-off-white-rgb)/0.3)] px-3 py-1 text-(--color-off-white) hover:text-(--color-champagne-gold) hover:border-(--color-champagne-gold) transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {tLang("switchTo")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
