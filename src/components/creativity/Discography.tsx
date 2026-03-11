import { fetchAlbums } from "@/data/albums";
import DiscographyAlbumsList from "../ui/DiscographyAlbumsList";


async function Discography() {
  const albums = await fetchAlbums();

  return (
    <section
      className="scroll-mt-32 py-24 px-6 bg-(--color-soft-charcoal)"
      id="albumy"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-reveal fade-up">
          <span className="text-(--color-champagne-gold) font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
            Dyskografia
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-(--color-off-white)">
            Nasze albumy
          </h2>
        </div>

        <DiscographyAlbumsList
          albums={albums.map((album) => ({
            ...album,
            field_image: album.field_image,
          }))}
        />
      </div>
    </section>
  );
}

export default Discography;
