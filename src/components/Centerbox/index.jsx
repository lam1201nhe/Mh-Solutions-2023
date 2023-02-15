import React from 'react'
import styles from "./centerbox.module.scss"

const CenterBox = ({children, style}) => {
  return (
    <div className={styles.centerbox} style={style}>
        {children}
    </div>
  )
}

export default CenterBox