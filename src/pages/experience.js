import React from 'react'
import data from '@/config/constants'
import styles from '@/styles/Home.module.css'

export default function Experience() {
  return (
    <div className={styles.experienceContainer}>
      <ol>
        {data.profile.experience.map((item)=>(
            <li>
                <div>
                    <h3>{item.title}</h3>
                    <h5>{item.period}</h5>
                </div>
            </li>
        ))}
      </ol>
    </div>
  )
}
