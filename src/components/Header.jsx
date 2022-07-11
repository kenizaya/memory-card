import React from 'react'
import CurrentLevel from './CurrentLevel'
import styles from '../styles/Header.module.css'

const Header = (props) => {
  return (
    <div className={styles.header}>
      <h1>DogeMemory</h1>
      <p className={styles.instruction}>
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
      <p className={styles.instruction}>Unless you reach a new level.</p>
      <CurrentLevel level={props.level} />
    </div>
  )
}

export default Header
