import React, { Component } from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Header from './StaticComponents/Header';
import HomePage from './Components/HomePage';
import CalculatorPage from './Components/CalculatorPage';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route  path="/CalculatorPage" component={CalculatorPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
