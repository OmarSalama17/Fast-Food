'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import ProductModal from '../ProductModal/ProductModal';
import {useGlobalContext} from '../Context-Api/Context-Api';
import Cart from '../Cart/Cart';
import ButtonWishlist from '../ButtonWishlist/ButtonWishlist';
import { useUser } from '@clerk/nextjs';
import CartApis from "../../_utils/cartApis"
import Link from 'next/link';
const ProductList = ({data}) => {
    const { default: axiosClient } = require("../../_utils/axiosClient");
    const {user} = useUser()
    const [selectedProduct , setSelectedProduct] = useState(null)
    const router = useRouter()
    const searchParams = useSearchParams()
    const productId = searchParams.get("product") 
    const {cart , setCart , setLoader} = useGlobalContext()
    useEffect(()=>{
        if (productId) {
            const found = data.results.find(data => data.documentId.toString() === productId)
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

const getUserCart = async (userEmail) => {
  const res = await CartApis.getCart(userEmail);

  if (res.data.data.length > 0) {
    return res.data.data[0];
  } else {
    const createRes = await CartApis.addCart(userEmail);
    return createRes.data.data;
  }
};

const addToCart = async (productId, userEmail) => {
  if (!user) {
    router.push ("/sign-in")
  }
  setLoader(true)
  const cart = await getUserCart(userEmail);
  const oldItems = cart.items || [];

  const existingItem = oldItems.find((item) => {
    const currentDocId = item.product?.documentId;
    return currentDocId === productId;
  });

  let newItems = [];

  if (existingItem) {
    newItems = oldItems.map((item) => {
      const currentDocId = item.product?.documentId;
      return {
        product: { connect: [currentDocId] },
        quantity: currentDocId === productId ? item.quantity + 1 : item.quantity,
      };
    });
  } else {
    newItems = [
      ...oldItems.map((item) => ({
        product: { connect: [item.product?.documentId] },
        quantity: item.quantity,
      })),
      {
        product: { connect: [productId] },
        quantity: 1,
      },
    ];
  }
  await CartApis.updateCart(cart.documentId , newItems);
  const updatedCartRes = await CartApis.getCart(userEmail);
  const updatedCart = updatedCartRes.data.data[0];
  setCart(updatedCart);
  setLoader(false)
};
          const getTotal = (dev) =>{
            let total = 0
            if (dev) {
                cart?.items?.forEach(item =>{
              total += item.product.price
            })
            return total + dev
            }else{
                cart?.items?.forEach(item =>{
              total += item.product.price 
            })
            return total
            }
          }

return (
    <>
        <div className='relative container flex flex-wrap gap-5 py-[20px]'>
            <div className='flex flex-wrap justify-center h-[100%] flex-1 gap-[49px]'>
{
        data.results.map((item) => {
        return (
    <div key={item.id}
    
    className='flex flex-col  justify-around pt-[90px]  px-[10px] pb-[20px] mt-[135px]  relative bg-white min-w-[250px] max-w-[250px] cart-radius shadow-card ' >
            {
                item.image.map((img) =>{
                    return(
                        <div key={img.id} onClick={()=> {openModal(item)}} className='w-[210px] absolute top-[-115px] right-[20px] '>
                            <img src={img.url}/>
                        </div>
                    )
                })
            }
        <div className='flex justify-between border-b border-[#d7d9dc]'>
            <div>
                <h3 className='pb-[10px] pr-[20px] text-[15px] font-bold text-[#393f52]'>{item.title}</h3>
            </div>
                <ButtonWishlist/>
        </div>
        <div>
            <p className='description-box text-[12px] my-[10px] text-[#6a6e7b] overflow-hidden leading-none h-[24px]'>{item.description}
</p>
        </div>
        <div className='p-[5px] bg-[#f0f4fa] rounded-md mb-[20px]'>
            <div className="flex justify-between items-center">

                <p className=' text-[12px] font-extrabold text-[#393f52]'>{item.price}.00 EGP</p>
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
                <div className='absolute border-2 border-color bottom-[-15px] bg-white rounded-lg  w-[140px] text-center justify-anchor-center'>
            <button onClick={() => addToCart(item.documentId, user?.primaryEmailAddress?.emailAddress)}  className=' text-[12px] text-[#e4002b]  py-[7px] px-[15px] font-extrabold '>ADD TO CART</button>
        </div>
    </div>
        )
        })}
            </div>
            <div className='hidden lg:block'>
            <Cart/>
            </div>
    </div>

<div className='fixed bottom-0 w-full px-4 !bg-white lg:hidden'>
  <div className='flex justify-between items-center'>
    <div className='flex items-center gap-2'>
      <div><img className='w-[50px] sm:w-[40px]' src='hot-dog-street-cart-illustration.png' /></div>
      <div className='font-bold text-sm sm:text-base'>
        {cart?.items
          ? cart.items.reduce((total, item) => total + item.quantity, 0)
          : 0} ITEMS
      </div>
    </div>
    <div>
      <div className="bottom-[-30px] bg-linear rounded-md text-white px-3">
        <div className="flex justify-between h-[44px] items-center m-[8px] w-full max-w-[300px]">
          <div>
            <p className="font-bold text-sm sm:text-[14px] text-start">{getTotal()}.00 EGP</p>
            <p className="text-[8px] font-bold">* All prices are VAT Inclusive</p>
          </div>
          <Link href={"/cart"} className="flex font-bold text-sm sm:text-base">
            View Cart
            <p>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                className="text-[23px] ml-[10px] bg-white text-black rounded-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>


    {
        selectedProduct ? <ProductModal product={selectedProduct} onClose={closeModal}/> : ''
    }
    </>
)
}

export default ProductList