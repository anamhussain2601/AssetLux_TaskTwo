import React, { Component } from "react";

class DropDown extends Component {
  render(){
  return (
    <div>
      <select onChange={this.props.changeShape}>
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
