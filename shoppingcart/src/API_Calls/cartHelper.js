import axios from 'axios';
async function addCartData(body) {
    console.log("request Body", body);

    try {
        let res = await axios.post(`http://localhost:8080/api/cartDetails`, body);
        console.log("response--->",res.data);  
        return res.data

    } catch (error) {
        console.log("error");

    }

};
export default addCartData;