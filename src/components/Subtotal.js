import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import CurrencyInput from "react-currency-input-field";
import "./Subtotal.css";
import ShoppingContext from "../context/shopping/shoppingContext";

const Subtotal = () => {
  const history = useHistory();
  const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContext;
  console.log(getBasketTotal(basket));

  return (
    <div className="subtotal">
      <CurrencyInput
      value={getBasketTotal(basket)}
      prefix="$"
      decimalsLimit={2}
      disableGroupSeparators={false}
      readOnly
      onValueChange={() => {}}
    />

      <button onClick={e => history.push("./payment")}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
