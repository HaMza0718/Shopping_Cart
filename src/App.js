import React from "react";
import Home from "./components/Home";
import Navbar from  "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import About from "./components/About";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import Login from "./components/Login";
import "./App.css";


const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      </div>
    </div>
  );
};

export default App;
