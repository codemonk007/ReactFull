import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import * as css from './main_style.module.css';
import Header from './Components/Header/Header'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Components/Home/Home';
render(
  <Router>
    <Header/>
    <Switch>
            <Route exact path="/" component={Home}></Route>
    </Switch>
  </Router>,
  document.getElementById("app")
);
