import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeart, faInfo } from '@fortawesome/fontawesome-free-solid';
import { Switch, Route } from 'react-router-dom'
import commonService from './../CommonService';
import Modal from './../Modal/modal';
import * as actionTypes from './../../redux/Constants';
class ProductList extends Component {
    state = {
        show: false
    }
    constructor(props) {
        super(props);
        this.CS = new commonService();
    }
    templteStyle = {
        'textAlign': 'center',
        'fontSize': '24px',
        'textDecoration': 'underline'
    }
    hideModal = () => {
        this.setState({...this.state,show: false });
      }

    ProductDetails(catagory, Product) {
        console.log("[ProductDetails] catagory", catagory);
        console.log("[ProductDetails] Product", Product);
        this.setState({...this.state,show:true})
        this.props.ProductDetails(Product);
    }
    ProductAddToWishList(outerelement,element){
        element.addToWishList = !element.addToWishList;
        this.props.updateProduct({
            catagory:outerelement,
            product:element
        });        
    }
    ProductAddToCart(element){
        console.log("[PRODUCT]",element);  
        this.props.addProduct(element);
    }
    render() {
        let types = Object.keys(this.props.product);
        console.log("types", types);
        return (
            <div>
                <Modal show={this.state.show}  handleClose={this.hideModal}/>
                {
                    types.map((outerelement, i) => {
                        return <div key={i} className="outerLayer">
                            <div key={i} style={this.templteStyle}><strong>{outerelement}</strong></div>
                            {this.props.product[`${outerelement}`].map((element) => {
                                return (
                                    <span className="productInd" key={element.id}>
                                        <img className="product" style={{ height: '20em' }} key={element.id} src={element.imageurl} />
                                        <span style={{ display: "block", 'paddingLeft': '21px', 'paddingTop': '5px' }}><label>{element.name}</label></span>
                                        <span style={{ display: "block", 'paddingLeft': '21px', 'paddingTop': '5px' }}><label>{element.catagory}</label></span>
                                        <span style={{ display: "block", 'paddingLeft': '21px', 'paddingTop': '5px' }}><label>{element.Price + " " + this.CS.getDenomination(element.Denaminamtion)}</label></span>
                                        <span style={{ display: "block", 'paddingLeft': '21px', 'paddingTop': '5px' }}>
                                            <button type="button" className="btn btn-success" onClick={() =>  this.ProductAddToCart(element)}><FontAwesomeIcon icon={faCartPlus} /></button>
                                            <button className="btn btn-primary" onClick={() =>  this.ProductAddToWishList(outerelement,element)}><FontAwesomeIcon id={element.addToWishList?'wishListActive':''}  icon={faHeart} /></button>
                                            <button className="btn btn-warning" onClick={() => this.ProductDetails(outerelement, element)}><FontAwesomeIcon style={{ "color": "white" }} icon={faInfo} /></button>
                                        </span>
                                    </span>

                                )
                            })}
                        </div>
                    })
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log("[ProductList]", state);
    return {
        product: {...state.product}
    };
}

const mapDispatchToProps = dispatch => {
    return {
        ProductDetails: (obj) => dispatch({type: actionTypes.productDetails,productDetails:obj}),
        updateProduct: (obj) => dispatch({type: actionTypes.updateProduct,payload:obj}),
        addProduct: (obj) => dispatch({type: actionTypes.addToCart,payload:obj})
    }
}
export default connect(
    mapStateToProps,mapDispatchToProps)(ProductList);
