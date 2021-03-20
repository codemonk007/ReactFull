import { addToCart } from './../../redux-Store/Constants';
const addToCart = (cartDetails) => {
    console.log("state.product--/>",cartDetails);
    ({
    type: addToCart,
    payload: {
        product:productDetails      ,
    }
  })};
  export default addToCart;