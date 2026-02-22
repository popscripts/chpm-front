"use client";

import { createPageUrl } from "@/utils/helpers";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "O nas", page: "o-nas" },
  { name: "Dyrygent", page: "dyrygent" },
  { name: "Wydarzenia", page: "wydarzenia" },
  { name: "Twórczość", page: "tworczosc" },
  { name: "Wsparcie", page: "wsparcie" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between ">
          {/* Logo */}
          <Link href={createPageUrl("")} className="inline-flex items-center">
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
                    ? "text-(--color-champagne-gold)"
                    : "text-[rgb(var(--color-off-white-rgb)/0.8)] hover:text-(--color-champagne-gold)"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
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
            className="fixed inset-0 z-45 bg-(--color-soft-charcoal) pt-24"
          >
            <div className="flex flex-col items-center gap-8 py-12">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  href={createPageUrl(link.page)}
                  className={`font-playfair text-2xl transition-colors ${
                    pathname?.includes(link.page.toLowerCase())
                      ? "text-(--color-champagne-gold)"
                      : "text-(--color-off-white) hover:text-(--color-champagne-gold)"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
