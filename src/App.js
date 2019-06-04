import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import Products from "./pages/Products";
import About from "./pages/About";
import Default from "./pages/Default";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <SideCart />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={SingleProduct} />
        <Route path="/products" component={Products} />
        <Route path="/about" component={About} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
