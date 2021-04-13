import axios from 'axios';
import orderCheckoutState from './states/orderCheckoutState';
import getOrderSummaryInitialState from './states/getOrderSummaryInitialState';

async function orderCheckout(body){ 
    console.log("inside Order checkour",body);    
    try {
      let res = await axios.post(`http://localhost:8080/api/orderCheckout`, body); 
      return res

  } catch (error) {
      console.log("error");

  }
};
  const getOrderData = () => { 
    return dispatch => {
      // dispatch(updateInitialState());
      console.log("Hi Hello");
      axios
        .get(`http://localhost:8080/api/getOrderDetails`)
        .then(res => {
        console.log(res.data);            
          dispatch(getOrderSummaryInitialState(res.data));
        })
        .catch(err => {
        });
    };
  };
  export  {orderCheckout,getOrderData};