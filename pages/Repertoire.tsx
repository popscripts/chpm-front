import { fetchCompositions } from "@/data/compositions";

export default async function Repertoire() {
  const compositions = await fetchCompositions();
  const compositionsByLetter = compositions.reduce<
    Record<string, typeof compositions>
  >((acc, composition) => {
    const firstLetter = composition.title
      .trim()
      .charAt(0)
      .toLocaleUpperCase("pl-PL");
    const key = firstLetter || "#";

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(composition);
    return acc;
  }, {});

  const groupedEntries = Object.entries(compositionsByLetter).sort(([a], [b]) =>
    a.localeCompare(b, "pl"),
  );

  return (
    <div className="bg-radial from-(--color-deep-teal-dark) to-(--color-soft-charcoal) min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-reveal fade-up">
          <span className="text-(--color-champagne-gold) font-montserrat text-sm uppercase tracking-[0.3em] mb-4 block">
            Twórczość
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl text-(--color-off-white)">
            Repertuar
          </h1>
          <p className="mt-4 font-montserrat text-(--color-off-white)/70">
            Lista wszystkich utworów
          </p>
        </div>

        {compositions.length === 0 ? (
          <p className="text-center text-(--color-off-white)/70 font-montserrat">
            Brak utworów do wyświetlenia.
          </p>
        ) : (
          <div className="space-y-10">
            {groupedEntries.map(([letter, letterCompositions]) => (
              <section key={letter} className="mb-4">
                <div className="flex items-center gap-4">
                  <span className="font-playfair text-3xl text-[#D4AF37]">
                    {letter}
                  </span>
                  <div className="flex-1 h-px bg-[#F5F5F5]/10" />
                </div>
                <ul className="space-y-3 ml-6 mt-2 grid grid-cols-1 md:grid-cols-2 md:auto-rows-fr gap-y-4">
                  {letterCompositions.map((composition, index) => {
                    const details: string[] = [];
                    const hasLeftBorder = index % 2 === 1;
                    const hasTopBorder = false;

                    if (composition.composers.length > 0) {
                      details.push(composition.composers.join(", "));
                    }

                    if (composition.arrangers.length > 0) {
                      details.push(`ar. ${composition.arrangers.join(", ")}`);
                    }

                    return (
                      <li
                        key={composition.id}
                        className={`pl-4 p-2 m-0 h-full border-(--color-off-white)/10 ${hasLeftBorder ? "md:border-l" : ""} ${hasTopBorder ? "md:border-t" : ""} hover:bg-(--color-off-white-medium)/10 transition-colors`}
                      >
                        <p>
                          <span className="font-playfair text-lg text-(--color-off-white)">
                            {composition.title}
                          </span>
                          <span className="text-(--color-off-white-medium) text-sm text-montserrat">
                            {details.length > 0
                              ? ` - ${details.join(", ")}`
                              : ""}
                          </span>
                        </p>
                        {composition.genres.length > 0 &&
                          composition.genres.map((genre) => (
                            <span
                              key={genre}
                              className="mt-1 px-2 py-1 mr-1 text-[0.6rem] uppercase tracking-[0.1rem] font-montserrat text-(--color-off-white-medium) bg-(--color-off-white-medium)/10 rounded-full"
                            >
                              {genre}
                            </span>
                          ))}
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
