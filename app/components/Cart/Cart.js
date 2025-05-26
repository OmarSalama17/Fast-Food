"use client"
import {useGlobalContext} from '../Context-Api/Context-Api';
import React from 'react'

const Cart = () => {
      const {cart , setCart} = useGlobalContext()
  console.log(cart);
  
  return (
    <div className='w-[400px] bg-white mt-[70px] bg rounded-xl'>
      <div className='bg-[#f5faff] py-[14px] px-[20px] rounded-xl'>
        {
          cart?
        <h1 className='font-bold text-[18px] text-[#333333]'>{cart.length} Item Added</h1>
        :
        <h1 className='font-bold text-[18px] text-[#333333]'>Your Cart is Empty</h1>
        }
      </div>
      <div className='flex flex-col gap-4 p-[20px] '>
      {
        cart?
        cart.map((item) =>{
          return (
            
              <div key={item.id} className=' shadow-custom p-[20px]'>
              <div className='flex justify-between mb-[8px] '>
                <h1 className='font-bold text-[#393f52]'>{item.product.title}</h1>
                <span className='font-bold text-[#393f52]'>{item.product.price}.00EGP</span>
              </div>
            <div className='flex justify-end items-center gap-[10px]'>
                <button className='w-[36px] h-[36px] bg-white border rounded-md shadow-custom font-bold'>-</button>
                <div className='font-bold'>2</div>
                <button className='w-[36px] h-[36px] bg-[red] border rounded-md shadow-custom font-bold text-white'>+</button>
            </div>
              </div>
            
          )
        }):
        <div className='flex flex-col p-[20px]'>
        <div>
        <img src='/burger-fast-food-concept-hand-drawn-sketch-vector-illustration.png'/>
        </div>
        <p className='text-center font-bold text-[#333333]'>Explore our menu to add some delicious items to your cart</p>
      </div>
      }
      </div>
    </div>
  )
}

export default Cart