import React from "react";

export const totalItem = (cart) => {
  return cart.reduce((sum, product) => sum + product.stock, 0);
};
export const totalPrice = (cart) => {
  return cart.reduce(
    (total, product) => total + product.stock * product.price,
    0
  );
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.product];
    case "Remove":
      return state.filter((p) => p.id !== action.id);
    case "Increase":
      const Index1 = state.findIndex((p) => p.id == action.id);
      state[Index1].stock += 1;
      return [...state];
    case "Decrease":
      const IndexD = state.findIndex((p) => p.id == action.id);
      state[IndexD].stock -= 1;
      return [...state];
    default:
      state;
  }
};

export default CartReducer;
