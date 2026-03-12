import { STREAMING_PLATFORMS } from "@/utils/constants";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

function Streamings() {

  const otherPlatforms: Array<{
    name: string;
    url?: string;
  }> = [
    { name: "TikTok & Resso" },
    { name: "Amazon" },
    { name: "Soundtrack by Twitch" },
    { name: "Pandora" },
    { name: "iHeartRadio" },
    { name: "ClaroMúsica" },
    { name: "Saavn" },
    { name: "Boomplay" },
    { name: "Anghami" },
    { name: "KKBox" },
    { name: "NetEase" },
    { name: "Tencent" },
    { name: "Triller" },
    { name: "Yandex Music" },
  ];

  return (
    <SectionWrapper id="streamingi" background="dark">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Streamingi"
          title="Posłuchaj nas online"
          description="Znajdź naszą muzykę na swojej ulubionej platformie"
        />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
          {STREAMING_PLATFORMS.map((platform, index) => {
            const Icon = platform.icon;

            return (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ transitionDelay: `${index * 120}ms` }}
                className="animate-reveal fade-up group p-6 border border-(--color-off-white)/20 hover:border-(--color-champagne-gold) bg-(--color-deep-teal)/10 backdrop-blur-sm hover:bg-(--color-deep-teal)/20 transition-all text-center shadow-lg"
              >
                <div className="mb-3 flex justify-center">
                  <Icon
                    size={40}
                    fill="currentColor"
                    className="text-(--color-off-white-medium) group-hover:text-(--color-champagne-gold)"
                  />
                </div>
                <span className="font-montserrat text-(--color-off-white) group-hover:text-(--color-champagne-gold) transition-colors">
                  {platform.name}
                </span>
              </a>
            );
          })}
        </div>

        <div
          className="mt-10"
        >
          <h3 className="w-full text-center font-montserrat text-sm uppercase tracking-wide text-(--color-off-white-medium) mb-4">
            Inne platformy
          </h3>
          <div className="flex-wrap gap-3 flex justify-center">
            {otherPlatforms.map((platform, i) => {
              const sharedClassName =
                " animate-reveal fade-up inline-flex items-center rounded-full border border-(--color-off-white)/20 px-4 py-2 text-sm font-montserrat text-(--color-off-white-medium) transition-colors";

              if (platform.url) {
                return (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${sharedClassName} hover:border-(--color-champagne-gold) hover:text-(--color-champagne-gold)`}
                    style={{ transitionDelay: `${240 + i * 80}ms` }}
                  >
                    {platform.name}
                  </a>
                );
              }

              return (
                <span key={platform.name} className={sharedClassName} style={{ transitionDelay: `${240 + i * 30}ms` }}>
                  {platform.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Streamings;
