import React, { Component } from 'react';
import ColorBox from "./ColorBox";
import './Pallete.css'
import Navbar from './Navbar'
class Pallete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500
        }
        this.changeLevel=this.changeLevel.bind(this)
    }
    changeLevel(newLevel){
        this.setState({
            level:newLevel
        })
    }
    render() {
        let {colors}=this.props.pallete
        let {level}=this.state;
        let colorBoxes = colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name}  />
        ))
        console.log(this.props.colors);
        return (
            <div className="Pallete">
                <Navbar level={level} changeLevel={this.changeLevel} />
                <div className="Pallete-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}
export default Pallete;