import React from "react";
import styles from "./responsiveimage.module.scss";

const ResponsiveImage = ({ className, styling, src, alt }) => {
  return (
    <div className={`${styles.divimg} ${className}`} style={styling}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  );
};

export default ResponsiveImage;
