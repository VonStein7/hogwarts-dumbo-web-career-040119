import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data'
import CategoryContainer from './CategoryContainer'
import MainContainer from './MainContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          <CategoryContainer hogs={hogs}/>
          <MainContainer hogs={hogs}/>
      </div>
    )
  }
}

export default App;
