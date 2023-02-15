import React from 'react'
import styles from "./middlebox.module.scss"
const MiddleBox = ({children, className}) => {
  return (
    <div className={`${styles.news} ${className}` }>
        {children}
    </div>
  )
}

export default MiddleBox