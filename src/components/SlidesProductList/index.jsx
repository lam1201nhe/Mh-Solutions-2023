import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import styles from "./slidesproductlist.module.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const SlidesProductList = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div >
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        breakpoints={{
        //   567: {
        //     slidesPerView: 3,
        //     spaceBetween: 90,
        //   },
        //   768: {
        //     slidesPerView: 4,
        //     spaceBetween: 70,
        //   },
          1085: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Navigation, Thumbs]}
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
        
        
        
        
      </Swiper>
    </div>
  );
};

export default SlidesProductList;
