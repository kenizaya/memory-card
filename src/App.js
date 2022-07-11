import React, { useEffect, useState } from 'react'
import CardContainer from './components/CardContainer'
import { levels } from './components/data'
import Header from './components/Header'
import Score from './components/Score'
import Loader from './components/Loader'

const App = () => {
  const { level1, level2, level3, level4 } = levels
  const [level, setLevel] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)
  const [imageData, setImageData] = useState(level1)
  const [clickedImages, setClickedImages] = useState([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  useEffect(() => {
    setBestScore((prevBestScore) => {
      return prevBestScore <= score ? score : prevBestScore
    })

    if (score === imageData.length) {
      setLevel((prevLevel) => prevLevel + 1)
      setIsLoading(true)
    }
  }, [score])

  useEffect(() => {
    if (level < 4) {
      setImageData(() => {
        if (level === 2) return shuffle(level2)
        // if (level === 3) return shuffle(level3)
        // if (level === 4) return shuffle(level4)
        return shuffle(level1)
      })

      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    } else 
  }, [level])

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
  console.log(imageData)

  return (
    <div>
      <Header />
      <Score score={score} bestScore={bestScore} />
      {isLoading ? (
        <Loader level={level} />
      ) : (
        <CardContainer
          imageData={imageData}
          onClick={(id) => clickHandler(id)}
        />
      )}
    </div>
  )
}

export default App
