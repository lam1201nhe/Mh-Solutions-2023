import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

import Logo from "@/core/Logo";
import MarginBox from "../Marginbox";
import styles from "./footerrebuild.module.scss";
import LinkList from "../LinkList";
import GmailSend from "../GmailSend";

const FooterRebuild = () => {
  return (
    <div className={styles.container}>
      <MarginBox className={styles.wrapperBox}>
        <div className={styles.box}>
          <div className={styles.leftBox}>
            <div className={styles.logo}>
              <Logo width={136} height={93} />
              <div className={styles.copyright}>
                <AiOutlineCopyrightCircle style={{ paddingRight: "0px" }} />
                <p>Copyright 2020</p>
              </div>
            </div>
            <div className={styles.linkList}>
              <LinkList formatList={styles.format} fontLink={styles.fontLink} />
            </div>
          </div>
          <div className={styles.rightBox}>
            <div className={styles.location}>
              <p className={styles.title} style={{paddingBottom: '16px'}}> THÔNG TIN LIÊN HỆ</p>
              <p className={styles.content}>
                Địa chỉ: 71-73, Trần Thái Tông, Dịch Vọng, <br className={styles.br}/> Cầu Giấy, Hà Nội
              </p>
              <p className={styles.content}>Email: contact@mhsolution.vn</p>
              <p className={styles.content}>Điện thoại: 0973 090 393</p>
            </div>
            <div className={styles.spacebox}></div>
            <div className={styles.gmail}>
              <p className={`${styles.title} ${styles.longPara}`}> ĐĂNG KÝ NHẬN THÔNG TIN</p>
              <p className={`${styles.content} ${styles.longPara}`}>
                Đăng ký email để nhận tin tức và dịch vụ mới nhất từ chúng tôi
              </p>
                <GmailSend input="Địa chỉ Email" button="Đăng ký" className={styles.gmailbox} />
            </div>
          </div>
        </div>
      </MarginBox>
    </div>
  );
};

export default FooterRebuild;
