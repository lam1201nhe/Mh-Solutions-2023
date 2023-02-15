import React from "react";
import Card from "../Card";
import styles from "./tinybox.module.scss";

const Tinybox = ({ title, content, src }) => {
  return (
    <div className={styles.tinybox}>
      <Card
        title={title}
        content={content}
        classSlide={styles.slide}
        classContent={styles.content}
        classHr={styles.hr}
        classIcon={styles.icon}
        src={src}
      />
    </div>
  );
};

export default Tinybox;
