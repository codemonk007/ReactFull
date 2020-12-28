import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    image: [1, 2, 3, 4, 5, 6],
    startIndex: 1,
    endIndex: 4
  }
  buttonStyle={
    'position': 'relative',
    'vertical-align': 'middle',
    'top': '-292px'
  }
  getimageStyle(index) {
    let styleObj = {
      color: 'while',
      background: 'blue',
      height: '24em',
      margin: '11px'
    }
    if (index == Math.floor((this.state.startIndex+this.state.endIndex)/2)) {
      styleObj['height'] = '40em'
    }
    else{
      styleObj['position'] = 'relative';
      styleObj['top'] = '-93px';
    }
    return styleObj;
  }
  buttonHandler(direction){  
    if(direction == 'right'){
      if(this.state.endIndex <= this.state.image.length-1){
        this.setState({...this.state,startIndex:++this.state.startIndex,endIndex:++this.state.endIndex});     
      }
    }
    else if('left'){
      if(this.state.startIndex >= 1){
        this.setState({...this.state,startIndex:--this.state.startIndex,endIndex:--this.state.endIndex});
      }
    }
    console.log(direction);    
    console.log(this.state);  
  }
  render() {
    return (
      <div>
        <span style={this.buttonStyle}>
          <button onClick = {()=>this.buttonHandler("left")}>left</button>
        </span>
        <span style={{'padding-left':'33px'}}>
        {
          this.state.image.map((element, i) => {
            if (i >= this.state.startIndex && this.state.endIndex > i) {
              console.log(i);              
              return (
                <span>
                  <img style={this.getimageStyle(i)} src={"./" + element + ".png"}></img>
                </span>
              )
            }
          })
        }
        </span>
        <span>
          <button style={this.buttonStyle} onClick = {()=>this.buttonHandler("right")}>right</button>
        </span>
      </div>
    );
  }
}

export default App;
