import React from 'react'
import styles from'./Home.module.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate('/todolist')
  }
  return (
    <div className={styles.main} >
    <div className={styles.container}>
    
    <h1>Trello brings all your task ,</h1>
    <h1>teammates , and tools together</h1>
    <h4>Keep everything in the same place-even if your team isn't.</h4>
   
        <img className={styles.img} src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=540" alt="TrelloImg"/>
      
        <button className={styles.btn} onClick={handleClick}>Get Trello for free!</button>
    </div>
    </div>
  )
}
