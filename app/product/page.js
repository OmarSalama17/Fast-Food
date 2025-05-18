import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; 
import ProductList from "../components/ProductList/ProductList";
export default async function Product (){
        const res = await fetch('http://localhost:1337/api/products?populate=*',{
            cache: "no-store",
        });
        const data = await res.json();

    console.log(data.results);

    
    return <ProductList data ={data} />
}