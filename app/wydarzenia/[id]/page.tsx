import { fetchEventById } from "@/data/events";
import { parseEventIdFromParam } from "@/utils/helpers";
import { notFound } from "next/navigation";
import EventDetails from "../../../pages/EventDetails";

type EventDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EventDetailsPage({
  params,
}: EventDetailsPageProps) {
  const { id } = await params;
  const eventId = parseEventIdFromParam(id);
  const event = await fetchEventById(eventId);

  if (!event) {
    notFound();
  }

  return <EventDetails event={event} />;
}
