"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const Filter = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const selectedType = searchParams.get("type")
    const filter = [
    { label: "ALL", value: "" },
    { label: "Deal Meals",    value: "deal-meals" },
    { label: "Exclusive Offers", value: "exclusive-offers" },
    { label: "For One",       value: "for-one" },
    { label: "For Sharing",   value: "for-sharing" },
    { label: "Sides & Desserts", value: "sides-desserts" },
    { label: "Beverages",     value: "beverages" },
    ]
    const handleClick = (type) =>{
        const newParams = new URLSearchParams(searchParams.toString())
        if (type === selectedType) {
            newParams.delete("type")
        }if (type === "") {
            newParams.delete("type")
        }else{
            newParams.set("type", type)
        }
        router.push(`?${newParams.toString()}`)
    }
  return (
    <div className='container'>
        <div className='flex justify-center items-center'>
                    <ul className='flex flex-wrap justify-between bg-white rounded-lg mt-[105px] mx-[20px] py-[5px] px-[20px] w-[63%] filter-shadow'>
            {
                filter.map((item, value) =>{
                    return (
                        <li key={value} onClick={()=>handleClick(item.value)} className={`cursor-pointer text-[#a6a8b0] rounded-lg text-[14px]  py-[15px] px-[12px]
                            ${selectedType === item.value ? "bg-[#fef2f4] text-[#f17990]" : ""} 
                            ${selectedType === null && item.value === "" ? "bg-[#fef2f4] text-[#f17990]" : ""}
                            `}> {item.label}</li>
                    )
                })
            }
        </ul>
        </div>
    </div>
  )
}

export default Filter