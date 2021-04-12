import axios from 'axios';
import orderCheckoutState from './states/orderCheckoutState';
import getOrderSummaryInitialState from './states/getOrderSummaryInitialState';

const orderCheckout = (body) => { 
    console.log("inside Order checkour",body);    
    return dispatch => {
      // dispatch(updateInitialState());
      axios
        .post(`http://localhost:8080/api/orderCheckout`,body)
        .then(res => {
        console.log(res.data);            
          dispatch(orderCheckoutState(res.data));
        })
        .catch(err => {
            console.log("inside exception");
            dispatch(orderCheckoutState(err));            
        });
    };
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