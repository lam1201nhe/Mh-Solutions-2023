import React from 'react'
import styles from "./marginbox.module.scss"

const MarginBox = ({children, className, style}) => {
  return (
    <div className={`${styles.marginBox} ${className}`} style={style}>
        {children}
    </div>
  )
}

export default MarginBox