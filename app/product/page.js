import Link from "next/link";

export default async function Product (){
    const res = await fetch('https://677184e2ee76b92dd48fe746.mockapi.io/api/fastfood/products');
    const data = await res.json();
    return(
        <>
            <div>
                <h1>Product</h1>
                {data.map ((product,e) =>{
                    return(
                        <Link key={e} href={`product/${product.id}`}>
                        <div >
                            <h2>{product.name}</h2>
                            <p>{product.price}</p>
                        </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}