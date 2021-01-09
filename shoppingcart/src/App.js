import React, { Component } from 'react';
import logo from './logo.svg';
import {Switch,Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import cart from './Components/Cart/Cart';
import ProductList from './Components/ProductList/ProductList';
import './App.css';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
<div>
<Header/>
    <Switch>
      <Route path="/productlist" component={ProductList}></Route>
      <Route path="/cart" component={cart}></Route>
      <Route exact path="/" component={Home}></Route>
    </Switch>
    <Footer/>
</div>

    );
  }
}

export default App;
