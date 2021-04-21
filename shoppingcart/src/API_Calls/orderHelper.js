import axios from 'axios';
import orderCheckoutState from './states/orderCheckoutState';
import getOrderSummaryInitialState from './states/getOrderSummaryInitialState';
import axios_instance from './../utils/axios';

async function orderCheckout(body){
    try {
      let res = await axios_instance.post(`http://localhost:8080/api/orderCheckout`, body); 
      return res

  } catch (error) {
      console.log("error");
  }
};
  const getOrderData = () => { 
    return dispatch => {
      // dispatch(updateInitialState());
      axios_instance
        .get(`http://localhost:8080/api/getOrderDetails`)
        .then(res => {         
          dispatch(getOrderSummaryInitialState(res.data));
        })
        .catch(err => {
        });
    };
  };
  export  {orderCheckout,getOrderData};