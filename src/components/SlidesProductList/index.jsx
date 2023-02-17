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
const SlidesProductList = ({ items, className, tinyBox }) => {
  return (
    <div className={styles.container}>
      <MarginBox className={styles.wrapperBox}>
        <h1>Sản Phẩm</h1>
        <Swiper
          slidesPerView={2}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={`${styles.swiper} ${className}`}
          breakpoints={{
            390: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
        >
          {items.map((item) => (
            <SwiperSlide
              style={{ width: "fit-content" }}
              className={styles.swiperSlide}
            >
              <Tinybox
                className={tinyBox}
                key={item.id}
                title={item.title}
                content={item.content}
                src={item.src_image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </MarginBox>
    </div>
  );
};

export default SlidesProductList;
