import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import { loadMessagesRuntime } from "./messagesCache";

// Use runtime loading in development (allows hot reload on translation changes)
// Production uses static import for better performance
const USE_RUNTIME_MESSAGES = process.env.APP_ENV === "dev";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  let messages;

  if (USE_RUNTIME_MESSAGES) {
    // Development: load from disk (reflects changes immediately)
    messages = await loadMessagesRuntime(locale);
  } else {
    // Production: static import (build-time)
    messages = (await import(`../messages/${locale}.json`)).default;
  }

  return {
    locale,
    messages,
  };
});
