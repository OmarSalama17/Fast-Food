"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../globals.css';
import { Pagination, Autoplay } from 'swiper/modules';

const imageURL = "https://kfcprodimages-ehcsdud6a5a5eqcm.z01.azurefd.net/cmsimages/kfc/imagestemp/desktop/zingerkantook_EGY_Ar_080525.jpg";

function Landing() {
  const data = [
    {image:"https://res.cloudinary.com/dr2dnmx76/image/upload/v1748913877/food-facebook-cover-08_ls200h.jpg"},
    {image:"https://res.cloudinary.com/dr2dnmx76/image/upload/v1748913453/Food-Facebook-Banner-01_gylast.jpg"},
    {image:"https://res.cloudinary.com/dr2dnmx76/image/upload/v1748913450/480_aliogv.jpg"},
    {image:"https://res.cloudinary.com/dr2dnmx76/image/upload/v1748913449/food-facebook-cover-09_w3lbgh.jpg"},
    {image:"https://res.cloudinary.com/dr2dnmx76/image/upload/v1748913447/Food-Facebook-Cover-Banner-05_neucqo.jpg"},
    {image:"https://res.cloudinary.com/dr2dnmx76/image/upload/v1748913447/Food-Facebook-Banner-15_oi3m6r.jpg"},
    {image:"https://res.cloudinary.com/dr2dnmx76/image/upload/v1748913445/food_facebook_cover_40_bpeenl.jpg"},
  ]
  return (
    <>
      <div className="block lg:hidden w-full max-w-screen-md mx-auto py-4 px-2 sm:px-4">
        <Swiper
          spaceBetween={10}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="rounded-xl overflow-hidden"
        >
          {data.map((_, index) => {
            return (
              <SwiperSlide key={index}>
              <div className="w-full aspect-[16/9] rounded-lg overflow-hidden shadow-md">
                <img
                  src={_.image}
                  alt={`slide-${index}`}
                  className="w-full h-full object-cover"
                  />
              </div>
            </SwiperSlide>
                )
          })}
        </Swiper>
      </div>

      <div className="hidden lg:block w-full mx-auto py-4">
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {data.map((_, index) => {
            return(
                          <SwiperSlide key={index}>
              <img src={_.image} alt={`large-slide-${index}`} className="w-full h-auto" />
            </SwiperSlide>
            )
          }
          )}
        </Swiper>
      </div>
    </>
  );
}

export default Landing;
