import React from "react";
import styles from "./navbar.module.scss";
import MarginBox from "../Marginbox";
import LinkList from "../LinkList";
import NavbarCover from "../NavbarCover";
import Logo from "@/core/Logo";

const Navbar = () => {
  return (
    <NavbarCover>
      <MarginBox>
        <div className={styles.navbar}>
          <Logo width={80} height={80} className={styles.logo}/>
          <LinkList
            formatList={styles.navlist}
            fontLink={styles.fontLink}
            cate={true}
          />
        </div>
      </MarginBox>
    </NavbarCover>
  );
};

export default Navbar;
