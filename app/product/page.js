import Head from "next/head";
import Filter from "../components/Filter/Filter";
import ProductList from "../components/ProductList/ProductList";

export async function generateMetadata({ searchParams }) {
    const params = await searchParams 
  const type = params.type || "All Products";;

  return {
    title: type === "All Products" ? "All Products - My Shop" : `Products: ${type} - My Shop`,
    description: `Browse our collection of ${type} products.`,
    openGraph: {
      title: `Products: ${type}`,
      description: `Browse our collection of ${type} products.`,
    },
  };
}
export const revalidate = 60;

export default async function Product({ searchParams }) {
    const params =  await searchParams
  const type = params.type;

  const apiUrl = type
    ? `${process.env.NEXT_PUBLIC_API_URL}/api/products?filters[type][$eq]=${type}&populate=*`
    : `${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=*`;

  const res = await fetch(apiUrl, {
    next: { revalidate: 60 }, 
  });
  const data = await res.json();

  return (
    <>
      <main>
        <Filter />
        <ProductList data={data} />
      </main>
    </>
  );
}
