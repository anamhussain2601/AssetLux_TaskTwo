import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div style={{marginLeft:"10px"}}>
        <button className="button" style={this.props.undoRedoStyle} onClick={()=>this.props.onButtonClick(true)}>{this.props.label}</button>
      </div>
    );
  }
}

export default Button;
