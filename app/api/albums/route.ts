import { fetchAlbums } from "@/data/albums";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") ?? undefined;
  const albums = await fetchAlbums(locale);
  return NextResponse.json({ albums });
}
