import { Metadata } from "next";

export const generateMetadata = async ({ params }) => {
  const { documentId } = params;
  return {
    title: `page ${documentId}`,
  };
};

export default async function Details({ params }) {
  const { documentId } = params;
    const res = await fetch(`http://localhost:1337/api/products/${documentId}`);
    const data = await res.json();
    console.log("Fetched data:", data);
    if (!data.data) {
      return <div className="text-red-500">❌ المنتج غير موجود</div>;
    }
    const product = data.data;
    console.log("Product:", product);
    return (
      <div className="container flex items-center justify-center h-[1000px]">
        <div className="text-[black]">
          <h1>{product.title}</h1>
          <h2>Price: {product.prixe} $</h2>
        </div>
      </div>
    );
  }
