import React, { Component } from "react";
import "./App.css";

class Square extends Component {
  render() {
    return (
      <div className = "square" style={{backgroundColor:this.props.color}}>
      </div>
    );
  }
}

export default Square;
