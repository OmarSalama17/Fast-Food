import Image from "next/image";
import Link from "next/link";
import Landing from "./components/Landing/Landing.js";
import { Hero } from "./components/Hero.js";
import Section from "./components/section/Section.js";
import CategoryCarousel from "./components/ExploreMenu/ExploreMenu.js";
export default async function Home() {
                const res = await fetch('http://localhost:1337/api/products?filters[isOffer][$eq]=true&populate=*',{
            cache: "no-store",
        });
        const dataFilter = await res.json();
return(
  <>
<Landing/>
<CategoryCarousel/>
  <Hero dataFilter={dataFilter}/>
<Section/>
  <Link href={"/product"}>product</Link>
  </>
)
}
