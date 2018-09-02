import React, { Component } from "react";
import "./App.css";

class Circle extends Component {
  render() {
    return (
      <div className="circle" style={{backgroundColor:this.props.color}}>
    </div>
    );
  }
}

export default Circle;