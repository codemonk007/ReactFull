import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
    render() {
        return (
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <ul className="navbar-nav">
    <li className="nav-item active">
      <Link to="/" className="nav-link">Home</Link>
    </li>
    <li className="nav-item">
    <Link to="/productlist" className="nav-link">Product List</Link>
    </li>
    {/* <li className="nav-item">
      <a className="nav-link" href="#">Cart</a>
    </li> */}
  </ul>
</nav>
    )
    }
}
export default Header;