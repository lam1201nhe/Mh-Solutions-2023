import BlackTitle from "@/core/Blacktitle";
import Button from "@/core/Buttons";
import React from "react";
import styles from "./card.module.scss";
// import { CiAirportSign1 } from "react-icons/ci";
import ResponsiveImage from "../ResponsiveImage";
const blacktitle = {
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "32px",
};

const slides = {
  paddingTop: "calc(241 / 233 * 100%)",
};

const Card = ({ title, content, classSlide, classContent, classHr, classIcon, src }) => {
  return (
    <div className={styles.card}>
      {/* Icon */}
      {/* <CiAirportSign1 className={classIcon} /> */}
      <BlackTitle content={title} styling={blacktitle} />
      <hr className={classHr} width={96} style={{ color: "white" }} />
      <ResponsiveImage className={classSlide} styling={slides} src={src} alt={1} />
      <div className={classContent}>
        {content}
        <Button title="Tìm hiểu thêm" className={styles.button} />
      </div>
    </div>
  );
};

export default Card;
