import React from 'react'
import styles from "./threeicon.module.scss"
import {BsFacebook, BsLinkedin, BsTwitter} from "react-icons/bs"
const ThreeIcon = () => {
  return (
    <div className={styles.wrapper}>
        <BsFacebook className={styles.icon}/>
        <BsLinkedin className={styles.icon}/>
        <BsTwitter className={styles.icon}/>
    </div>
  )
}

export default ThreeIcon