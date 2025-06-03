import React from "react";
import Link from 'next/link'

const Order = ({setOrder}) => {
  return (
    <div onClick={()=> setOrder(false)} className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-1000">
      <div className="flex justify-center items-center font-extrabold rounded-xl cursor-pointer mb-[40px] text-[20px]  w-[35px] h-[35px] text-[#393f52] bg-[white]">
        <p>×</p>
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#f1f3f6] rounded-3xl shadow-lg w-[400px]"
      >
        <div className="text-center bg-white  rounded-t-3xl p-[40px] pb-[20px] shadow-head">
        <h1 className="text-[#393f52] !text-[16px] font-bold mb-[10px]">Order History</h1>
        </div>
        <div className="flex flex-col px-[16px] h-[400px] justify-between items-center">
            <div className="mt-[20px]">
                <img className="w-[220px]" src="/empty-1a4f6e77.png"/>
            </div>
            <h2 className="!text-[16px]">No Orders Yet!</h2>
            <p className="text-[14px]">Start ordering your favourite items today.</p>
                        <div className='bg-[red] w-[100%] flex justify-center items-center mb-[20px] shadow-button'>
                <Link onClick={()=> setOrder(false)} href="/product" className="py-[15px] px-[8px] font-bold text-[12px] text-white">EXPLORE DFC MENU</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
