import React, { Component } from 'react';
import ColorBox from "./ColorBox";
import './Pallete.css'
import Navbar from './Navbar'
class Pallete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format:'hex'
        }
        this.changeLevel=this.changeLevel.bind(this)
        this.changeFormat=this.changeFormat.bind(this)
    }
    changeLevel(newLevel){
        this.setState({
            level:newLevel
        })
    }
    changeFormat(val){
        this.setState({
            format:val
        })
    }
    render() {
        let {colors}=this.props.pallete
        let {level,format}=this.state;
        console.log({format});
        let colorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name}  />
        ))
        console.log(this.props.colors);
        return (
            <div className="Pallete">
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
                <div className="Pallete-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}
export default Pallete;