import React from 'react'
import styles from '../styles/Card.module.css'

const Card = (props) => {
  const { imageData, onClick } = props
  return (
    <div className={styles.container}>
      {imageData.map((image) => {
        return (
          <div
            className={styles.card}
            onClick={() => onClick(image.id)}
            key={image.id}
          >
            <img src={image.src} alt={image.breed} />
            <p>{image.breed}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Card
