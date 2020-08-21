import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./home/Home";
import About from "./about/About";
import Register from "./register/Register";
import Login from "./login/Login";
import Products from "./products/Products";
import Nav from "./nav/Nav";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Cart from "./cart/Cart";
import AddForm from "./products/AddForm";

function App() {
  useEffect(() => {
    //initializing materialize css
    M.AutoInit();
  });
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
          <Route path="/addProduct" component={AddForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
