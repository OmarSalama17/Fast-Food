import Image from "next/image";
import Link from "next/link";
import Landing from "./components/Landing/Landing.js";
import ProductApi from "./_utils/ProductApi.js";
import { Hero } from "./components/Hero.js";
import Section from "./components/section/Section.js";
export default function Home() {
  const getLatestProducts_=()=>{
    ProductApi.getLatestProducts().then(res=>{
      console.log(res.data);
    })
  }
  getLatestProducts_()
return(
  <>
<Landing/>
<div className="container mt-[70px]">
<Hero/>
<Section/>
</div>
  <Link href={"/product"}>product</Link>
  </>
)
}
