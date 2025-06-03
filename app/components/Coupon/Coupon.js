import React from 'react'
import Link from 'next/link'

const Coupon = ({setOpen}) => {

  return (
<div onClick={()=> setOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-1000">
                    <div className="flex justify-center items-center font-extrabold rounded-xl cursor-pointer mb-[40px] text-[20px]  w-[35px] h-[35px] text-[#393f52] bg-[white]"><p>×</p></div>
  <div onClick={(e)=> e.stopPropagation()} className="bg-[#f1f3f6] rounded-3xl shadow-lg w-[375px]">
    <div className='p-8 bg-white rounded-t-3xl shadow-head'>
    <h1 className="text-center text-[16px] text-[#393f52] font-bold relative pb-[7px] ">Offers <span className='absolute w-[30px] left-[140px] rounded-full bottom-[0px] h-[4px] bg-[red]'></span></h1>
    <p className="text-center text-[14px]">Select one of the amazing offers below.</p>
    </div>
    <div className=''>
        <div className='p-[12px] bg-white mt-[15px]'>
        <div className='bg-[#f1f3f6] flex py-[10px] px-[5px]  border-1 border-dashed border-[#aaadb7]'>
        <input type='text'placeholder='Enter your coupon code here' className='focus:outline-none bg-transparent w-full'/>
        <span className='cursor-pointer text-[red]'>APPLY</span>
        </div>
        </div>
        <div className='flex flex-col items-center w-full gap-[15px] bg-[#f1f3f6] px-[16px] pb-[30px] rounded-b-3xl'>
            <img src='/noOffer-12378fe1.png' className='w-[205px]'/>
            <h2 className='font-bold text-[18px]'>No Deals & Offers!</h2>
            <div className='bg-[red] w-[100%] flex justify-center items-center shadow-button'>
                <Link href="/product" className="py-[15px] px-[8px] font-bold text-[12px] text-white">EXPLORE DFC MENU</Link>
            </div>
        </div>
    </div>
  </div>
</div>
  )
}

export default Coupon