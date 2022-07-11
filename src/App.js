import React, { useState } from 'react'
import Card from './components/Card'
import { dogs } from './components/data'
import Header from './components/Header'

const App = () => {
  const [imageData, setImageData] = useState(dogs)
  const [clickedImages, setClickedImages] = useState([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const clickHandler = (id) => {
    if (!clickedImages.includes(id)) {
      setClickedImages((prevState) => {
        return [...prevState, id]
      })
    } else setClickedImages([])

    shuffle(imageData)
    console.log(clickedImages)
  }

  // Using Fisher-Yates algo
  const shuffle = (array) => {
    const newArray = [...array]

    for (let i = newArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }

    setImageData(newArray)
  }

  return (
    <div>
      <Header />
      <Card imageData={imageData} onClick={(id) => clickHandler(id)} />
    </div>
  )
}

export default App
