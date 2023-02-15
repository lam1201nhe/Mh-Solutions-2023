import React from 'react'
import styles from "./button.module.scss"
const Buttons = ({title, className}) => {
  return (
    <button className={`${styles.button} ${className}`}> 
        {title}
    </button>
  )
}

export default Buttons