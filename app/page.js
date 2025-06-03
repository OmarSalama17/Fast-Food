import Image from "next/image";
import Link from "next/link";
import Landing from "./components/Landing/Landing.js";
import { Hero } from "./components/Hero.js";
import Section from "./components/section/Section.js";
import CategoryCarousel from "./components/ExploreMenu/ExploreMenu.js";
export const revalidate = 60;
export default async function Home() {
                const res = await fetch('https://strapi-fast-food-2.onrender.com/api/products?filters[isOffer][$eq]=true&populate=*',{
            next: { revalidate: 60 },
        });
        const dataFilter = await res.json();
return(
  <div className="mt-[50px]">
<Landing />
<CategoryCarousel/>
  <Hero dataFilter={dataFilter}/>
<Section/>
  </div>
)
}
