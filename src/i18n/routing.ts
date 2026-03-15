import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pl", "en"],
  defaultLocale: "pl",
  localePrefix: "never",
  pathnames: {
    "/": {
      pl: "/",
      en: "/home",
    },
    "/o-nas": {
      pl: "/o-nas",
      en: "/about",
    },
    "/dyrygent": {
      pl: "/dyrygent",
      en: "/conductor",
    },
    "/tworczosc": {
      pl: "/tworczosc",
      en: "/creativity",
    },
    "/wydarzenia": {
      pl: "/wydarzenia",
      en: "/events",
    },
    "/wydarzenia/[id]": {
      pl: "/wydarzenia/[id]",
      en: "/events/[id]",
    },
    "/nabor": {
      pl: "/nabor",
      en: "/join-us",
    },
    "/kontakt": {
      pl: "/kontakt",
      en: "/contact",
    },
    "/nagrody": {
      pl: "/nagrody",
      en: "/awards",
    },
    "/repertuar": {
      pl: "/repertuar",
      en: "/repertoire",
    },
    "/wsparcie": {
      pl: "/wsparcie",
      en: "/support",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;
