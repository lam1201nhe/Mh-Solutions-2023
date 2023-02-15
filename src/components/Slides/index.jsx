import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/autoplay";

import styles from "./slides.module.scss"

// import required modules
import { FreeMode, Navigation, Pagination, Thumbs, Autoplay } from "swiper";

const Slides = ({paddingTop, checkNav, className}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={`${styles.divimg} ${className}`} style={paddingTop}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        pagination={{clickable: true}}
        loop={true}
        spaceBetween={10}
        navigation={checkNav}
        autoplay={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Pagination, Thumbs, Autoplay]}
        className={styles.wrapperImg} 
      >
        <SwiperSlide>
          <img className={styles.img} src="/img/slide1.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.img} src="/img/slide2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.img} src="/img/slide3.jpeg" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default Slides;