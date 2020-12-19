import React, { Component } from 'react';
import { Link } from "react-router-dom";
class PalleteList extends Component{
    render(){
        const { palletes }=this.props
        return(
            <div>
                {palletes.map(pallete =>(
                    <Link to={`/pallete/${pallete.id}`}>{pallete.paletteName}</Link>
                ))}
            </div>
        )
    }
}

export default PalleteList;