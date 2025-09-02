import "./components/App.css";
/*import React from 'react';*/
import { useContext, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import ShoppingContext from "./context/shopping/shoppingContext";
import NotFound from "./components/NotFound";
import { auth } from "./firebase";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";

const promise = loadStripe(
  "pk_test_51PldAVEtkXek43DnjGXmS7fWO3A8YXWLFjSP69ChzdAuuELBo0PR0TYvtojPGdmEjfDTZkKiuDsMpjc4UPXSdyCI00DWkbwUmj"
);

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is -> ", authUser);

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, [setUser]);
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />"
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;

//Checkout (isLogin) > Payment (isLogin) > PaidOrder (isLogin)
