import React from 'react'
import {gitResult} from '@/config/constants'
import styles from '@/styles/Home.module.css'

export default function Projects() {
    // console.log(gitResult)
  return (
    
    <div className={styles.gridDisplayArea}>
        {gitResult.map((item)=>(
            <a href={item.html_url}>
            <div key={item.id} className={styles.gridItem}>
            <div>
                <i class="fa-regular fa-folder"></i>
                <h3>{item.name}</h3>
            </div>
                <p>{item.description!==null ? item.description : "-"}</p>
            <div className={styles.gitActionsContainer}>
                <div>
                    <i class="fa-regular fa-star"></i>
                    <h4>{item.stargazers_count}</h4>
                </div>
                <div>
                    <i class="fa-regular fa-eye"></i>
                    <h4>{item.watchers}</h4>
                </div>
            </div>
            </div>
            </a>
        ))}
    </div>
   
  )
}
// export const getStaticProps = async (context) => {
//     const res = await fetch("https://api.github.com/search/repositories?q=user:sankeerthan-dev+fork:true&sort=updated&per_page=10&type=Repositories");
//     const posts = await res.json();
//     return {
//       props: {
//         posts,
//       },
//     };
//   };