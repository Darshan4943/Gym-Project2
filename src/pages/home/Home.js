import React from 'react';

import { Link } from 'react-router-dom';
import styles from './Home.module.css';


export default function Home() {
  return (
    <div className={styles.body}>
    <div className={styles.container}>
      <main className={styles.main}>
        
        <div className={styles.content}>
         
          <div className={styles.textContainer}>
            <div className={styles.text}>
              <h1>"Take care of your body. It's the only place you have to live."</h1>
            </div>
            <Link to='/joinus' className={styles.ctaBtn}>Join Us</Link>
          </div>
        </div>
      </main>
      
    </div>
    </div>
  );
}