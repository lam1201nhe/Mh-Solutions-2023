import React from "react";
import styles from "./rightsmallboxinside.module.scss";

const RightSmallBoxInside = ({ className }) => {
  return (
    <div className={styles.rightBoxInside}>
      <img src="/img/newssecond.png" className={styles.img} />
      <div className={styles.information}>
        <h3 className={styles.title}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          minus dolor a, nulla possimus architecto expedita beatae earum
          laudantium fugiat magni inventore cupiditate impedit quae voluptatem
          laborum soluta. Blanditiis, numquam.
        </h3>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nemo
          iusto laudantium suscipit, porro ex, ipsam nobis obcaecati nihil
          dolore veniam commodi recusandae voluptates accusamus, debitis itaque
          quod natus unde.
        </p>
        <p className={styles.days}>12/01/2002</p>
      </div>
    </div>
  );
};

export default RightSmallBoxInside;
