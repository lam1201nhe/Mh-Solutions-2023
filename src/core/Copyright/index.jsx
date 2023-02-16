import React from 'react'
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import styles from "./copyright.module.scss"

const Copyright = ({className}) => {
  return (
    <p className={`${styles.copyright} ${className}`}>
        <AiOutlineCopyrightCircle />
        Copyright 2020 
    </p>
  )
}

export default Copyright