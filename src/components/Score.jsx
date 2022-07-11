import React from 'react'
import styles from '../styles/Score.module.css'

const Score = (props) => {
  const { score, bestScore, level } = props
  return (
    <div className={styles.scoreContainer}>
      <h2 className={styles.score}>{'Score: ' + score}</h2>
      <h2 className={styles.bestScore}>{'Best: ' + bestScore}</h2>
    </div>
  )
}

export default Score
