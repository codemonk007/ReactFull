import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cart.css';
import commonService from './../CommonService';
import * as actionTypes from './../../redux/Constants';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.CS = new commonService();
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
    render() {
        console.log("[inside cart]", this.props.cartDetails);
        return (<div>
            <div style={{ "textAlign": "center" }}>Cart Details</div>
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
                                    <span className="col-md-2 content">{Element.Price}</span>
                                    <span className="col-md-2 content">
                                        <button className="btn btn-success" onClick={() => this.add(Element)}>+</button>
                                        <span style={{ "padding": "12px" }}>{Element.itemCount}</span>
                                        <button className="btn btn-warning" id = {Element.itemCount <= 0?'disableremove':''} onClick={() => this.remove(Element)}>-</button>
                                    </span>
                                    <span className="col-md-2 content">{Element.Price * Element.itemCount} {this.CS.getDenomination(Element.Denaminamtion)}</span>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>)
    }
}
function mapStateToProps(state) {
    console.log("[Cart Details]", state);
    return {
        cartDetails: [...state.cartDetails]
    };
}
const mapDispatchToProps = dispatch => {
    return {
        updateProduct: (obj) => dispatch({ type: actionTypes.updateProduct, payload: obj }),
        removeCart: (obj) => dispatch({ type: actionTypes.removeCart, payload: obj }),
        updateCart: (obj) => dispatch({ type: actionTypes.updateCart, payload: obj })
    }
}
export default connect(
    mapStateToProps, mapDispatchToProps)(Cart);
