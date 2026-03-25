import { fetchCompositions } from "@/data/compositions";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") ?? undefined;
  const genresParam = searchParams.get("genres") ?? "";
  const selectedGenres = genresParam
    .split(",")
    .map((genre) => genre.trim())
    .filter(Boolean);

  const compositions = await fetchCompositions(locale);

  const filteredCompositions =
    selectedGenres.length === 0
      ? compositions
      : compositions.filter((composition) =>
          selectedGenres.every((genre) => composition.genres.includes(genre)),
        );

  return NextResponse.json({ compositions: filteredCompositions });
}
