import { fetchEvents } from "@/data/events";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") ?? undefined;
  const events = await fetchEvents(undefined, locale);
  return NextResponse.json({ events });
}
