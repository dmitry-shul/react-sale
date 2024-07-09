import React from 'react';
import styles from "./HeaderLine.module.css"

const HeaderLine = () => {

  return (
    <div className={styles.headerLine}>
      <div className="container">
        <div className={styles.headerLine__text}>Welcome to our online shop</div>
      </div>
    </div>
  )
}

export default HeaderLine