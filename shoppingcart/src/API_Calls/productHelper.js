import updateInitialState from './states/updateInitialState';
import * as actiontypes from './../redux-Store/Constants';
import axios_instance from './../utils/axios';
 const getProductData = () => {
    return dispatch => {
      axios_instance.get(`http://localhost:8080/api/ProductList`)
        .then(res => {
          dispatch(updateInitialState(res.data));
        })
        .catch(err => {
        });
    };
  };
  export default getProductData;