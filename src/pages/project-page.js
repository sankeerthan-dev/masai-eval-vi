import React from 'react'
import styles from '@/styles/Home.module.css' 
import Projects from './projects'

export default function ProjectPage() {
  return (
    <div className={styles.projectBackground}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"></link>
        <Projects/>
    </div>
  )
}
