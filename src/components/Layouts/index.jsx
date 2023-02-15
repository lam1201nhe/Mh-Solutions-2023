import React from "react";
import styles from "./layout.module.scss";
import Navbar from "../Navbar";
import FooterRebuild from "../FooterRebuild";


const Layouts = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      {children}
      <FooterRebuild />
    </div>
  );
};

export default Layouts;
