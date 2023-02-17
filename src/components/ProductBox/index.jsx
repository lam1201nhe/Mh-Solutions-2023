import React from "react";
import styles from "./productbox.module.scss";
import CenterBox from "../Centerbox";
import ProductList from "../ProductList";
import BlackTitle from "@/core/Blacktitle";
import LoadingIcon from "@/core/LoadingIcon";

const ProductBox = ({ items, className, isLoading }) => {
  console.log(isLoading);
  return (
    <div className={`${styles.home} ${className}`}>
      <BlackTitle content="Sản Phẩm" />
      {isLoading ? (
        <LoadingIcon />
        ) : (
        <CenterBox>
          <ProductList items={items} />
        </CenterBox>
      )}
    </div>
  );
};

export default ProductBox;
