"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight} from "lucide-react";
import Link from "next/link";

const categories = [
  { image: "https://res.cloudinary.com/dqvriwgrb/image/upload/v1747156795/296_combo_1667c67bec.png", title: "EXCLUSIVE OFFERS", badge: true , href:"/product?type=exclusive-offers"},
  { image: "https://res.cloudinary.com/dqvriwgrb/image/upload/v1748900681/295_combo_82261a8c86.png", title: "FOR ONE" , href:"/product?type=for-one"},
  { image: "https://res.cloudinary.com/dqvriwgrb/image/upload/v1748900706/CITYPNG_COM_Crispy_Chicken_Nuggets_on_Plate_with_ketchup_HD_PNG_2000x2000_6026252b64.png", title: "FOR SHARING" , href:"/product?type=for-sharing"},
  { image: "https://res.cloudinary.com/dqvriwgrb/image/upload/v1748900710/CITYPNG_COM_Hot_Dog_with_Herbs_and_Sauce_on_a_Wooden_Plate_HD_PNG_2000x2000_48d3e26f0b.png", title: "SIDES & DESSERTS" , href:"/product?type=sides-desserts"},
  { image: "https://kfcprodimages-ehcsdud6a5a5eqcm.z01.azurefd.net/cmsimages/kfc/imagestemp/66-Combo.png", title: "BEVERAGES" , href:"/product?type=beverages"},
];

const CategorySlider = () => {
  return (
    <div className="container relative w-full ">
      <h3 className="flex relative items-center justify-between my-[30px] mt-[50px] font-bold ">
        <span className="absolute bottom-[-2px] bg-red w-[33px] h-[2px]"></span>
        <span className="flex items-center">EXPLORE MENU <img className="ml-[8px]" src="https://egypt.kfc.me/assets/explore-menu-950b8776.png" width={20}/></span>
                <Link href={"/product"} className='text-[#007aff] font-bold flex items-center'> View All 
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
        </Link>
      </h3>
      <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
        <div className="swiper-button-prev-custom   cursor-pointer  rounded-full p-2">
          <svg
className="text-[#007aff] w-[20px] h-[20px]"
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.999,1.993C6.486,1.994,2,6.48,1.999,11.994c0,5.514,4.486,10,10.001,10c5.514-0.001,10-4.487,10-10 C22,6.48,17.514,1.994,11.999,1.993z M12,19.994c-4.412,0-8.001-3.589-8.001-8c0.001-4.411,3.59-8,8-8.001 C16.411,3.994,20,7.583,20,11.994C20,16.404,16.411,19.993,12,19.994z"></path>
    <path d="M12.012 7.989L8.007 11.994 12.012 15.998 12.012 12.994 16.006 12.994 16.006 10.994 12.012 10.994z"></path>
  </svg>
        </div>
      </div>

      <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2">
        <div className="swiper-button-next-custom   cursor-pointer  rounded-full p-2">
            <svg 
            className="text-[#007aff] w-[20px] h-[20px]"
    stroke="currentColor" 
    fill="currentColor" 
    strokeWidth="0" 
    viewBox="0 0 24 24" 
    height="1em" 
    width="1em" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.999,1.993c-5.514,0.001-10,4.487-10,10.001s4.486,10,10.001,10c5.513,0,9.999-4.486,10-10 C22,6.48,17.514,1.994,11.999,1.993z M12,19.994c-4.412,0-8.001-3.589-8.001-8s3.589-8,8-8.001C16.411,3.994,20,7.583,20,11.994 C19.999,16.405,16.41,19.994,12,19.994z"></path>
    <path d="M12 10.994L8 10.994 8 12.994 12 12.994 12 16 16.005 11.995 12 7.991z"></path>
  </svg>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1.5 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full !justify-evenly"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="!w-[220px] ">
            <Link href={category.href}>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-[150px] h-[150px] rounded-full relative border-[3px] border-[#ffd8c8] bg-white flex items-center justify-center shadow-md">
                <img src={category.image} alt={category.title} className="!w-[168px] max-w-96 !h-[168px] absolute top-[1px] z-30  object-cover" />
              </div>
              <p className="mt-3 font-semibold text-sm text-gray-800">{category.title}</p>
              {category.badge && (
                <div className="mt-2 text-xs bg-red-500 text-white px-3 py-1 rounded-full font-bold">
                  *EXCLUSIVE OFFERS*
                </div>
              )}
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
