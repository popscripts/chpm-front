import type { ComponentType } from "react";

import AppleMusic from "@/components/icons/AppleMusic";
import Deezer from "@/components/icons/Deezer";
import type { IconProps } from "@/components/icons/IconProps";
import Spotify from "@/components/icons/Spotify";
import Tidal from "@/components/icons/Tidal";
import YoutubeMusic from "@/components/icons/YoutubeMusic";

export function createPageUrl(pageName: string) {
  return "/" + pageName.replace(/ /g, "-").toLowerCase();
}

export function createEventDetailsUrl(title: string, id: string) {
  const slug = title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return `/wydarzenia/${slug}--${id}`;
}

export function parseEventIdFromParam(param: string) {
  const separator = "--";
  const separatorIndex = param.lastIndexOf(separator);

  if (separatorIndex === -1) {
    return param;
  }

  return param.slice(separatorIndex + separator.length);
}

export function createEventAnchorId(id: string) {
  return `event-${id}`;
}

export function getStreamingLogoByName(platformName?: string): ComponentType<IconProps> | null {
  if (!platformName) {
    return null;
  }

  const normalized = platformName.toLowerCase();

  if (normalized.includes("spotify")) {
    return Spotify;
  }

  if (normalized.includes("apple")) {
    return AppleMusic;
  }

  if (normalized.includes("youtube")) {
    return YoutubeMusic;
  }

  if (normalized.includes("tidal")) {
    return Tidal;
  }

  if (normalized.includes("deezer") || normalized.includes("dezeer")) {
    return Deezer;
  }

  return null;
}
