import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import cart from './Components/Cart/Cart';
import ProductList from './Components/ProductList/ProductList';
import './App.css';
import Footer from './Components/Footer/Footer';
import orderSummary from './Components/OrderSummary/OrderSummary';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
<div>
<Header/>
    <Switch>
      <Route path="/productlist" component={ProductList}></Route>
      <Route path="/cart" component={cart}></Route>
      <Route path="/orderSummary" component={orderSummary}></Route>
      <Route exact path="/" component={Home}></Route>
    </Switch>
    <Footer/>
</div>
    );
  }
}

export default App;
