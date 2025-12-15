import Landing from "./components/Landing/Landing.js";
import { Hero } from "./components/Hero.js";
import Section from "./components/section/Section.js";
import CategoryCarousel from "./components/ExploreMenu/ExploreMenu.js";
export const revalidate = 60;
export default async function Home() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?isOffer=true`,
    {
      next: { revalidate: 60 },
    }
  );
  const dataFilter = await res.json();
  return (
    <div className="mt-[50px]">
      <Landing />
      <CategoryCarousel />
      <Hero dataFilter={dataFilter} />
      <Section />
    </div>
  );
}
