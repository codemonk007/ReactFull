import updateInitialState from './states/updateInitialState';
import axios from 'axios';

 const getProductData = () => {
   console.log("Hi Hello");
   
    return dispatch => {
      // dispatch(updateInitialState());
      axios
        .get(`http://localhost:8080/api/ProductList`)
        .then(res => {
        console.log(res.data);            
          dispatch(updateInitialState(res.data));
        })
        .catch(err => {
        });
    };
  };
  export default getProductData;