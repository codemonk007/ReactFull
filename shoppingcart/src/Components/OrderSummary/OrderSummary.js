import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OrderSummary.css';
import ItemDetail from './ItermDetail';
import {getOrderData} from './../../API_Calls/orderHelper';
class OrderSummary extends Component {
    state ={
        showDetails:[],
        orderObj:{}
    }
      componentDidMount() {
        this.props.getOrderDetails(getOrderData);        
      }
    showDetails(element){
        this.state.orderObj[`${element.id}`] = true;
        this.state.showDetails = {"catagory":element.catagory,"showDetails":true,"details":element.orderDetails};        
        this.setState({...this.state});
    }
    hideDetails(element){
        this.state.orderObj[`${element.id}`] = false;
        this.state.showDetails = {"catagory":element.catagory,"showDetails":false,"details":element.orderDetails};
        this.setState({...this.state});
    }
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
                            return <React.Fragment key={element.id}>
                                <tr key={element.id}>
                                    <td>{i + 1}</td>
                                    <td>{element.id}</td>
                                    <td>{element.orderTime.toString()}</td>
                                    <td>{element.status}</td>
                                    <td>
                                        {
                                            this.state.orderObj[`${element.id}`]?
                                            <button className="btn btn-warning" onClick={()=>this.hideDetails(element)}>hide Details</button>:
                                            <button className="btn btn-warning" onClick={()=>this.showDetails(element)}>check Details</button>
                                        }
                                    </td>
                                </tr>
                                <React.Fragment>
                                {
                                    this.state.orderObj[`${element.id}`]?
                                    <ItemDetail details={this.state.showDetails}></ItemDetail>
                                    :null
                                }
                                </React.Fragment>
                               
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
const mapDispatchToProps = dispatch => {
    return {
        getOrderDetails: (obj) => dispatch(obj())
    }
}
export default connect(
    mapStateToProps,mapDispatchToProps)(OrderSummary);