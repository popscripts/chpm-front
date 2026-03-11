import AppleMusic from "@/components/icons/AppleMusic";
import Deezer from "@/components/icons/Deezer";
import { IconProps } from "@/components/icons/IconProps";
import Spotify from "@/components/icons/Spotify";
import Tidal from "@/components/icons/Tidal";
import YoutubeMusic from "@/components/icons/YoutubeMusic";
import { ComponentType } from "react";

export const STREAMING_PLATFORMS: Array<{
    name: string;
    url: string;
    icon: ComponentType<IconProps>;
  }> = [
    {
      name: "Spotify",
      url: "https://open.spotify.com/artist/222VaksbMkcTr4vuK79lMh?si=ajIuQRPxRASrrIeYw7F-2g",
      icon: Spotify,
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com/pl/artist/chór-politechniki-morskiej-w-szczecinie/1643431635?l=pl",
      icon: AppleMusic,
    },
    {
      name: "YouTube Music",
      url: "https://music.youtube.com/channel/UCnflGXwOk05zpSlGBnm66GQ?si=9kwUVOtjOTh-XOFz",
      icon: YoutubeMusic,
    },
    {
      name: "Deezer",
      url: "https://link.deezer.com/s/32wBK4aKn9nfMHpfX3MT4",
      icon: Deezer,
    },
    { name: "Tidal", url: "https://tidal.com/artist/34175477/u", icon: Tidal },
  ];