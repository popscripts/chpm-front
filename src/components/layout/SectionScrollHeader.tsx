"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type ScrollSectionLink = {
  id: string;
  label: string;
};

type SectionScrollHeaderProps = {
  items: ScrollSectionLink[];
  offsetTopClassName?: string;
};

export default function SectionScrollHeader({
  items,
  offsetTopClassName = "top-[72px]",
}: SectionScrollHeaderProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const itemIds = useMemo(() => items.map((item) => item.id), [items]);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!itemIds.length) {
      return;
    }

    const sections = itemIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (!visibleEntries.length) {
          return;
        }

        const mostVisible = visibleEntries.reduce((best, current) =>
          current.intersectionRatio > best.intersectionRatio ? current : best,
        );

        setActiveId(mostVisible.target.id);
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [itemIds]);

  useEffect(() => {
    if (!activeId || !navRef.current) {
      return;
    }

    const activeLink = navRef.current.querySelector(
      `[data-section-id="${activeId}"]`,
    );

    if (activeLink instanceof HTMLElement) {
      const container = navRef.current;
      const maxLeft = container.scrollWidth - container.clientWidth;
      const linkLeft = activeLink.offsetLeft;
      const targetLeft =
        linkLeft - container.clientWidth / 2 + activeLink.clientWidth / 2;

      container.scrollTo({
        left: Math.max(0, Math.min(targetLeft, maxLeft)),
        behavior: "smooth",
      });
    }
  }, [activeId]);

  if (!items.length) {
    return null;
  }

  return (
    <div
      className={`sticky ${offsetTopClassName} z-40 bg-[rgb(var(--color-soft-charcoal-rgb)/0.9)] backdrop-blur-md border-b border-(--color-off-white)/10`}
    >
      <nav
        ref={navRef}
        aria-label="Nawigacja sekcji"
        className="max-w-6xl mx-auto px-6 py-2 overflow-x-auto scrollbar-hide"
      >
        <ul
          className="flex min-w-max items-center justify-center gap-3 text-sm font-montserrat uppercase tracking-wide whitespace-nowrap"
        >
          {items.map((item) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setActiveId(item.id)}
                  data-section-id={item.id}
                  className={`inline-flex text-xs items-center px-4 py-2 transition-all duration-200 ${
                    isActive
                      ? "text-(--color-champagne-gold) scale-[1.1]"
                      : "text-(--color-off-white)/70 hover:text-(--color-champagne-gold)"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
