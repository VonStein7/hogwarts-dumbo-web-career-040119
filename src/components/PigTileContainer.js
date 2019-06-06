import React from 'react'
import PigTile from './PigTile'

const PigTileContainer = (props) =>{
  return (
    <div>
      {props.hogs.map(piggy => {
        return <PigTile piggy={piggy}/>
      })}
    </div>
  )
}

export default PigTileContainer