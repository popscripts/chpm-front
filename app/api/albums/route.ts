import { fetchAlbums } from "@/data/albums";
import { NextResponse } from "next/server";

export async function GET() {
  const albums = await fetchAlbums();
  return NextResponse.json({ albums });
}
