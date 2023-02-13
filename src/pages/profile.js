import React from 'react'
import data from '@/config/constants'
import Link from 'next/link'
import Experience from './experience'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import imag from "./21MX220.jpg"
export default function Profile() {
  return (
    <>
        <div className={styles.nameContainer}>
            <Image className={styles.proImage} src={imag} alt='profile-image' width="400" height="400"/>
            <h2>Sankeerthan V R</h2>
            <a><Link href='https://github.com/sankeerthan-dev/'>@sankeerthan-dev</Link></a>
            <span className={styles.tagLineContainer}>
                {data.profile.taglines.map((item)=>(<h5>{item}</h5>))}
            </span>
            <div>
                <button>Resume</button>
                <button>Follow</button>
            </div>
        </div>
        <div className={styles.techStackContainer}>
            {data.profile.techStack.map((item)=>(
                <div>
                    <p>{item}</p>
                </div>
            ))}
        </div>
        <Experience/>
    </>

  )
}
