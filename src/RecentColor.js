import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
    <div>
      <p>Recent Color</p>
      <div style={{display:"flex", flexDirection:"row"}}>
      {this.props.recents.map((recent, index)=>{
          return <div key = {index} style={{width:"20px", height:"20px", backgroundColor:`${recent.color}`, borderRadius:"50%"}}></div>;
      })}
      </div>
    </div>
    );
  }
}

export default Button;
