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

export default async function Product({ searchParams }) {
    const params = await searchParams
  const type = params.type;

  const apiUrl = type
    ? `http://localhost:1337/api/products?filters[type][$eq]=${type}&populate=*`
    : `http://localhost:1337/api/products?populate=*`;

  const res = await fetch(apiUrl, {
    cache: "no-store",
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
