import React from 'react'
import styles from'./Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <div >
    <h1>Trello brings all your task ,</h1>
    <h1>teammates , and tools together</h1>
    </div>

    <h4>Keep everything in the same place-even if your team isn't.</h4>
    <input className={styles.input}/>
    <button className={styles.btn}>Get Trello for free</button>
    </div>
  )
}
