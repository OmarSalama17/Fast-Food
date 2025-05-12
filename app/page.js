import Image from "next/image";
import Link from "next/link";
import Landing from "./components/Landing/Landing.js";
import ProductApi from "./_utils/ProductApi.js";
export default function Home() {
  const getLatestProducts_=()=>{
    ProductApi.getLatestProducts().then(res=>{
      console.log(res.data);
    })
  }
  getLatestProducts_()
return(
  <>
<div className="mt-[70px]">
<Landing/>
  <h1 className="text-center text-[50px] ">
    hello world
  </h1>
</div>
  <Link href={"/product"}>product</Link>
  </>
)
}
