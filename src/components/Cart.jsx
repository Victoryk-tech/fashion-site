import React, { useContext } from "react";
import { CartContext } from "./Features/ContextProvider";
import CartProduct from "./CartProduct";
import { totalItem, totalPrice } from "./Features/CartReducer";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <div>
        <div>
          {cart.map((p) => {
            return (
              <div>
                <CartProduct product={p} />
              </div>
            );
          })}
          <div>
            <p>Total items:{totalItem(cart)}</p>
            <p>Total Price:{totalPrice(cart)}</p>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};
