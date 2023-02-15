import React from 'react'
import MiddleBox from '../MiddleBox'
import MarginBox from '../Marginbox'
import styles from "./partnerbox.module.scss"
import SlidesPartner from '../SlidesPartner'
const PartnerBox = () => {
  return (
    <MiddleBox className={styles.middlebox}>
        <MarginBox className={styles.boxinside}>
          <div className={styles.title}>
            <p className={styles.bigFont}>Đối Tác</p>
          </div>
          <div>
            <SlidesPartner />
          </div>
        </MarginBox>
      </MiddleBox>
  )
}

export default PartnerBox