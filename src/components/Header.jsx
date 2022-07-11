import React from 'react'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>DogeMemory</h1>
      <p className={styles.instruction}>
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
    </div>
  )
}

export default Header
