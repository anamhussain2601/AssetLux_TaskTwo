import React, { Component } from "react";
import Circle from "./Circle";
import Triangle from './Triangle';
import Square from './Square';

class Shapes extends Component{
    render(){
        let shape,
            isValidColor = /^#[0-9A-F]{6}$/i.test(this.props.color);
        switch(this.props.shape) {
            case 'Circle':
                shape = <Circle color={isValidColor ? this.props.color: null}/>;
                break;
            case 'Square':
                shape = <Square color={isValidColor ? this.props.color: null}/>;
                break;
            case 'Triangle':
                shape = <Triangle color={isValidColor ? this.props.color: null}/>;
                break;
            default:
                shape = null;
                break;
        }
    return(
        <div>{
            shape
        }</div>
    )
}
}


export default Shapes;