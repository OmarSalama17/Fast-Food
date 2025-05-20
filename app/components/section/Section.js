import Link from 'next/link'
import React from 'react'

const Section = () => {
    const data = [
        {
            id:1 , 
            image:"https://res.cloudinary.com/dqvriwgrb/image/upload/v1747079485/banner_pickup_En_0508_4_lvkyvt.png",
            href:""
        },
        {
            id:2 , 
            image:"https://res.cloudinary.com/dqvriwgrb/image/upload/v1747079486/fav_order_3x_gukgjx.png",
            href:""
        }
    ]
return (
    <div className='container'>

    <div className='flex gap-14 flex-row-reverse mt-[70px] mb-[50px] py-[50px]'>
            {
                data.map((item, index) =>{
                    return (
                        <Link key={index} href={item.href} className='basis-[47.8%] rounded-md'> 
                        <div className='basis-[47.8%] rounded-md' >
                            <img className='w-full rounded-md' src={item.image} />
                        </div>
                        </Link>
                    )
                })
            }
    </div>
            </div>
)
}

export default Section