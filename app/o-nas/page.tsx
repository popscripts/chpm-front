import { fetchFestivals } from "@/data/festivals";
import About from "pages/About";

export default async function Page() {
  const festivals = await fetchFestivals({ limit: 4 });

  return <About festivals={festivals} />;
}
