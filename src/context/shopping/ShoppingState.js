import React, { useReducer, useCallback, useMemo } from "react";
import ShoppingContext from "./shoppingContext";
import { shoppingReducer } from "./shoppingReducer";

export const ShoppingState = (props) => {
  const initialState = { basket: [], user: null };
  const [state, dispatch] = useReducer(shoppingReducer, initialState);


  const getBasketTotal = useCallback(
    (basket) => basket?.reduce((amount, item) => item.price + amount, 0),
    []
  );

  const addToBasket = useCallback(({ item }) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  }, []);

  const emptyBasket = useCallback(() => {
    dispatch({ type: "EMPTY_BASKET" });
  }, []);

  const removeFromBasket = useCallback((item) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: item });
  }, []);

  const setUser = useCallback((user) => {
    console.log("User payload", user);
    dispatch({ type: "SET_USER", payload: user });
  }, []);


  const value = useMemo(
    () => ({
      basket: state.basket,
      user: state.user,
      getBasketTotal,
      addToBasket,
      setUser,
      removeFromBasket,
      emptyBasket,
    }),
    [state.basket, state.user, getBasketTotal, addToBasket, setUser, removeFromBasket, emptyBasket]
  );

  return (
    <ShoppingContext.Provider value={value}>
      {props.children}
    </ShoppingContext.Provider>
  );
};
