import React from "react";
import styles from "./navbarcover.module.scss";
const NavbarCover = ({ children }) => {
  return <div className={styles.cover}>{children}</div>;
};

export default NavbarCover;
