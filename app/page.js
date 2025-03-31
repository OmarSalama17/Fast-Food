import Image from "next/image";
import Link from "next/link";
import Landing from "./components/Landing/Landing.js";
export default function Home() {
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
