import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { faCartPlus } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {getCartData} from './../../API_Calls/cartHelper';
import './Header.css';

class Header extends Component {

  componentDidMount() {
    console.log("get Initial Product Details-->");
    this.props.InitialCartDetails(getCartData);        
  }
  
  render() {
    let cartLength = this.props.cartDetails.filter(element => {
      return element.cartAdded
    })
    return (
      <nav className=" header navbar navbar-expand-md navbar-dark bg-dark" id="myHeader">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/productlist" className="nav-link">Product List</Link>
            </li>
            <li className="nav-item">
              <Link to="/orderSummary" className="nav-link">Order Summary</Link>
            </li>
            
          </ul>
        </div>
        <div className="mx-auto order-0">
          <a className="navbar-brand mx-auto" href="#">Navbar 2</a>
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
