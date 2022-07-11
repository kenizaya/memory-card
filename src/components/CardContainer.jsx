import React from 'react'
import Card from './Card'
import styles from '../styles/CardContainer.module.css'

const CardContainer = (props) => {
  const { imageData, onClick } = props

  return (
    <div className={styles.container}>
      {imageData.map((image) => (
        <Card image={image} onClick={onClick} />
      ))}
    </div>
  )
}

export default CardContainer
