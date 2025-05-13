"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { image: "/offers.png", title: "EXCLUSIVE OFFERS", badge: true },
  { image: "/forone.png", title: "FOR ONE" },
  { image: "/forsharing.png", title: "FOR SHARING" },
  { image: "/sides.png", title: "SIDES & DESSERTS" },
  { image: "/beverages.png", title: "BEVERAGES" },
];

const CategorySlider = () => {
  return (
    <div className="relative w-full px-4">
      {/* Custom arrows */}
      <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
        <div className="swiper-button-prev-custom cursor-pointer bg-white shadow-md rounded-full p-2">
          <ChevronLeft size={24} />
        </div>
      </div>

      <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2">
        <div className="swiper-button-next-custom cursor-pointer bg-white shadow-md rounded-full p-2">
          <ChevronRight size={24} />
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
        className="w-full"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center">
              <div className="w-[140px] h-[140px] rounded-full border-[6px] border-[#fce5ea] overflow-hidden flex items-center justify-center bg-white shadow-md">
                <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
              </div>
              <p className="mt-3 font-semibold text-sm text-gray-800">{category.title}</p>
              {category.badge && (
                <div className="mt-2 text-xs bg-red-500 text-white px-3 py-1 rounded-full font-bold">
                  *EXCLUSIVE OFFERS*
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
