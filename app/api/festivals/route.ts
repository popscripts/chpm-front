import { fetchFestivals } from "@/data/festivals";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get("limit"));
  const offset = Number(searchParams.get("offset"));

  const festivals = await fetchFestivals({
    limit: Number.isFinite(limit) ? limit : undefined,
    offset: Number.isFinite(offset) ? offset : undefined,
  });

  return NextResponse.json({ festivals });
}
