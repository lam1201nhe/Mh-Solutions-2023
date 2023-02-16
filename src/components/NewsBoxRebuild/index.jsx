import React from "react";
import styles from "./newsboxrebuild.module.scss";
import MarginBox from "../Marginbox";
import { BsArrowRight } from "react-icons/bs";

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
              <div className={styles.rightBoxInside_up}>
                <img src="/img/newssecond.png" className={styles.img}/>
                <div className={styles.information}>
                  <h3 className={styles.title}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nesciunt minus dolor a, nulla possimus architecto expedita
                    beatae earum laudantium fugiat magni inventore cupiditate
                    impedit quae voluptatem laborum soluta. Blanditiis, numquam.
                  </h3>
                  <p className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem nemo iusto laudantium suscipit, porro ex, ipsam
                    nobis obcaecati nihil dolore veniam commodi recusandae
                    voluptates accusamus, debitis itaque quod natus unde.
                  </p>
                  <p className={styles.days}>12/01/2002</p>
                </div>
              </div>
              <div className={styles.rightBoxInside_down}>
                <img src="/img/newssecond.png" className={styles.img}/>
                <div className={styles.information}>
                  <h3 className={styles.title}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus reiciendis soluta maxime assumenda minima quos
                    necessitatibus earum repudiandae architecto praesentium ea,
                    explicabo hic nihil ullam voluptas officia libero laborum
                    doloremque!
                  </h3>
                  <p className={styles.content}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio laboriosam iste vero quibusdam quas rerum vel eum
                    exercitationem et, ut eveniet sequi. Quaerat repudiandae et
                    incidunt, illo quos ad atque?
                  </p>
                  <p className={styles.days}>12/01/2002</p>
                </div>
              </div>
              <p className={styles.all}>Xem tất cả <BsArrowRight /> </p>
            </div>
          </div>
        </div>
      </MarginBox>
    </div>
  );
};

export default NewsBoxRebuild;
