import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from 'react-router-dom'
import { createStore } from 'redux';
import reducer from './redux/reducer';
const store = createStore(reducer);
import { Provider } from 'react-redux';
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
   <App />
   </BrowserRouter>
   </Provider>
 ,
  document.getElementById('root')
);
