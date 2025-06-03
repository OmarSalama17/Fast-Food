import { PhoneCall } from 'lucide-react'
import React from 'react'

const ContactUs = () => {
  return (
    <div className='container mt-[110px]'>
        <div className='flex justify-center bg-white'>
            <div className='flex flex-col items-center'>
                <h1 className='text-[#E4002B] text-[18px] font-bold pt-[15px]'>Let's Connect</h1>
                <div><img className='w-[350px]' src='/organic-flat-customer-support-illustration.png'/></div>
                <p className='text-[14px]'>Sometimes you just need to speak to a real person. Give us a call.</p>
                <div className='relative flex justify-center mt-[20px] w-full '>
                    <p className='relative w-fit font-bold text-[14px] bg-white z-10 px-[8px]'>You can reach us on</p>
                    <span className='block w-[100%] h-[2px] bg-[#E4002B] absolute top-[10px]'></span>
                </div>
                <div className='w-[100%]'>
                <div className='mb-[20px] mt-[20px] px-[25px]'>
                    <p className='flex gap-2 py-[10px] font-bold '>
                        <svg
                        className='w-[20px] h-[20px] text-[#E4002B]'
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
  </svg>
                        15014
                    </p>
                    <p className='flex gap-2 py-[10px]  font-bold'>
                        <svg
                        className='w-[20px] h-[20px] text-[#E4002B]'
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 1024 1024"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                        </svg>
                        o.salama.abdallah@gmail.com
                    </p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

ContactUs.getLayout = (page) => {
  return page
}

export default ContactUs