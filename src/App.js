import React, { Component } from 'react'
import  Pallete from "./Pallete";
import seedColors from "./seedColors";

class App extends Component{
  render(){
    // console.log(seedColors[4])
    return (
      <div className="App">
        <Pallete {...seedColors[4]} />
      </div>
    );
  }
}

export default App;
