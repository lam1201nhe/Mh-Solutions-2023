import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import Tinybox from "../TinyBox";
import styles from "./slidesproductlist.module.scss";
import MarginBox from "../Marginbox";
import LoadingIcon from "@/core/LoadingIcon";
const SlidesProductList = ({ items, className, tinyBox, isLoading }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <MarginBox className={styles.wrapperBox}>
        <h1>Sản Phẩm</h1>
        {isLoading ? (
          <LoadingIcon />
        ) : (
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            centeredSlides={true}
            centerInsufficientSlides={true}
            breakpoints={{
              620: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {items.map((item) => (
              <SwiperSlide
                style={{ width: "fit-content" }}
                className={styles.swiperSlide}
                key={item.id}
              >
                <Tinybox
                  className={tinyBox}
                  title={item.title}
                  content={item.content}
                  src={item.src_image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </MarginBox>
    </div>
  );
};

export default SlidesProductList;
