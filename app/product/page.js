import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; 
import ProductList from "../components/ProductList/ProductList";
import Filter from "../components/Filter/Filter";
export default async function Product ({searchParams}){
    const params = await searchParams;
    const type = params?.type || "";
    const apiUrl = type
    ? `http://localhost:1337/api/products?filters[type][$eq]=${type}&populate=*`
    : `http://localhost:1337/api/products?populate=*`;
        const res = await fetch(apiUrl,{
            cache: "no-store",
        });
        const data = await res.json();

    console.log(apiUrl);

    
    return (

        <>
    <Filter/>
    <ProductList data ={data} /> 
    </>
    )
}