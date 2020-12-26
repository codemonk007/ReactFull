import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component{

    render(){
        return(
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                Home
                </Link>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav">
               <li className="nav-item active">
               <Link to="CalculatorPage" className="nav-link">
                Calculator Page
                </Link>
               </li>
             </ul>
           </div>
         </nav>
        )
    }
}

export default Header;