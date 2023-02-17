import React from "react";
import styles from "./newsboxrebuild.module.scss";
import MarginBox from "../Marginbox";
import { BsArrowRight } from "react-icons/bs";
import RightSmallBoxInside from "../RightSmallBoxInside";

const NewsBoxRebuild = () => {
  return (
    <div className={styles.container}>
      <MarginBox className={styles.wrapperBox}>
        <div className={styles.box}>
          <h1>Tin Tức</h1>
          <div className={styles.boxInside}>
            <div className={styles.leftBoxInside}>
              <img src="/img/rapviet.jpeg" className={styles.img} />
            </div>
            <div className={styles.rightBoxInside}>
              <RightSmallBoxInside key={1}/>
              <RightSmallBoxInside key={2}/>
              <p className={styles.all}>Xem tất cả <BsArrowRight /> </p>
            </div>
          </div>
        </div>
      </MarginBox>
    </div>
  );
};

export default NewsBoxRebuild;
