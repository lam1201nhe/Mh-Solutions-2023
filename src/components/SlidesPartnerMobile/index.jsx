import React from "react";

import styles from "./slidespartnermobile.module.scss";
import { partnerList } from "@/documents";
import MarginBox from "../Marginbox";
const SlidesPartnerMobile = ({ className }) => {
  return (
    <MarginBox className={`${styles.wrapperBox} ${className}`} style={{display: 'none'}}>
      <div className={styles.box}>
        <h1 className={styles.title}>Đối Tác</h1>
        <div className={styles.boxInside}>
          {partnerList.slice(0, 3).map((item) => (
            <img
              key={item.id}
              src={item.src}
              className={styles.img}
              alt={item.name}
            />
          ))}
        </div>
        <div className={styles.boxInside}>
          {partnerList.slice(3, 6).map((item) => (
            <img
              key={item.id}
              src={item.src}
              className={styles.img}
              alt={item.name}
            />
          ))}
        </div>
        <div className={styles.boxInside}>
          {partnerList.slice(6, 9).map((item) => (
            <img
              key={item.id}
              src={item.src}
              className={styles.img}
              alt={item.name}
            />
          ))}
        </div>
        <div className={styles.boxInside}>
          {partnerList.slice(9).map((item) => (
            <img
              key={item.id}
              src={item.src}
              className={styles.img}
              alt={item.name}
            />
          ))}
        </div>
      </div>
    </MarginBox>
  );
};

export default SlidesPartnerMobile;
