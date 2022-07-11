import React from 'react'

const CurrentLevel = (props) => {
  return (
    <h2 style={{ fontSize: '1.5rem', paddingTop: '10px' }}>
      Current Level {props.level}
    </h2>
  )
}

export default CurrentLevel
