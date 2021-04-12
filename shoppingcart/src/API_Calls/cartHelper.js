import axios from 'axios';
import updateCartInitialState from './states/getCartInitialState';
async function addCartData(body) {
    console.log("request Body", body);

    try {
        let res = await axios.post(`http://localhost:8080/api/addCartDetails`, body);
        console.log("response--->",res.data);  
        return res

    } catch (error) {
        console.log("error");

    }

};
async function removeCartData(body) {
    console.log("request Body", `http://localhost:8080/api/removeCartDetails/${body.id}`);
    try {
        let res = await axios.delete(`http://localhost:8080/api/removeCartDetails/${body.id}`);
        console.log("response--->",res.data);  
        return res

    } catch (error) {
        console.log("error");

    }

};
const getCartData = () => {
  
   
   return dispatch => {
     // dispatch(updateInitialState());
     console.log("Hi Hello");
     axios
       .get(`http://localhost:8080/api/cartList`)
       .then(res => {
       console.log(res.data);            
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