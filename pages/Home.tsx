import AboutPreview from '@/components/home/AboutPreview';
import ConcertsPreview from '@/components/home/ConcertsPreview';
import ConductorPreview from '@/components/home/ConductorPreview';
import CreativityPreview from '@/components/home/CreativityPreview';
import HeroSection from '@/components/home/HeroSection';
import MultimediaSection from '@/components/home/MultimediaSection';
import SupportPreview from '@/components/home/SupportPreview';

export default function Home() {
  return (
    <div className="bg-[var(--color-soft-charcoal)]">
      <HeroSection />
      <AboutPreview />
      <MultimediaSection />
      <ConcertsPreview />
      <ConductorPreview />
      <CreativityPreview />
      <SupportPreview />
    </div>
  );
}