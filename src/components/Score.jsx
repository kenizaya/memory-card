import React from 'react'
import styles from '../styles/Score.module.css'

const Score = (props) => {
  return <h2>{props.title + ': '} props.score</h2>
}

export default Score
