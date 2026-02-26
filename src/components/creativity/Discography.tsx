import { fetchAlbums, type AlbumItem } from "@/data/albums";
import DiscographyAlbumsList from "./DiscographyAlbumsList";

const fallbackAlbums: AlbumItem[] = [
  {
    id: "a-2024-swiatlo",
    title: "Swiatlo i Cisza",
    field_description:
      "Album laczacy muzyke sakralna z nowoczesnymi aranżacjami.",
    field_release_date: "2024-01-01",
    field_image: {
      url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=700&q=80",
      alt: "Swiatlo i Cisza",
    },
    field_streaming_platforms: [
      { id: "sp-1", field_platform: "Spotify", field_url: "https://open.spotify.com" },
      {
        id: "am-1",
        field_platform: "Apple Music",
        field_url: "https://music.apple.com",
      },
    ],
    field_pieces: [],
  },
  {
    id: "a-2022-harmonia",
    title: "Harmonia",
    field_description:
      "Kolekcja utworow chóralnych inspirowanych polska tradycja.",
    field_release_date: "2022-01-01",
    field_image: {
      url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=700&q=80",
      alt: "Harmonia",
    },
    field_streaming_platforms: [
      { id: "sp-2", field_platform: "Spotify", field_url: "https://open.spotify.com" },
    ],
    field_pieces: [],
  },
  {
    id: "a-2020-nova",
    title: "Nova",
    field_description:
      "Eksperymentalny album z elementami elektroniki i glosow solowych.",
    field_release_date: "2020-01-01",
    field_image: {
      url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&q=80",
      alt: "Nova",
    },
    field_streaming_platforms: [
      {
        id: "am-2",
        field_platform: "Apple Music",
        field_url: "https://music.apple.com",
      },
    ],
    field_pieces: [],
  },
];

const fallbackCoverUrl =
  "https://images.unsplash.com/photo-1619983081563-430f63602796?w=600&q=80";

async function Discography() {
    const albumsFromApi = await fetchAlbums();
    const albums = albumsFromApi.length > 0 ? albumsFromApi : fallbackAlbums;

    return (
    <section className="scroll-mt-32 py-24 px-6 bg-(--color-soft-charcoal)" id="albumy">
        <div className="max-w-6xl mx-auto">
          <div
            className="text-center mb-16 animate-reveal fade-up"
          >
            <span className="text-(--color-champagne-gold) font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
              Dyskografia
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white)">
              Nasze albumy
            </h2>
          </div>

          <DiscographyAlbumsList albums={albums.map((album) => ({
            ...album,
            field_image: album.field_image ?? {
              url: fallbackCoverUrl,
              alt: album.title,
            },
          }))} />
        </div>
      </section>
 );
}

export default Discography;