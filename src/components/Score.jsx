import React from 'react'
import styles from '../styles/Score.module.css'

const Score = (props) => {
  const { title, score } = props
  return <h2 className={styles.score}>{title + ': ' + score}</h2>
}

export default Score
