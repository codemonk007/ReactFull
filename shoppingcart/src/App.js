import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import login from './Components/login/login';
import cart from './Components/Cart/Cart';
import ProductList from './Components/ProductList/ProductList';
import './App.css';
import Footer from './Components/Footer/Footer';
import orderSummary from './Components/OrderSummary/OrderSummary';
import 'react-toastify/dist/ReactToastify.css';
// import request_interceptors from './Interceptors/request_interceptors';
import loginHelper from './API_Calls/loginHelper';
import PrivateRoute from './Routes/PrivateRoute';
class App extends Component {

  componentDidMount(){

  }
  render() {
    return (
<div>
<Header/>
    <Switch>
      <PrivateRoute exact path="/productlist" component={ProductList}></PrivateRoute>
      <PrivateRoute exact path="/cart" component={cart}></PrivateRoute>
      <PrivateRoute exact path="/orderSummary" component={orderSummary}></PrivateRoute>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={login}></Route>
    </Switch>
    <Footer/>
</div>
    );
  }
}

export default App;
