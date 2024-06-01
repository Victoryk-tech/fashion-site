import React, { useContext } from "react";
import { CartContext } from "./Features/ContextProvider";

const CartProduct = ({ cartItems }) => {
  const { dispatch } = useContext(CartContext);

  const {
    id,
    title,
    description,
    price,
    rating,
    stock,
    brand,
    discountPercentage,
    category,
    images,
    thumbnail,
    quantity,
  } = cartItems;
  const IncreaseCart = (item) => {
    dispatch({
      type: "Increase_Cart",
      payload: item,
    });
  };
  const DecreaseCart = (item) => {
    dispatch({
      type: "Decrease_Cart",
      payload: item,
    });
  };

  // Function to remove item from cart
  const removeFromCart = (item) => {
    dispatch({ type: "Remove_From_Cart", payload: item });
  };
  return (
    <div className="w-full h-auto py-6">
      {/* <div>
        <div>
          <img src={images} alt="" className="w-32 h-28" />
          <div>
            <p>{brand}</p>
            <p>{title}</p>
            <p>{price}</p>
          </div>
          <div className="flex gap-2">
            <button
              className="bg-[green] rounded-md px-2"
              onClick={() => Decrease(id)}
            >
              -
            </button>
            <button>{stock}</button>
            <button onClick={() => Increase(id)}>+</button>
          </div>
          <button
            className="rounded-md bg-[#8f2828] text-white p-2"
            onClick={() => dispatch({ type: "Remove", id: product.id })}
          >
            Remove
          </button>
        </div>
      </div> */}

      <nav className="flex items-center justify-center w-full space-x-28 text-center">
        <div>
          <img src={images} alt="" className="w-32 h-28" />
        </div>
        <div>{brand}</div>

        <p>${price}</p>

        <p>{title}</p>

        <div className="flex gap-2">
          <button
            className="bg-[green] rounded-md px-2"
            onClick={() => DecreaseCart(cartItems)}
          >
            -
          </button>
          <button>{quantity}</button>
          <button
            className="bg-[green] rounded-md px-2"
            onClick={() => IncreaseCart(cartItems)}
          >
            +
          </button>
        </div>
        <button
          className="rounded-md bg-[#8f2828] text-white p-2"
          onClick={() => removeFromCart(cartItems)}
        >
          Remove
        </button>
      </nav>
    </div>
  );
};

export default CartProduct;
