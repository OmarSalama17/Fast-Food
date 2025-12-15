"use client"
import {useGlobalContext} from '../components/Context-Api/Context-Api';
import { useUser } from "@clerk/nextjs";
import cartApis from '../_utils/cartApis';
import React, { useState } from 'react'
import Coupon from '../components/Coupon/Coupon';

const Cart = () => {
    const [open , setOpen] = useState(false)
          const {cart , setCart , setLoader} = useGlobalContext()
            const { user } = useUser();
const userEmail = user?.primaryEmailAddress?.emailAddress;

  const updateQuantity = async (item, newQuantity) => {
    setLoader(true);
    const cartId = cart?.id;
    if (!cartId) return;
    let updatedItems;
    if (newQuantity < 1) {
      updatedItems = cart.items
        .filter((i) => i.product.documentId !== item.product.documentId)
        .map((i) => ({
          product: i.product,
          quantity: i.quantity,
        }));
    } else {
      updatedItems = cart.items.map((i) => ({
        product: i.product,
        quantity:
          i.product.documentId === item.product.documentId
            ? newQuantity
            : i.quantity,
      }));
    }
    await cartApis.updateCart(cartId, updatedItems);
    const updatedCarts = await cartApis.getCart(userEmail);
    setCart(updatedCarts?.[0] || null);
    setLoader(false);
  };

const getTotal = (dev = 0) => {
  const items = Array.isArray(cart?.items) ? cart.items : [];

  return (
    items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    ) + dev
  );
};
  return (
<div className="container mt-[110px] ">
  <div className="flex flex-wrap justify-between">
    <div className="w-full  md:w-[66%] bg-white rounded-xl shadow-custom">
    <div className='p-[20px] border-b-1'>
        <h1 className='text-[20px] font-bold text-[#393f52] relative'>Cart {cart?.items ? cart?.items?.reduce((total, item) => total + item.quantity,0) : ""} {cart?.items ? "items" : ""} <span className='w-[60px] h-[3px] bottom-[-20px] left-[0] bg-[red] absolute'></span></h1>
    </div>
    <div className='p-[20px]'>
    <div className='p-[20px] bg-[#ecf1f5] flex flex-col gap-4'>
        {
          cart?.items?.map((item)=>{
            return( 
              <div key={item.product.documentId}>
                      <div className=' hidden lg:!flex items-center p-[20px] gap-[4%] bg-white shadow-custom rounded-lg'>
            <div className='w-full font-bold'>{item.product.title}</div>
            <div className='font-bold'>{item.product.price}.00EGP</div>
            <div className='flex justify-center items-center gap-[10px]'>
                <button onClick={()=> updateQuantity(item , item.quantity - 1)} className='w-[36px] h-[36px] bg-white border rounded-md shadow-custom font-bold'>-</button>
                <div className='font-bold'>{item.quantity}</div>
                <button onClick={()=> updateQuantity(item , item.quantity + 1)} className='w-[36px] h-[36px] bg-[red] border rounded-md shadow-custom font-bold text-white'>+</button>
            </div>
            <div className='margin-block'><img className='!w-[90px] h-[90px] max-w-none' src={item.product.image[0].url}/></div>
        </div>
        <div className='!flex lg:!hidden justify-between items-center p-[20px] gap-[4%] bg-white shadow-custom rounded-lg'>
          <div className='flex flex-col'>
            <div className='w-full font-bold'>{item.product.title}</div>
            <div className='font-bold'>{item.product.price}.00EGP</div>
          </div>
          <div className='flex flex-col'>
            <div className='flex justify-end margin-block'><img className='!w-[90px] h-[90px] max-w-none' src={item.product.image[0].url}/></div>
                      <div className='flex justify-end items-center gap-[10px]'>
                <button onClick={()=> updateQuantity(item , item.quantity - 1)} className='w-[36px] h-[36px] bg-white border rounded-md shadow-custom font-bold'>-</button>
                <div className='font-bold'>{item.quantity}</div>
                <button onClick={()=> updateQuantity(item , item.quantity + 1)} className='w-[36px] h-[36px] bg-[red] border rounded-md shadow-custom font-bold text-white'>+</button>
            </div>
          </div>
        </div>
              </div>
            )
          })
        }
    </div>
    </div>

    </div>
    <div className='sticky top-[100px] h-[100%] w-full md:w-[31%] rounded-lg shadow-custom'>
    <div className='px-[20px] py-[14px] bg-[#f2f9ff]  rounded-t-lg'><h1 className='font-bold text-[18px] text-[#393f52]'>Order Summary</h1></div>
    <div className="p-[20px]  bg-white ">
        <div className='flex  items-center p-[15px] shadow-custom rounded-md'>
        <div>
            <div className='p-[5px]'>
    <svg className='w-[35px] h-[35px]' width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 0H28C30.21 0 32 1.85172 32 4.13793V13.4379C32 14.9183 31.234 16.2869 29.992 17.0255L15.652 25.5476L1.942 17.0379C0.737 16.29 0 14.9431 0 13.4897V4.13793C0 1.85172 1.79 0 4 0Z"
        fill="#F1F9FF"
      ></path>
      <path
        d="M25.449 19.5086L26.277 18.5672L23.792 16.1341V11.2079H20.1V12.6624L15.64 8.2793L8.14 15.5165L7.714 15.9169L7.484 16.1341L5 18.5662L5.828 19.5076L7.485 17.8555V28.7165H6.254V29.989H25.024V28.7165H23.792V17.8545L25.449 19.5076V19.5086ZM21.33 12.4814H22.56V15.1834L21.33 13.9379V12.4814ZM14.408 28.7165V26.4086H16.869V28.7155H14.408V28.7165ZM16.869 25.1352H14.408V22.191H16.869V25.1352ZM18.1 28.7165V20.9165H13.177V28.7155H8.715V16.6979L15.639 9.99964L21.1 15.4172L22.562 17.0445V28.7155H18.1V28.7165Z"
        fill="black"
      ></path>
      <path
        d="M13.1768 18.3711H18.0998V19.6435H13.1768V18.3711Z"
        fill="#FF151B"
      ></path>
    </svg>
            </div>
    </div>
    <div className='text-[16px] text-[#007aff] ml-[15px] font-bold w-full'>Select Location</div>
        <div>
            <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      version="1.1"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.707 13.707l5-5c0.391-0.39 0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3.293 3.293h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.195 0.195-0.293 0.451-0.293 0.707s0.098 0.512 0.293 0.707c0.391 0.391 1.024 0.391 1.414 0z"></path>
    </svg>
        </div>
        </div>
        <div className='mt-[25px] '>
                <div className='flex border-inline items-center p-[15px] shadow-custom rounded-md'>
        <div>
            <div>
        <img className='w-[22px]' src="download.svg"/>
            </div>
    </div>
    <div onClick={()=> setOpen(true)} className='text-[16px] text-[black] ml-[10px] font-bold w-full cursor-pointer'>Apply Coupon</div>
        <div>
            <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      version="1.1"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.707 13.707l5-5c0.391-0.39 0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3.293 3.293h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.195 0.195-0.293 0.451-0.293 0.707s0.098 0.512 0.293 0.707c0.391 0.391 1.024 0.391 1.414 0z"></path>
    </svg>
        </div>
        </div>
        </div>
        
        <div className='shadow-custom p-[16px] mt-[20px] rounded-md'>
        <div className='flex flex-col py-[10px] gap-[15px]'>
            <div  className='flex justify-between'>
                <div className='text-[14px] text-[#393f52]'>Sub Total</div> <div className='font-bold text-[14px]'>{getTotal()}.00EGP</div>
            </div>
            <div  className='flex justify-between'>
                <div className='text-[14px] text-[#393f52]'>Delivery</div>  <div className='font-bold text-[14px]'>45.00EGP</div>
            </div>
            <div className='w-full h-[1px] bg-[#e0e0e0]'>

            </div>
            <div  className='flex justify-between'>
                <div className='text-[14px] text-[#393f52]'>Total</div> <div className='font-bold text-[14px]'>{getTotal(45)}.00EGP</div>
            </div>
        </div>
        </div>
    </div>
    <div className='bg-white w-full mt-[5px] rounded-xl pb-[30px] mb-[30px]'>
        <div className='check-out relative bg-linear flex justify-between py-[10px] px-[20px] margin-inline rounded-t-xl'>
            <div className='flex flex-col '>
                <span className='text-[20px] text-white font-bold'>{getTotal(45)}.00EGP</span>
                <span className='text-[#f7b2c0] text-[13px] font-bold'>* All prices are VAT Inclusive</span>
            </div>
            <div className='flex justify-center items-center'>
                <span className='mr-[10px] text-[white] text-[18px]'>Place Order</span>
                <span className='flex justify-center items-center w-[33px] h-[33px] bg-white rounded-full'>
        <svg
        className=' w-[22px] h-[22px]'
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 20 20"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      ></path>
        </svg>
                </span>
            </div>
        </div>
    </div>
    </div>
  </div>
  {
    open ? (
      <Coupon  open={open} setOpen={setOpen} />
    ): ""
  }

</div>
  )
}

export default Cart