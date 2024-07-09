import React from 'react';
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.footerBlock}>
          <span>© 2023 React Sale</span>
          <div><a style={{color: "#000"}} target="_blank" href="https://github.com/dmitry-shul">GitHub</a></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer