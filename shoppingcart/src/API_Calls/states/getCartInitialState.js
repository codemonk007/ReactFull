import * as actiontypes from './../../redux-Store/Constants';
// import { Dispatch } from "redux";
import store from './../../redux-Store/store';
const updateCartInitialState = (cartDetails) => {
    console.log("state.cartDetails--/>",cartDetails);
    store.dispatch({
    type: actiontypes.initializeCart,
    payload:cartDetails 
  })};
  
  export default updateCartInitialState