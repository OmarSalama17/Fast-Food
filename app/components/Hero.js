"use client"
import React, { useEffect, useState } from 'react'
import ProductApi from '../_utils/ProductApi';
import DFCLoader from './DFCLoader';
import Loading from '../loading';
export const Hero = () => {
  const [show, setShow] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(false);

  useEffect(()=>{
    getLatestProducts_()
  },[])
  const getLatestProducts_ =  ()=> {
    setTimeout(()=>{
      ProductApi.getLatestProductsOffer().then(res =>{
        console.log(res.data.data);
        setData(res.data.data)
        setLoading(false)
        
      })
    },100)
}
  return (
    <>
    <div className='flex justify-between'>
        <h2 className='flex items-center text-[16px]  font-bold'>
            <span className='border-b-2 border-color pb-[3px]'>Top</span> 
            <span className='w-[3px]'>  </span> 
            <span className='pb-[3px]'>Deals</span> 
            <span><img className='w-[23px] ml-[10px]' src='https://egypt.kfc.me/assets/top-deals-b9351756.png'/> 
            </span>
        </h2>
        <p className='text-[#007aff] font-bold flex items-center'> View All 
            <span className='ml-[7px]'>
                <svg
  stroke="currentColor"
  fill="none"
  strokeWidth="0"
  viewBox="0 0 24 24"
  className="_arrowrighticon_2xdj4_111"
  height="1em"
  width="1em"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.0519 14.8285L13.4661 16.2427L17.7087 12L13.4661 7.7574L12.0519 9.17161L13.8803 11H6.34318V13H13.8803L12.0519 14.8285Z"
    fill="currentColor"
  />
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
    fill="currentColor"
  />
                </svg>
            </span>
        </p>
    </div>
    <div className='container flex flex-wrap py-[20px]'>
      {
          loading ? (
    Array.from({ length: 4 }).map((_, idx) => (
      <div
        key={idx}
        className="pt-[90px] px-[10px] pb-[20px] mt-[135px] relative mx-[15px] bg-white min-w-[250px] max-w-[250px] cart-radius animate-pulse"
      >
        <div className="w-[210px] h-[140px] bg-gray-300 rounded mb-4"></div>
        <div className="h-4 bg-gray-300  rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-6 bg-gray-300 rounded mb-4"></div>
        <div className="h-8 bg-gray-200 rounded w-[140px]"></div>
      </div>
    ))
  ) :(
        data.map((item) => {
          return (
    <div key={item.id} onClick={()=>{
      setModalLoading(true);
      setShow(null)
      setTimeout(() => {
      setModalLoading(false);
      setShow(item)
      }, 1000);
    }} className='pt-[90px] px-[10px] pb-[20px] mt-[135] relative bg-white min-w-[250px] max-w-[250px] cart-radius '>
        <div className='w-[210px] absolute top-[-115] right-[20px] '>
                <img />
        </div>
        <div className='flex justify-between'>
            <div>
                <h3 className='pb-[10px] pr-[20px] text-[15px] font-bold'>{item.title}</h3>
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
        <div className='text-center bg-[#f1f3f6] rounded-md mb-[20px]'>
                <p className='py-[10px] text-[12px] font-extrabold'>{item.price} EGP</p>
        </div>
        <div className='absolute border-2 border-color bg-white rounded-lg  w-[140px] text-center justify-anchor-center'>
            <button className=' text-[12px] text-[#e4002b] py-[7px] px-[15px] font-extrabold '>ADD TO CART</button>
        </div>
    </div>
          )
        }))
      }
      </div>
            {modalLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full relative animate-pulse">
            <div className="w-full h-48 bg-gray-300 mb-4 rounded"></div>
            <div className="h-4 bg-gray-300 w-3/4 mb-2 rounded"></div>
            <div className="h-3 bg-gray-200 w-1/2 mb-4 rounded"></div>
            <div className="h-8 bg-gray-300 w-full rounded"></div>
          </div>
        </div>
      )}
                  {modalLoading && (
<Loading/>
      )}
      {show && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-xl max-w-md w-full relative">
                  <button
                    className="absolute top-2 right-2 text-xl"
                    onClick={() => setShow(null)}
                  >
                    ❌
                  </button>
                  <h2 className="text-xl font-bold mb-2">{show.title}</h2>
                  <img
                    src={show.image}
                    alt={show.title}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <p>{show.description}</p>
      
                  <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
      )
        
      }
      </>
  )
}
