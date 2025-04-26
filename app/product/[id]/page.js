import { Metadata } from "next";
export const generateMetadata = async ({params})  => {
    const {id} = params; 
return{
    title:`page ${id}`
}
}
export default async function Details ({params} ) {
    const {id} = params;
    const res = await fetch(`https://677184e2ee76b92dd48fe746.mockapi.io/api/fastfood/products/${id}`)
    const data = await res.json()
    console.log(id);
    return (
        <>
        <div className="container flex items-center justify-center h-[1000px]">
            <div className=" text-[white]">
            <h1>
            {data.name}
            
        </h1>
        <h2>
            {data.price}
        </h2>
            </div>
        </div>
        </>
    )
}