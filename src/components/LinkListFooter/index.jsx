import React from 'react'
import { useRouter } from "next/router";
import Link from "next/link";

import { links } from "@/documents";
import styles from "./linklistfooter.module.scss"

const LinkListFooter = () => {
  const router = useRouter();
  return (
    <div className={styles.box}>
        <div className={styles.leftBox}>
                {links.slice(0, 3).map((item) => (
                    <Link
                      href={item.url}
                      key={item.title}
                      style={item.url === router.pathname ? {color: '#FF4E16'} : {}}
                      className={styles.link}
                    >
                      {item.title}
                    </Link>
                  ))}
            </div>
            <div className={styles.rightBox}>
            {links.slice(3).map((item) => (
                    <Link
                      href={item.url}
                      key={item.title}
                      style={item.url === router.pathname ? {color: '#FF4E16'} : {}}
                      className={styles.link}
                    >
                      {item.title}
                    </Link>
                  ))}    
            </div>
    </div>
  )
}

export default LinkListFooter