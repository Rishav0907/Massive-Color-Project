import React, { Component } from 'react'
import  Pallete from "./Pallete";
import seedColors from "./seedColors";
import { generatePallete } from "./colorHelpers";
class App extends Component{
  render(){
    console.log(generatePallete(seedColors[4]))
    // console.log(seedColors[4])
    return (
      <div className="App">
        <Pallete pallete={generatePallete(seedColors[4])} />
      </div>
    );
  }
}

export default App;
