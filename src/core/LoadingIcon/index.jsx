import React from "react";
import styles from "./loadingicon.module.scss";

const LoadingIcon = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.main}>
          <div className={styles.inside}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingIcon;
