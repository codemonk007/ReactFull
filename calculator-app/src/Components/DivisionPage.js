import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../redux/reducerConstant';


class DivisionPage extends Component {
        state ={
            number1:'',
            number2:''
        }
    inputHandler1(value){
      this.setState({...this.state, number1:+value})
    }
    inputHandler2(value){
      this.setState({...this.state, number2:+value})
    }
    submitHandler(event){
        event.preventDefault();
        console.log(this.state)
        this.props.submitHandlerRedux(this.state)
        console.log("submitted!!!");
    }
  render() {
    return (
     <div>
       <form onSubmit={(event)=> this.submitHandler(event)}>
       <div>
          <label>Number 1</label> 
          <input type="text" onChange={(value)=>this.inputHandler1(value.target.value)}
          value={this.state.number1}></input>
      </div>
      <div>
          <label>Number 2</label> 
          <input type="text" onChange={(value)=>this.inputHandler2(value.target.value)}
          value={this.state.number2}></input>
      </div>
      <button type="submit">submit</button>
       </form>
     </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {

      submitHandlerRedux: (obj) => dispatch({type: actionTypes.DEVISION_CALULATOR,state:{
          number1: obj.number1,
          number2: obj.number2
      }
      })
  }
}
export default connect(null, mapDispatchToProps)(DivisionPage);
