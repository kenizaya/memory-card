import React from 'react'
import styles from '../styles/Loader.module.css'

const Loading = (props) => {
  const { level } = props
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>Loading Level {level}</div>
      <h3>Don't Click Previously Clicked Images!</h3>
    </div>
  )
}

export default Loading
