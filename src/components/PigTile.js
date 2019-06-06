import React from 'react'

const PigTile = (props) => {
  return (
    <div className="pigTile">
      <h3 className="piggyText">{props.piggy.name}</h3>
      <img src={`${props.piggy.url}`} />
    </div>
  )
}

export default PigTile