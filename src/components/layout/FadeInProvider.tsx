"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type FadeInProviderProps = {
  children: React.ReactNode;
};

export default function FadeInProvider({ children }: FadeInProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".animate-reveal"),
    );

    if (!elements.length) {
      return undefined;
    }

    if (typeof IntersectionObserver === "undefined") {
      elements.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((el) => {
      if (!el.classList.contains("is-visible")) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return <>{children}</>;
}
