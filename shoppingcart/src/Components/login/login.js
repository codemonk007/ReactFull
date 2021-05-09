
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './login.css';
import loginHelper from './../../API_Calls/loginHelper';
import {getToken} from './../../utils/jwt_secret';
class ProductList extends Component {
    constructor(){
        super();
        console.log("constructore");
    }
set = {
    name:"",
    password:null
}

async onSubmit(value){
    value.preventDefault();
    let tokenResponse = await loginHelper(this.state);
    if(tokenResponse && tokenResponse.jwt){
        localStorage.setItem('jwt',tokenResponse.jwt)
    }
    if(getToken()){
        this.props.history.push("/productlist");
    }    
}
render(){
    return <div>
    <form onSubmit = {($event)=> this.onSubmit($event)}>
      <div className="container">
          <div className="row">
          <div className="col-sm-12"> 
            <label className="name">Name</label>
           <input type="text" onChange={(e)=> this.setState({...this.state,name:e.target.value})}></input>
        </div>
        <div className="col-sm-12"> 
            <label className="name">Password</label>
           <input type="password" onChange={(e)=> this.setState({...this.state,password:e.target.value})}></input>
        </div>
          </div>
      </div>
        <button className="btn btn-primary submit" type="submit">submit</button>
    </form>
    </div>
}

}

export default ProductList;