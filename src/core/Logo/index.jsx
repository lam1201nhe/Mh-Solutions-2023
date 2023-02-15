import { useRouter } from 'next/router'
import React from 'react'
import styles from "./logo.module.scss"
const Logo = ({width, height, style, className}) => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push('/');
  }
  return (
    <div className={`${styles.coverimg} `}>
        <img className={`${styles.img} ${className}`} onClick={handleNavigate} src="/img/logoMH1.png" alt="logoMH" width={width} height={height} style={style}/>
    </div>
  )
}

export default Logo