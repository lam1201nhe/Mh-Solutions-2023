import React from "react";
import MarginBox from "../Marginbox";
import styles from "./footermobile.module.scss";
import LinkListFooter from "../LinkListFooter";
import Logo from "@/core/Logo";
import Copyright from "@/core/Copyright";
import ThreeIcon from "@/core/ThreeIcon";

const FooterMobile = ({className}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <MarginBox className={styles.wrapperBox}>
        <div className={styles.box}>
          {/* Logo */}
            <Logo center={{justifyContent: 'center', paddingBottom: '24px'}} width={58} height={40}/>
            <LinkListFooter />
            <div className={styles.footest}>
              <Copyright />
              <ThreeIcon />
            </div>
            
        </div>
      </MarginBox>
    </div>
  );
};

export default FooterMobile;
