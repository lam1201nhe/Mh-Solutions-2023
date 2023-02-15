import React from "react";
import styles from "./gmail.module.scss";
const GmailSend = ({ input, button, className }) => {
  return (
    <div className={`${styles.gmail} ${className}`}>
      <input className={styles.input} type="text" placeholder={input} />
      <button className={styles.button}>{button}</button>
    </div>
  );
};

export default GmailSend;
