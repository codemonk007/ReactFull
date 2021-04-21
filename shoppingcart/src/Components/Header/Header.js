import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { faCartPlus,faUser } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {getCartData} from './../../API_Calls/cartHelper';
import './Header.css';
import { isLogin } from './../../utils/jwt_secret';

class Header extends Component {
  set = {
    globalSearch:""
}
  componentDidMount() {
    if(isLogin()){
    this.props.InitialCartDetails(getCartData); 
  }
  }
  styleHandler(event){
    let Links =  document.getElementsByClassName('nav-link');
    [].forEach.call(Links, (element)=>{
      if(event.target.innerHTML === element.innerHTML){
        element.style.color = "white";
      }
      else{
        element.style.color = "";
      }
    });
  }
  globalSearch(value){
    this.setState({...this.state,globalSearch:value})
  }
  render() {
    let cartLength = this.props.cartDetails.filter(element => {
      return element.cartAdded
    })
    return (
      <nav className=" header navbar navbar-expand-md navbar-dark bg-dark" id="myHeader">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" onClick={($event) => this.styleHandler($event)} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/productlist" onClick={($event) => this.styleHandler($event)} className="nav-link">Product List</Link>
            </li>
            <li className="nav-item">
              <Link to="/orderSummary" onClick={($event) => this.styleHandler($event)} className="nav-link">Order Summary</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" onClick={($event) => this.styleHandler($event)} className="nav-link">login</Link>
            </li>
            
          </ul>
        </div>
        <div className="mx-auto order-0">
          <span>
           <input placeholder="Search" className="globalSearch" type="text" onChange={(e)=> this.globalSearch(e.target.value)}></input>
          </span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/cart" className="nav-link justify-content-end"><FontAwesomeIcon style={{ "fontSize": '20px' }} icon={faCartPlus} />
                {
                  cartLength.length > 0 ?
                    <span className="cartNotification"><span className="cartnumber">{this.props.cartDetails.length}</span></span> : ''
                }
              </Link>
            </li>
            <li className="nav-item">
            <FontAwesomeIcon style={{ "fontSize": '31px' }} icon={faUser} />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
function mapStateToProps(state) {
  console.log("[Header Details]", state);
  return {
    cartDetails: [...state.cartDetails]
  };
}
const mapDispatchToProps = dispatch => {
  return {
    InitialCartDetails:(obj) => dispatch(obj())
  }
}
export default connect(
  mapStateToProps, mapDispatchToProps)(Header);
