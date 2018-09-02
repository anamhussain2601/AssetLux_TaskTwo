import React, { Component } from "react";
import "./App.css";

class DropDown extends Component {
  render(){
  return (
    <div style={{marginBottom:"10px"}}>
      <label>Shape:</label>
      <select onChange={this.props.changeShape} className ="dropDown">
      <option value=""></option>
        <option value="Circle">Circle</option>
        <option value="Square">Square</option>
        <option value="Triangle">Triangle</option>
      </select>
      
    </div>
  );
};
};

export default DropDown;
