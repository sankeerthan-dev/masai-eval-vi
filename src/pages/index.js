import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './profile'
import Projects from './projects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // console.log(posts)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"></link>
      </Head>
      <div className={styles.app}>
        <div className={styles.profileContainer}>
          <Profile/>
        </div>
        <div className={styles.projectsContainer}>
          <h1 className={styles.header}>Projects</h1>
          <Projects/>
        </div>
      </div>
    </>
  )
}
