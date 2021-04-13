import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cart.css';
import commonService from './../CommonService';
import * as actionTypes from './../../redux-Store/Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash } from '@fortawesome/fontawesome-free-solid';
import PopupModal from './../Popup/PopUpModal';
import {orderCheckout} from  './../../API_Calls/orderHelper'
import { toast,ToastContainer } from 'react-toastify';
class Cart extends Component {
    
    constructor(props) {
        super(props);
        this.CS = new commonService();
    }
    state ={
        showmodal:false    
    }

    // componentDidMount() {
    //     console.log("get Initial Product Details-->");
    //     this.props.InitialCartDetails(getCartData);        
    //   }
    async handleOrder(){
        console.log("[Order] in place");
        let orderObject ={};
        orderObject.orderTime = new Date();
        orderObject.transcationId = Math.floor(Math.random() * 10);
        orderObject.status = 'in-progress';  
        orderObject.orderDetails = this.props.cartDetails;
        this.props.order(orderObject);
        this.props.cartDetails.forEach(element => {
        console.log("[element]",element);
        element.cartAdded= false;   
        this.props.updateProduct({
            catagory: element.catagory.toLowerCase(),
            product: element
        });     
        });
        this.setState(
            {...this.state,showmodal:false},
            () => console.log(this.state)) 
        let res = orderCheckout(orderObject);       
        toast.success("Order Placed Successfully!")
    }
    hideModal = () => {
        console.log(this);        
        this.setState(
            {...this.state,showmodal:false},
            () => console.log(this.state))
    }
    add(element) {
        element.itemCount = element.itemCount + 1;
        element.itemLeft = element.itemLeft - 1;
        this.props.updateProduct({
            catagory: element.catagory.toLowerCase(),
            product: element
        });
        this.props.updateCart(element);

    }
    remove(element) {
        element.itemCount = element.itemCount - 1;
        element.itemLeft = element.itemLeft + 1;
        this.props.updateProduct({
            catagory: element.catagory.toLowerCase(),
            product: element
        });
        this.props.updateCart(element);
    }
    removeCart(element){
        element.cartAdded= false;
        element.itemLeft = element.itemLeft+element.itemCount;
        element.itemCount =0;
        this.props.updateProduct({
            catagory: element.catagory.toLowerCase(),
            product: element
        });
        this.props.removeCart(element);
    }

    checkout(){      
        this.setState(
            {...this.state,showmodal:true},
            () => console.log(this.state))
    }
    render() {
        console.log("[inside cart]", this.props.cartDetails);
        return (
            // show={this.state.show} handleClose={this.hideModal}
        <div>
             <ToastContainer />
             <PopupModal show={this.state.showmodal} handleOrder={() => this.handleOrder()} handleClose={this.hideModal}/>
            <div style={{ "textAlign": "center" }}>Cart Details</div>
            {this.props.cartDetails.length >0 ? 
            <div className="border border-primary">
            <div>
                <div className="row" style={{ "height": "107px" }}>
                    <span className="col-md-2"></span>
                    <span className="col-md-2 content" ><strong>Name</strong></span>
                    <span className="col-md-2 content"><strong>Catagory</strong></span>
                    <span className="col-md-2 content"><strong>Price</strong></span>
                    <span className="col-md-2 content"></span>
                    <span className="col-md-2 content"><strong>Total</strong></span>
                </div>
                {
                    this.props.cartDetails.map(Element => {
                        return <div className="cartProduct" key={Element.id}>
                            <div className="row">
                                <span className="col-md-2"><img style={{ height: '12em', "width": "12em" }} src={Element.imageurl} alt="no property" /></span>
                                <span className="col-md-2 content" >{Element.name}</span>
                                <span className="col-md-2 content">{Element.catagory}</span>
                                <span className="col-md-2 content">{Element.price}</span>
                                <span className="col-md-2 content">
                                    <button className="btn btn-success" onClick={() => this.add(Element)}>+</button>
                                    <span style={{ "padding": "12px" }}>{Element.itemCount}</span>
                                    <button className="btn btn-warning" id={Element.itemCount <= 0 ? 'disableremove' : ''} onClick={() => this.remove(Element)}>-</button>
                                    <button className="btn btn-danger deleteButton" id={Element.itemCount <= 0 ? 'disableTrash' : ''} onClick={() => this.removeCart(Element)}><FontAwesomeIcon icon={faTrash} /></button>
                                </span>
                                <span className="col-md-2 content">{Element.price * Element.itemCount} {this.CS.getDenomination(Element.Denaminamtion)}</span>
                            </div>

                        </div>
                    })
                }
            </div>
            <div>
                <button className="btn btn-danger" 
                onClick={() => this.checkout()}
                style={{"float":"right","float": "right","position": "relative","left": "-23px","top": "21px"}}>Check Out</button>
            </div>
        </div>
        :
        <div className="noCart">No Items are added to Cart</div>
        }
        </div>
        
        )
    }
}
function mapStateToProps(state) {
    console.log("[Cart Details]", state);
    return {
        cartDetails: [...state.cartDetails],
        productDetails:{...state.product}
    };
}
const mapDispatchToProps = dispatch => {
    return {
        updateProduct: (obj) => dispatch({ type: actionTypes.updateProduct, payload: obj }),
        removeCart: (obj) => dispatch({ type: actionTypes.RemoveFromCart, payload: obj }),
        updateCart: (obj) => dispatch({ type: actionTypes.updateCart, payload: obj }),
        order:(obj) =>dispatch({ type: actionTypes.orderItems, payload: obj }),
        // checkoutDetails:(order,Obj) =>{dispatch(order(Obj))}
    }
}
export default connect(
    mapStateToProps, mapDispatchToProps)(Cart);
