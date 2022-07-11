import React, { useEffect, useState } from 'react'
import CardContainer from './components/CardContainer'
import { dogs } from './components/data'
import Header from './components/Header'
import Score from './components/Score'

const App = () => {
  const [imageData, setImageData] = useState(dogs)
  const [clickedImages, setClickedImages] = useState([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  useEffect(() => {
    setBestScore((prevBestScore) => {
      return prevBestScore <= score ? score : prevBestScore
    })
  })
  const clickHandler = (id) => {
    if (!clickedImages.includes(id)) {
      setClickedImages((prevState) => {
        return [...prevState, id]
      })

      setScore((prevScore) => prevScore + 1)
    } else {
      setClickedImages([])
      setScore(0)
    }

    shuffle(imageData)
    console.log(clickedImages)
    console.log(score)
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
      <Score title='Score' score={score} />
      <Score title='Best' score={bestScore} />
      <CardContainer imageData={imageData} onClick={(id) => clickHandler(id)} />
    </div>
  )
}

export default App
