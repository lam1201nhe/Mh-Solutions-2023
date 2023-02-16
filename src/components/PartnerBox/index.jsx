import React from "react";
import MiddleBox from "../MiddleBox";
import MarginBox from "../Marginbox";
import styles from "./partnerbox.module.scss";
import SlidesPartner from "../SlidesPartner";
import SlidesPartnerMobile from "../SlidesPartnerMobile";
const PartnerBox = () => {
  return (
    <div>
      <MiddleBox className={styles.middleBox}>
        <MarginBox className={styles.boxInside}>
          <div className={styles.title}>
            <p className={styles.bigFont}>Đối Tác</p>
          </div>
          <div>
            <SlidesPartner />
          </div>
        </MarginBox>
      </MiddleBox>
      <SlidesPartnerMobile className={styles.slidesMobile} />
    </div>
  );
};

export default PartnerBox;
