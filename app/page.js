import Image from "next/image";
import Link from "next/link";

export default function Home() {
return(
  <>
  <h1 className="text-center text-[50px] mt-[150px]">
    hello world
  </h1>
  <Link href={"/product"}>product</Link>
  </>
)
}
