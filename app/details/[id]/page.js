export default async function Details({params}) {
    const res = await fetch(`https://677184e2ee76b92dd48fe746.mockapi.io/api/fastfood/products`);
    const products = await res.json();
    const product = products.find((item) => item.id === Number(params.id));
    if (!product) {
        return <h1>المنتج غير موجود</h1>;
    }
    return(
        <>
        <div className="flex items-center justify-center h-screen">

        </div>
        <h1>
            {product.name}
            
        </h1>
        <h2>
            {product.price}
        </h2>
        </>
    )
}