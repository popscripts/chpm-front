import type { ComponentType } from "react";
import SectionHeader from "../about/SectionHeader";
import AppleMusic from "../icons/AppleMusic";
import Deezer from "../icons/Deezer";
import type { IconProps } from "../icons/IconProps";
import Spotify from "../icons/Spotify";
import Tidal from "../icons/Tidal";
import YoutubeMusic from "../icons/YoutubeMusic";


function Streamings() {
    
    const streamingPlatforms: Array<{
      name: string;
      url: string;
      icon: ComponentType<IconProps>;
    }> = [
    { name: "Spotify", url: "https://open.spotify.com/artist/222VaksbMkcTr4vuK79lMh?si=ajIuQRPxRASrrIeYw7F-2g", icon: Spotify },
    { name: "Apple Music", url: "https://music.apple.com/pl/artist/chór-politechniki-morskiej-w-szczecinie/1643431635?l=pl", icon: AppleMusic },
    { name: "YouTube Music", url: "https://music.youtube.com/channel/UCnflGXwOk05zpSlGBnm66GQ?si=9kwUVOtjOTh-XOFz", icon: YoutubeMusic },
    { name: "Deezer", url: "https://link.deezer.com/s/32wBK4aKn9nfMHpfX3MT4", icon: Deezer },
    { name: "Tidal", url: "https://tidal.com/artist/34175477/u", icon: Tidal },
    ];

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

    return ( <section className="scroll-mt-32 py-16 px-6 bg-(--color-soft-charcoal)" id="streamingi">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Streamingi" title={<>Posłuchaj nas <span className="text-(--color-champagne-gold)">online</span></>} description="Znajdź naszą muzykę na swojej ulubionej platformie" />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            {streamingPlatforms.map((platform, index) => {
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

          <div className="mt-10 animate-reveal fade-up" style={{ transitionDelay: "240ms" }}>
            <h3 className="w-full text-center font-montserrat text-sm uppercase tracking-wide text-(--color-off-white-medium) mb-4">
              Inne platformy
            </h3>
            <div className="flex-wrap gap-3 flex justify-center">
              {otherPlatforms.map((platform) => {
                const sharedClassName =
                  "inline-flex items-center rounded-full border border-(--color-off-white)/20 px-4 py-2 text-sm font-montserrat text-(--color-off-white-medium) transition-colors";

                if (platform.url) {
                  return (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${sharedClassName} hover:border-(--color-champagne-gold) hover:text-(--color-champagne-gold)`}
                    >
                      {platform.name}
                    </a>
                  );
                }

                return (
                  <span key={platform.name} className={sharedClassName}>
                    {platform.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section> );
}

export default Streamings;