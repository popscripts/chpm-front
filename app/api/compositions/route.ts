import { fetchCompositions } from "@/data/compositions";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") ?? undefined;
  const compositions = await fetchCompositions(locale);
  return NextResponse.json({ compositions });
}
