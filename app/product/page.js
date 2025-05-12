import Link from "next/link";

export default async function Product (){
    const res = await fetch('http://localhost:1337/api/products');
    const data = await res.json();
    
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
                        </Link>
                    )
                })}
                
            </div>
        </>
    )
}