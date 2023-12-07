import "./App.css";
import "react-tabs/style/react-tabs.css";
import React from "react";
import Home from "./pages/homePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./pages/books/Books";
import BookDetails from "./pages/books/BookDetails";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Orders from "./pages/orders/Orders";
import About from "./pages/about/about";

function App() {
  return (
    <div className="App" dir="rtl">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/books" element={<Books />}></Route>
          <Route exact path="/product" element={<BookDetails />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/orders" element={<Orders />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
