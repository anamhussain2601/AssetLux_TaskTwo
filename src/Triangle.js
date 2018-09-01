import React, { Component } from "react";
import clasess from './Triangle.css';
class Triangle extends Component {
  render() {
    return (
      <div className="triangle triangle-4" style={{borderBottom : `solid 150px ${this.props.color}`}}></div>
    );
  }
}

export default Triangle;