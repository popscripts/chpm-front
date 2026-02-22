import { fetchEvents } from "@/data/events";
import { NextResponse } from "next/server";

export async function GET() {
  const events = await fetchEvents();
  return NextResponse.json({ events });
}
