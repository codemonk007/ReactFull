import axios from 'axios';
import {getToken} from './../utils/jwt_secret';

const base_url = '/';
let headers = {};

const axios_instance = axios.create({
    baseURL:base_url,
    headers
})

axios_instance.defaults.headers['Content-Type'] = 'application/json';
axios_instance.defaults.headers["Access-Control-Allow-Origin"] =  '*';
const token = getToken();
if (token) {
    axios_instance.defaults.headers['Authorization'] = 'Bearer ' + token;
}

axios.interceptors.request.use(
    config => {
        console.log("interceptors",config.headers);        
        return config;
    },
    error => {
        Promise.reject(error)
    });

    export default axios_instance;