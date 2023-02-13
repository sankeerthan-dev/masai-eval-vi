import React from 'react'
import styles from '@/styles/Home.module.css'
import { useRouter } from "next/router";

export default function Nav() {
  const router=useRouter()
  return (
    <div className={styles.navBar}>
        <div className={styles.navButtonBox}>
            <button onClick={()=>router.push("/")}>Sankeerthan</button>
            <button onClick={()=>router.push("/project-page")}>Projects</button>
            <button onClick={()=>router.push("/experience-page")}>Experience</button>
        </div>
    </div>
  )
}
