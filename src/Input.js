import React, { Component } from "react";
import Label from "./Label";

class Input extends Component {
  
  render() {
    return (
      <div>
        <Label />
        <input type="text" placeholder="#FFFFFF" onChange={this.props.changeColor} value={this.props.color}/>
      </div>
    );
  }
}

export default Input;
