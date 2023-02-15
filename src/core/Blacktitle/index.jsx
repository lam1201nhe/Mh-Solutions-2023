import React from 'react'
import styles from "./blacktitle.module.scss"

const BlackTitle = ({content, styling, className}) => {
  return (
    <p className={`${styles.blacktitle} ${className}`} style={styling}>
        {content}
    </p>
  )
}

export default BlackTitle