"use client";

import { useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

type StatCardProps = {
  number: string;
  label: string;
  index: number;
};

type StatsProps = {
  embedded?: boolean;
};

function StatCard({ number, label, index }: StatCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const match = number.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const stepSize = Math.max(1, Math.round(target / 40));

  useEffect(() => {
    if (!isInView) {
      return;
    }

    setHasStarted(true);
    setCount(Math.min(stepSize, target));

    let animationFrame = 0;
    let startTime: number | null = null;
    const duration = 800 + index * 120;

    const step = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const rawValue = Math.round(target * eased);
      const steppedValue = Math.min(
        target,
        Math.round(rawValue / stepSize) * stepSize,
      );
      setCount(progress >= 1 ? target : steppedValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [index, isInView, target, stepSize]);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-500 ${
        hasStarted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <span className="block font-montserrat bold text-4xl text-(--color-champagne-gold) mb-2">
        {count}
        {suffix}
      </span>
      <span className="text-(--color-off-white)/60 font-montserrat text-sm">
        {label}
      </span>
    </div>
  );
}

function Stats({ embedded = false }: StatsProps) {
  const t = useTranslations("aboutPage.stats");

  const stats = [
    { number: "150+", label: t("members") },
    { number: "800+", label: t("concerts") },
    { number: "100+", label: t("awards") },
    { number: "50+", label: t("albums") },
  ];

  if (embedded) {
    return (
      <div className="pt-8 md:pt-12">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              number={stat.number}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 px-6 bg-(--color-soft-charcoal)">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              number={stat.number}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
