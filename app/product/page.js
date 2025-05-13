import Link from "next/link";
import SkeletonLoader from "../components/Skeleton/SkeletonLoader";

export default async function Product (){
    //   await new Promise(resolve => setTimeout(resolve, 1000));
        const res = await fetch('http://localhost:1337/api/products?populate=sizes',{
            cache: "no-store",
        });
        const data = await res.json();
    console.log(data.data);
    console.log(data.data[0].sizes);
    console.log(data.data[0].sizes[0].size[0]);
    
    const product = data.data
    return(
        <>
            <div>
                <h1>Product</h1>
                {data.data.map ((product,e) =>{
                    return(
                        <Link key={e} href={`product/${product.documentId}`}>
                        <div >
                            <h2>{product.title}</h2>
                            <p>{product.price}</p>
                        </div>
                        {
                            product.sizes.map((sizeObj) =>{
                                return(
                                    sizeObj.size.map((size) =>{
                                        return(
                                            <li key={size.id}> {size.name}</li>
                                        )
                                    })
                                )
                            })
                        }
                        </Link>
                    )
                })}
            </div>
        </>
    )
}