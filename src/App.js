import React, { Component } from "react";
import { connect } from 'react-redux';
import "./App.css";
import DropDown from "./DropDown";
import Input from "./Input";
import Button from "./Button";
import { setShape, setColor, updateShapeColor } from './actions';
import Shapes from './Shapes';
import RecentColor from './RecentColor';

const undoRedoStyle={
  height:"30px",
  width:"50px"
}


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      recent:[],
      undoRedoIndex:-1
    }
  }

  updateRecent = () =>{
    let rec = this.state.recent;
    if(rec.length >= 4){
      rec.shift();
    }
    if(rec.length > 1){
      this.setState({
        undoRedoIndex:rec.length-1
      })
    }
    rec.push({color:this.props.color, shape:this.props.shape})
  }

  changeShape=(e)=>{
    this.props.setSha(e.target.value);
  }

  changeColor=(e)=>{
    this.props.setCol(e.target.value);
  }

  onUpdateColor=(isUpdateRecent)=>{
    if(!this.props.color && !this.props.shape){
      alert(`Please select "shape" and enter "color code"`);
    }
    this.props.updateShaCol(true);
    isUpdateRecent ? this.updateRecent() : null;
  }

  undo=()=>{
    let recentObj;
    
    if(this.state.undoRedoIndex>=0){
      recentObj = this.state.recent[this.state.undoRedoIndex];
      this.setState({
        undoRedoIndex:this.state.undoRedoIndex-1
      })
    }else{
      alert("Can't undo more than three.");
    }
    if(recentObj){
      console.log(recentObj);
      this.props.setSha(recentObj.shape);
      this.props.setCol(recentObj.color);
    }
    this.onUpdateColor(false);
  }
  
  redo=()=>{
    let recentObj;
    
    if(this.state.undoRedoIndex>=0){
      recentObj = this.state.recent[this.state.undoRedoIndex];
      this.setState({
        undoRedoIndex:this.state.undoRedoIndex-1
      })
    }else{
      alert("Can't undo more than three.");
    }
    if(recentObj){
      console.log(recentObj);
      this.props.setSha(recentObj.shape);
      this.props.setCol(recentObj.color);
    }
    this.onUpdateColor(false);
  }

  render() {
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
          <div>
            <p>Color Code for testing: #FFFF00 #7CFC00 #00008B #FF69B4</p>
            <DropDown changeShape={this.changeShape}/>
            <Input changeColor={this.changeColor} color={this.props.color}/>
            <Button label="Update Color" onButtonClick={this.onUpdateColor}/>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Button undoRedoStyle={undoRedoStyle} label="undo" onButtonClick={this.undo}/>
              <Button undoRedoStyle={undoRedoStyle} label="redo" onButtonClick={this.redo}/>
            </div>
          </div>
            {this.props.update ? <Shapes shape={this.props.shape} color={this.props.color}/> : null}
            {this.state.recent.length? <RecentColor recents={this.state.recent}/>: null} 
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    color: state.updateColor.color,
    shape:state.updateColor.shape,
    update:state.updateColor.update
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCol: (color) => dispatch(setColor(color)),
    setSha: (shape) => dispatch(setShape({shape:shape})),
    updateShaCol:(update) => dispatch(updateShapeColor({update:update})),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
