import React from 'react'
import styles from '@/styles/Home.module.css' 
import Experience from './experience'

export default function ExperiencePage() {
  return (
    <div className={styles.experienceBackground}>
        <Experience/>
    </div>
  )
}
