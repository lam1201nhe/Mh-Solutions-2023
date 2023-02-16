import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./slidesproductlist.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Autoplay } from "swiper";

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
        modules={[ Navigation, Autoplay]}
        className={styles.slide}
      >
        <SwiperSlide>
          <img className={styles.img} style={{width: '100%',objectFit: 'contain'}} src="img/doitac.png" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img className={styles.img} style={{width: '100%',objectFit: 'contain'}} src="img/boyte.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.img} style={{width: '100%',objectFit: 'contain'}} src="img/amazon.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.img} style={{width: '100%',objectFit: 'contain'}} src="img/phuyenyte.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.img} style={{width: '100%',objectFit: 'contain'}} src="img/doitac.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.img} style={{width: '100%',objectFit: 'contain'}} src="img/edupia.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.img} style={{width: '100%',objectFit: 'contain'}} src="img/osam.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.img} style={{width: '100%',objectFit: 'contain'}} src="img/sphacy.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.img} style={{width: '100%',objectFit: 'contain'}} src="img/vietsens.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.img} style={{width: '100%',objectFit: 'contain'}} src="img/doitac.png" />
        </SwiperSlide>
        
        
        
      </Swiper>
    </div>
  );
};

export default SlidesPartner;
