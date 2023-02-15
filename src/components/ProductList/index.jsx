import React from "react";
import Tinybox from "../TinyBox";
import styles from "./productlist.module.scss";

const ProductList = ({items}) => {
  // const list = items.items;
  return (
    <>
      {items.map((item) => (
        <Tinybox
          key={item.id}
          title={item.title}
          content={item.content}
          src={item.src_image}
        />
      ))}
    </>
  );
};

export default ProductList;
