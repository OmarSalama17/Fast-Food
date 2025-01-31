export default async function Product (){
    const res = await fetch('https://677184e2ee76b92dd48fe746.mockapi.io/api/fastfood/products');
    const data = await res.json();
    return(
        <>
            <div>
                <h1>Product</h1>
                {data.map ((i,e) =>{
                    return(
                        <div key={e}>
                            <h2>{i.name}</h2>
                            <p>{i.price}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}