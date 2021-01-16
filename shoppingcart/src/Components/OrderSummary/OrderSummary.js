import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OrderSummary.css';
import ItemDetail from './ItermDetail';
class OrderSummary extends Component {

    render() {
        console.log("[orderDetails]", this.props.orderDetails);
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Iten #</th>
                        <th>Transaction Id</th>
                        <th>purchased Date</th>
                        <th>Dilevery Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.orderDetails.map((element, i) => {
                            return <React.Fragment key={element.transcationId}>
                                <tr key={element.transcationId}>
                                    <td>{i + 1}</td>
                                    <td>{element.transcationId}</td>
                                    <td>{element.orderTime.toString()}</td>
                                    <td>{element.status}</td>
                                    <td>
                                        <button className="btn btn-warning">check Details</button>
                                    </td>
                                </tr>
                                <ItemDetail></ItemDetail>
                            </React.Fragment>
                        })
                    }
                </tbody>
            </table>
        )
    }
}
function mapStateToProps(state) {
    console.log("[Order Summary]", state.orderDetails);
    return {
        orderDetails: [...state.orderDetails]
    };
}
// const mapDispatchToProps = dispatch => {
//     return {
//         ProductDetails: (obj) => dispatch({ type: actionTypes.productDetails, productDetails: obj }),
//         updateProduct: (obj) => dispatch({ type: actionTypes.updateProduct, payload: obj }),
//         addProduct: (obj) => dispatch({ type: actionTypes.addToCart, payload: obj }),
//         RemoveProduct: (obj) => dispatch({ type: actionTypes.RemoveFromCart, payload: obj })
//     }
// }
export default connect(
    mapStateToProps)(OrderSummary);
