import React from 'react'
import '../App.css';
import PigTileContainer from './PigTileContainer'

class MainContainer extends React.Component {
  render() {
    return (
      <div className="main-container">
        <PigTileContainer hogs={this.props.hogs}/>
      </div>
    )
  }
}

export default MainContainer