import React, { useContext } from "react";
import { CartContext } from "./Features/ContextProvider";
import CartProduct from "./CartProduct";
//import { totalItem, totalPrice } from "./Features/CartReducer";

export const Cart = () => {
  const { cartState } = useContext(CartContext);

  return (
    <div className="w-full h-auto p-4 md:p-10">
      <div>
        <div className="flex flex-col  items-start justify-start">
          <nav className="flex items-start md:items-start text-center justify-start w-full md:space-x-28">
            <h1 className="w-[200px]">Image</h1>
            <h1 className="w-[100px]">Price</h1>
            <h1 className="w-[100px]">Brand</h1>
            <h1 className="w-[100px]">Title</h1>
          </nav>

          {cartState.cart.map((p, index) => {
            return (
              <div>
                <CartProduct key={index} cartItems={p} />
              </div>
            );
          })}
          <div>
            <p>Total items:{cartState.totalQuantity}</p>
            <p>Total Price:{cartState.totalPrice.toLocaleString()}</p>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};
