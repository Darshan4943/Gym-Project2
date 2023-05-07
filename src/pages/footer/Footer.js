import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
        <h2>Social Follows</h2>
  <div className={styles.social}>
  <a href="https://www.youtube.com/c/jamesqquick"
        className={styles.youtube }>
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/learnbuildteach/"
       className={styles.facebook }>
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className={styles.twitter }>
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
       className={styles.instagram }>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
  </div>
  <hr style={{borderTop:"1px solid black"}}/>
  <p className={styles.p}>&copy; Gold Gym</p>
</footer>
)
}