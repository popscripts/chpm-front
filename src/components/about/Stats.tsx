"use client";

import { useInView } from "framer-motion";
import { Award, Music, Trophy, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Users, number: "150+", label: "Członków zespołu" },
  { icon: Music, number: "800+", label: "Wykonanych koncertów" },
  { icon: Trophy, number: "100+", label: "Zdobytych nagród i wyróżnień" },
  { icon: Award, number: "50+", label: "Płyt i teledysków" },
];

type StatCardProps = {
  icon: typeof Users;
  number: string;
  label: string;
  index: number;
};

function StatCard({ icon: Icon, number, label, index }: StatCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [count, setCount] = useState(0);

  const match = number.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const stepSize = Math.max(1, Math.round(target / 40));

  useEffect(() => {
    if (!isInView) {
      return;
    }

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
      setCount(steppedValue);

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
      className="text-center animate-reveal fade-up"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="w-20 h-20 bg-(--color-champagne-gold)/10 flex items-center justify-center mx-auto mb-4">
        <Icon size={32} className="text-(--color-champagne-gold)" />
      </div>
      <span className="block font-montserrat text-4xl text-(--color-champagne-gold) mb-2">
        {count}
        {suffix}
      </span>
      <span className="text-(--color-off-white)/60 font-montserrat text-sm">
        {label}
      </span>
    </div>
  );
}

function Stats() {
  return (
    <section className="py-24 px-6 bg-(--color-soft-charcoal)">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
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
