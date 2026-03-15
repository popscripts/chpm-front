import { fetchEventById } from "@/data/events";
import { parseEventIdFromParam } from "@/utils/helpers";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EventDetails from "@/screens/EventDetails";

type Props = { params: Promise<{ locale: string; id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const eventId = parseEventIdFromParam(id);
  const event = await fetchEventById(eventId);
  if (!event) {
    const t = await getTranslations({ locale, namespace: "metadata.events" });
    return { title: t("title") };
  }
  return { title: `${event.title} – ${event.location}` };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const eventId = parseEventIdFromParam(id);
  const event = await fetchEventById(eventId);

  if (!event) {
    notFound();
  }

  return <EventDetails event={event} />;
}
