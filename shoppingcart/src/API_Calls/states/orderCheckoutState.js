import * as actiontypes from './../../redux-Store/Constants';
// import { Dispatch } from "redux";
import store from './../../redux-Store/store';
const orderCheckoutState = (cartDetails) => {
    console.log("orderCheckoutState--/>",cartDetails);
//     store.dispatch({
//     type: actiontypes.initializeCart,
//     payload:cartDetails 
//   })
};
  
  export default orderCheckoutState