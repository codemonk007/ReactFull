import * as actiontypes from '../../redux-Store/Constants';
// import { Dispatch } from "redux";
import store from '../../redux-Store/store';
const getOrderSummaryInitialState = (orderDetails) => {
    console.log("state.orderDetails--/>",orderDetails);
    store.dispatch({
    type: actiontypes.orderItemsinitialState,
    payload:orderDetails 
  })};
  
  export default getOrderSummaryInitialState;