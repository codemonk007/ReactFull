import axios from 'axios';
import GlobalSettings from './../Config/settings';

async function login(body){
    try {
      let res = await axios.post(`http://localhost:8080/auth`, body); 
      if(res.status ==GlobalSettings.status.create && res.data)
      {
          return res.data; 
      }
      throw new Error("inValid Credentials");
  } catch (error) {
      console.log("error",error);
  }
};
export default login;
