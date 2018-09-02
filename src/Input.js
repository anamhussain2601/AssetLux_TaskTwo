import React, { Component } from "react";
import "./App.css";

class Input extends Component {
  
  render() {
    return (
      <div style={{marginBottom:"10px"}}>
        <label>Color code:</label>
        <input className ="input" type="text" placeholder="#FFFFFF" onChange={this.props.changeColor} value={this.props.color}/>
      </div>
    );
  }
}

export default Input;
