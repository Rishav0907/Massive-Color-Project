import React, { Component } from 'react'
import { Route,Switch } from 'react-router-dom'
import  Pallete from "./Pallete";
import PalleteList from "./PalleteList";
import seedColors from "./seedColors";
import { generatePallete } from "./colorHelpers";
class App extends Component{
  findPallete(id){
    return seedColors.find(function(pallete){
       console.log( pallete.id===id)
       return pallete.id===id
    })
  }
  render(){
    console.log(generatePallete(seedColors[4]))
    this.findPallete(4)
    // console.log(seedColors[4])
    return (
      <Switch>
        <Route exact path="/" render={()=> <PalleteList palletes={seedColors} /> } />
        <Route exact path="/pallete/:id" 
              render={(routeProps)=> 
                <Pallete pallete={generatePallete(this.findPallete(routeProps.match.params.id))} /> } /> 
      </Switch>
      // <div className="App">
      //   <Pallete pallete={generatePallete(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
