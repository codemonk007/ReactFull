import { getProductInitialState } from './../../redux-Store/Constants';
const updateInitialState = (productDetails) => {
    console.log("state.product--/>",productDetails);
    ({
    type: getProductInitialState,
    payload: {
        product:productDetails      ,
    }
  })};
  export default updateInitialState;