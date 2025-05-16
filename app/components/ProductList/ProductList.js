'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import ProductModal from '../ProductModal/ProductModal';
import {useGlobalContext} from '../Context-Api/Context-Api';
const ProductList = ({data}) => {
    const [selectedProduct , setSelectedProduct] = useState(null)
    const router = useRouter()
    const searchParams = useSearchParams()
    const productId = searchParams.get("product")
    const {setLoader} = useGlobalContext()
    useEffect(()=>{
        if (productId) {
            const found = data.data.find(data => data.documentId.toString() === productId)
            setSelectedProduct(found || null)
        }else{
            setSelectedProduct(null)
        }
    },[productId,data])
    const openModal = (product)=>{
        setLoader(true)
        setTimeout(()=>{
            router.push(`?product=${product.documentId}`)
            setLoader(false)
        },1000)
    }
    const closeModal = ()=>{
        router.push('?')
    }
return (
    <>
        <div className='container flex flex-wrap gap-5 py-[20px]'>
{
        data.data.map((item) => {
        return (
    <div key={item.id}
    onClick={()=> {
                    openModal(item)
    }}
    className='pt-[90px] px-[10px] pb-[20px] mt-[135px]  relative bg-white min-w-[250px] max-w-[250px] cart-radius shadow-card'>
            {
                item.image.map((img) =>{
                    return(
                        <div key={img.id} className='w-[210px] absolute top-[-115px] right-[20px] '>
                            <img src={img.url}/>
                        </div>
                    )
                })
            }
        <div className='flex justify-between'>
            <div>
                <h3 className='pb-[10px] pr-[20px] text-[15px] font-bold text-[#393f52]'>{item.title}</h3>
            </div>
            <div>
            <svg
    width="20"
    height="18"
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.83843 9.06698C0.865434 6.02921 2.00346 2.25241 5.19266 1.22592C6.87023 0.684564 8.94044 1.13615 10.1166 2.7584C11.2256 1.0763 13.3556 0.688192 15.0314 1.22592C18.2197 2.25241 19.3641 6.02921 18.392 9.06698C16.8776 13.8821 11.5937 16.3903 10.1166 16.3903C8.6403 16.3903 3.40355 13.9383 1.83843 9.06698Z"
      fill="transparent"
      stroke="#DE0000"
      strokeWidth="1.63223"
      strokeLinecap="round"
      strokeLinejoin="round"
      />
    <path
      d="M13.5059 4.63972C14.6004 4.75217 15.285 5.61997 15.2442 6.83598"
      stroke="#DE0000"
      strokeWidth="1.63223"
      strokeLinecap="round"
      strokeLinejoin="round"
      />
            </svg>
            </div>
        </div>
        <div>
            <p className='text-[12px] my-[10px] text-[#6a6e7b]'>{item.description}
</p>
        </div>
        <div className='p-[5px] bg-[#f0f4fa] rounded-md mb-[20px]'>
            <div className="flex justify-between items-center">

                <p className=' text-[12px] font-extrabold text-[#393f52]'>{item.price} EGP</p>
                <div className='flex items-center bg-[white] py-[7px] px-[5px] rounded-md'>
                <span className="text-[10px] mr-[5px] text-[#007aff] font-bold">CUSTOMIZE</span>
            <div className=" bg-[#007aff] rounded-md text-[white]">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="_icon_7ji0r_317" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.293 17.293L12.707 18.707 19.414 12 12.707 5.293 11.293 6.707 15.586 11 6 11 6 13 15.586 13z" />
                    </svg>
            </div>
                </div>
        </div>
            </div>
                <div className='absolute border-2 border-color bg-white rounded-lg  w-[140px] text-center justify-anchor-center'>
            <button className=' text-[12px] text-[#e4002b] py-[7px] px-[15px] font-extrabold '>ADD TO CART</button>
        </div>
    </div>
        )
        })}
    </div>

    {
        selectedProduct ? <ProductModal product={selectedProduct} onClose={closeModal}/> : ''
    }
    </>
)
}

export default ProductList