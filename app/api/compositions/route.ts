import { fetchCompositions } from "@/data/compositions";
import { NextResponse } from "next/server";

export async function GET() {
  const compositions = await fetchCompositions();
  return NextResponse.json({ compositions });
}
