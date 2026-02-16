"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

type ListCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
};

function ListCard({ icon, title, description, items }: ListCardProps) {
  const loopItems = [...items, ...items];
  const loopRef = useRef<HTMLDivElement | null>(null);
  const [duration, setDuration] = useState<number | null>(null);

  useEffect(() => {
    const loopEl = loopRef.current;
    if (!loopEl) {
      return;
    }

    const speedPxPerSecond = 40;

    const updateDuration = () => {
      const totalWidth = loopEl.scrollWidth;
      if (!totalWidth) {
        return;
      }

      const travelDistance = totalWidth / 2;
      const nextDuration = travelDistance / speedPxPerSecond;
      setDuration(nextDuration);
    };

    updateDuration();

    const observer = new ResizeObserver(updateDuration);
    observer.observe(loopEl);

    return () => observer.disconnect();
  }, [items.length]);

  const loopStyle = duration
    ? ({ "--logo-loop-duration": `${duration}s` } as CSSProperties)
    : undefined;
  return (
    <div className="p-8 w-full min-w-0 bg-[#00384d]/10 border border-[#F5F5F5]/10 hover:border-(--color-champagne-gold)/30 transition-all shadow-lg text-center h-full flex flex-col">
      <div className="w-16 h-16 bg-(--color-champagne-gold)/10 flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="font-playfair text-xl text-[#F5F5F5] mb-2">{title}</h3>
      <p className="text-[#F5F5F5]/60 font-montserrat text-sm">{description}</p>
      <div className="relative w-full max-w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] mt-6">
        <div
          ref={loopRef}
          className="flex w-max items-center gap-3 logo-loop"
          style={loopStyle}
        >
          {loopItems.map((item, index) => (
            <span
              key={`${item}-${index}`}
              aria-hidden={index >= items.length}
              className="px-4 py-2 rounded-full text-(--color-champagne-gold)/80 font-montserrat text-sm tracking-wide whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListCard;
