import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Product.css';
class ProductList extends Component {
     templteStyle={
        'text-align': 'center',
        'font-size': '24px',
        'text-decoration': 'underline'
    }
    render() {
        let types = Object.keys(this.props.product);
        console.log("types",types);
        return (
            <div>
                {
                    types.map((outerelement,i)=>{
                      return  <div key={i} className="outerLayer">
                              <div style={this.templteStyle}><strong>{outerelement}</strong></div>  
                           { this.props.product[`${outerelement}`].map((element)=>{  
                            return (
                                <span className="productInd">
                                    <img className="product" style={{height: '20em'}} key={element.id} src={element.imageurl}/>  
                                <span style={{display:"block"}}>gjgjgjhgh</span>
                                <span style={{display:"block"}}>gjgjgjhgh</span>
                                <span style={{display:"block"}}>gjgjgjhgh</span>
                                </span>

                            )})}
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
        product: state.product
    };
}

export default connect(
    mapStateToProps)(ProductList);
