import { STREAMING_PLATFORMS } from "@/utils/constants";
import { createPageUrl } from "@/utils/helpers";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionWrapper from "../layout/SectionWrapper";
import MusicVideosList from "../ui/MusicVideosList";
import SectionHeader from "../ui/SectionHeader";

export default async function CreativityPreview() {
  return (
    <SectionWrapper id="tworczosc" background="tealRadial">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Twórczość"
          title="Posłuchaj naszych utworów"
          description="Tworzymy teledyski, albumy, nagrywamy w profesjonalnych studiach"
          className="mb-8"
        />

        <MusicVideosList />

        {/* Streaming links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-reveal fade-up">
          <span className="text-[rgb(var(--color-off-white-rgb)/0.5)] font-montserrat text-sm uppercase tracking-wider">
            Słuchaj na:
          </span>
           {STREAMING_PLATFORMS.map((platform) => 
            {
              const Icon = platform.icon;
            return (<a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(var(--color-off-white-rgb)/0.7)] hover:text-(--color-champagne-gold) transition-colors font-montserrat"
            >
              <Icon size={30} fill="currentColor" className="inline-block mr-2" />
            </a>)
          })}
        </div>
        {/* CTA */}
        <div className="text-center">
          <Link
            href={createPageUrl("tworczosc")}
            className="inline-flex items-center gap-3 text-(--color-champagne-gold) font-montserrat font-semibold text-sm uppercase tracking-wider hover:gap-5 transition-all duration-300 group"
          >
            Zobacz pełną twórczość
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
