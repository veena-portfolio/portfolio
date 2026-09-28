import { collections } from "@/data/portfolio";
import About from "@/components/About";
import { Lineup, Moodboard, Sketches } from "@/components/Collection";
import Contents from "@/components/Contents";
import Effects from "@/components/Effects";
import Hero from "@/components/Hero";
import Lookbook from "@/components/Lookbook";
import Menu from "@/components/Menu";
import TechPack from "@/components/TechPack";
import ThankYou from "@/components/ThankYou";

// Same order as the PDF: cover, profile, contents, three collections
// (mood board → form exploration → final lineup), tech pack, look book.
export default function Home() {
  return (
    <>
      <Menu />
      <Hero />
      <main>
        <About />
        <Contents />
        {collections.map((c) => (
          <div key={c.id}>
            <Moodboard collection={c} />
            {c.sketches && <Sketches collection={c} />}
            <Lineup collection={c} />
          </div>
        ))}
        <TechPack />
        <Lookbook />
      </main>
      <ThankYou />
      <Effects />
    </>
  );
}
