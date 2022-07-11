import React from 'react'
import styles from '../styles/Card.module.css'

const Card = (props) => {
  const { image, onClick } = props

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
}

export default Card
