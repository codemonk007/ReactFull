import * as actiontypes from './../../redux-Store/Constants';
// import { Dispatch } from "redux";
import store from './../../redux-Store/store';
const updateInitialState = (productDetails) => {
    console.log("state.product--/>",productDetails);
    store.dispatch({
    type: actiontypes.getProductInitialState,
    payload:productDetails 
  })};
  
  export default updateInitialState