import React, { Component } from 'react';
import ColorBox from "./ColorBox";
import './Pallete.css'
class Pallete extends Component{
    render(){
        let colorBoxes=this.props.colors.map(color =>(
            <ColorBox background={color.color} name={color.name} />
        ))
        console.log(this.props.colors);
        return(

            <div className="Pallete">
                <div className="Pallete-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}
export default Pallete;