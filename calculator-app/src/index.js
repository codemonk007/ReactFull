import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import { createStore } from 'redux';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import reducer from './redux/reducer';
const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>
  ,
  document.getElementById('root')
);
