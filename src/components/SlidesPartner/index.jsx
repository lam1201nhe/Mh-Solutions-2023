import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./slidespartner.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Autoplay } from "swiper";
import { partnerList } from "@/documents";

const SlidesPartner = () => {
  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        navigation={true}
        loop={true}
        autoplay={true}
        breakpoints={{
          567: {
            slidesPerView: 3,
            spaceBetween: 90,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 70,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Autoplay]}
        className={styles.slide}
      >
        {partnerList.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              className={styles.img}
              style={item.style ? item.style : { width: "100%", height: '100%'}}
              src={item.src}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlidesPartner;
