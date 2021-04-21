import updateCartInitialState from './states/getCartInitialState';
import axios_instance from './../utils/axios';
async function addCartData(body) {
    try {
        let res = await axios_instance.post(`http://localhost:8080/api/addCartDetails`, body); 
        return res

    } catch (error) {
        console.log("error");

    }

};
async function removeCartData(body) {
    try {
        let res = await axios_instance.delete(`http://localhost:8080/api/removeCartDetails/${body.id}`);
        return res
    } catch (error) {
        console.log("error");

    }

};
const getCartData = () => {
  
   
   return dispatch => {
     // dispatch(updateInitialState());
     axios_instance
       .get(`http://localhost:8080/api/cartList`)
       .then(res => {
         dispatch(updateCartInitialState(res.data));
       })
       .catch(err => {
       });
   };
 };
// {
//     try {
//         console.log("inside Cart API");
//         return async dispatch => {
//             let res = await axios.get(`http://localhost:8080/api/cartList`);
//             console.log("response--->",res.data);  
//              return dispatch(updateInitialState(res.data));
//         }
//     // return res

//     } catch (error) {
//         console.log("error");
//     }
// };
export  { addCartData, removeCartData ,getCartData};