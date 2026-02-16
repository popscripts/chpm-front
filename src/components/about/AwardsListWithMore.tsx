"use client";

import type { FestivalItem } from "@/data/festivals";
import { useState } from "react";
import AwardsList from "./AwardsList";

type AwardsListWithMoreProps = {
  initialFestivals: FestivalItem[];
  pageSize?: number;
};

export default function AwardsListWithMore({
  initialFestivals,
  pageSize = 50,
}: AwardsListWithMoreProps) {
  const [festivals, setFestivals] = useState<FestivalItem[]>(initialFestivals);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(
    initialFestivals.length >= pageSize
  );

  const handleLoadMore = async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/festivals?limit=${pageSize}&offset=${festivals.length}`
      );

      if (!response.ok) {
        setHasMore(false);
        return;
      }

      const payload = (await response.json()) as {
        festivals?: FestivalItem[];
      };
      const nextFestivals = payload.festivals ?? [];

      setFestivals((prev) => [...prev, ...nextFestivals]);
      setHasMore(nextFestivals.length >= pageSize);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-10">
      <AwardsList festivals={festivals} />
      {hasMore ? (
        <div className="text-center mt-10">
          <button
            type="button"
            onClick={handleLoadMore}
            disabled={isLoading}
            className="inline-flex items-center gap-2 px-8 py-3 border border-(--color-champagne-gold) text-(--color-champagne-gold) font-montserrat font-semibold text-sm uppercase tracking-wider hover:bg-(--color-champagne-gold) hover:text-[#1A1A1A] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? "Ładowanie..." : "Więcej"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
