import React from 'react';
import styles from'./HomePage.modules.css'
import Navbar from '../HomeNavbar/Navbar';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="div1">
          <div className="content">
            <h1>Trello brings all your tasks, teammates, and tools together</h1>
            <p>Keep everything in the same place—even if your team isn't.</p>
            <input type="email" placeholder="Email" />
            <button className={styles.btn}>Sign Up - it's free!</button>
          </div>
        </div>
        <div className="div2">
          <img src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=1140&fm=webp" alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
