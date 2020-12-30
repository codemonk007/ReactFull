import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Product.css';
class ProductList extends Component {

    render() {
        let types = Object.keys(this.props.product);
        console.log("types",types);
        
        return (
            <div>

             <div className="outerLayer">
             {
               this.props.product.books.map((element)=>{  
                return (<img onClick={()=> this.productHandler()} className="product" style={{height: '20em'}} key={element.id} src={element.imageurl}/>)})
           }
             </div>
             <div className="outerLayer">
             {
                    this.props.product.mobiles.map((element) => {
                        return (<img onClick={this.productHandler} className="product" style={{ height: '20em' }} key={element} src={"./mobile/" + element + ".jpg"} />)
                    })
                }
             </div>
             <div className="outerLayer">
             {
                    this.props.product.vegitables.map((element) => {
                        return (<img onClick={this.productHandler} className="product" style={{ height: '20em' }} key={element} src={"./vegitables/" + element + ".jpg"} />)
                    })
                }
             </div>
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
