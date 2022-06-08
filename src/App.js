import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Invoices from "./pages/Invoices";
import NewProduct from './pages/NewProduct'

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Sidebar /> */}
      <Switch>
        <Route exact path="/">
          <ProductsPage />
        </Route>
        <Route exact path="/newEvent">
          <NewProduct />
        </Route>
        <Route exact path="/invoices">
          <Invoices />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/products/:id" children={<SingleProductPage />}>
          <SingleProductPage />
        </Route>
        <Route exact path="/checkout">
          <CheckoutPage />
        </Route>
        <Route exact path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
