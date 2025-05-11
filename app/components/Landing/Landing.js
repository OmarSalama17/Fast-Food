"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "../../globals.css"
// import required modules
import { Pagination , Autoplay} from 'swiper/modules';

function Landing() {

  return (
    <>
            <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false,
            }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination , Autoplay]}
        className="mySwiper">
        <SwiperSlide><img src='https://kfcprodimages-ehcsdud6a5a5eqcm.z01.azurefd.net/cmsimages/kfc/imagestemp/desktop/zingerkantook_EGY_Ar_080525.jpg'/> </SwiperSlide>
        <SwiperSlide><img src='https://kfcprodimages-ehcsdud6a5a5eqcm.z01.azurefd.net/cmsimages/kfc/imagestemp/desktop/zingerkantook_EGY_Ar_080525.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://kfcprodimages-ehcsdud6a5a5eqcm.z01.azurefd.net/cmsimages/kfc/imagestemp/desktop/zingerkantook_EGY_Ar_080525.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://kfcprodimages-ehcsdud6a5a5eqcm.z01.azurefd.net/cmsimages/kfc/imagestemp/desktop/zingerkantook_EGY_Ar_080525.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://kfcprodimages-ehcsdud6a5a5eqcm.z01.azurefd.net/cmsimages/kfc/imagestemp/desktop/zingerkantook_EGY_Ar_080525.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://kfcprodimages-ehcsdud6a5a5eqcm.z01.azurefd.net/cmsimages/kfc/imagestemp/desktop/zingerkantook_EGY_Ar_080525.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://kfcprodimages-ehcsdud6a5a5eqcm.z01.azurefd.net/cmsimages/kfc/imagestemp/desktop/zingerkantook_EGY_Ar_080525.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://kfcprodimages-ehcsdud6a5a5eqcm.z01.azurefd.net/cmsimages/kfc/imagestemp/desktop/zingerkantook_EGY_Ar_080525.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://kfcprodimages-ehcsdud6a5a5eqcm.z01.azurefd.net/cmsimages/kfc/imagestemp/desktop/zingerkantook_EGY_Ar_080525.jpg'/></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Landing;
