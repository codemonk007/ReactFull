import React, { Component } from 'react';
import './Home.css';
import { connect } from 'react-redux';
class Home extends Component {
    productHandler() {
        this.props.history.push("/productlist");
    }
    render() {
        let types = Object.keys(this.props.product);
        console.log("types", types);
        return (
            <div>
                {
                    types.map(outerelement => {
                        return this.props.product[`${outerelement}`].map((element) => {
                            return (<img onClick={() => this.productHandler()} className="product" style={{ height: '20em' }} key={element.id} src={element.imageurl} alt="no property" />)
                        })
                    })
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log("[Home page Details]", state);
    return {
        product: state.product
    };
}

export default connect(
    mapStateToProps)(Home);
