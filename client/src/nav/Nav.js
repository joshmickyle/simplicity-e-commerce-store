import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <div className="left">
            <Link to="!#" className="brand-logo left hide-on-med-and-down ">
              Simplicity
            </Link>
            <a
              to="#"
              className="sidenav-trigger show-on-med-and-down"
              data-target="slide-out"
            >
              <i className="material-icons">menu</i>
            </a>
          </div>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* side nav */}
      <ul id="slide-out" className="sidenav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
