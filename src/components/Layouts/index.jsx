import React from "react";
import styles from "./layout.module.scss";
import Navbar from "../Navbar";
import FooterRebuild from "../FooterRebuild";
import FooterMobile from "../FooterMobile";


const Layouts = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      {children}
      <FooterRebuild className={styles.footerRebuild}/>
      <FooterMobile className={styles.footerMobile}/>
    </div>
  );
};

export default Layouts;
