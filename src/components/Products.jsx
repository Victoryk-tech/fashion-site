import React, { useContext, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { MdStarRate } from "react-icons/md";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { CartContext } from "./Features/ContextProvider";

export const Products = ({ product }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const { cartState, dispatch } = useContext(CartContext);
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
  } = product;

  // Function to add item to cart
  const addToCart = (item) => {
    dispatch({ type: "Add_To_Cart", payload: item });
  };
  return (
    <div className="w-full h-auto">
      <div className="flex flex-col justify-start items-start hover:shadow-[0_7px_25px_rgba(0,0,0,0.08)] bg-white rounded-lg w-96 lg:w-56 h-96 md:h-96 lg:h-[22rem] hover:scale-105 ease-in-out transition-all">
        {/* left */}
        <div className="flex items-center justify-center w-full h-1/2 ">
          <img
            src={images[0]}
            alt=""
            className="w-full h-full object-contain"
            onClick={toggleModal}
          />
        </div>
        {/* right */}
        <div className=" w-full h-1/3 px-8 md:px-4 space-y-2">
          <p className="text-sm font-semibold">{title}</p>
          <div className="flex items-center justify-between">
            <div>
              <p>{brand}</p>
            </div>
            <div>
              <p className="flex items-center justify-center">
                {" "}
                <MdStarRate className="text-[rgba(243,181,25)]" />
                <MdStarRate className="text-[rgba(243,181,25)]" />
                <MdStarRate className="text-[#E3E6F3]]" />({rating})
              </p>
            </div>
          </div>

          <div className="flex items-start justify-between">
            <p className="font-bold text-green-600 rounded-md">${price}</p>
            <div className="text-[24px] relative">
              <BsCart3 />
              {/* <h1 className="absolute bottom-4 left-3 bg-[red] text-white px-1 rounded-xl text-[16px]">
                {cart.id}
              </h1> */}
            </div>
          </div>
          <div className=" flex items-center w-full justify-center">
            <button
              className="bg-green-600 text-white p-[6px]  rounded-md text-center text-sm font-bold hover:bg-white border-none hover:text-green-600 hover:border-green-600 hover:border-2 hover:scale-95 ease-in-out transition-all"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {modal && (
        <div className="modal  fixed w-full h-full bg-[#C4C4C46B]  right-0 top-0 md:flex justify-start md:justify-end items-start md:items-end">
          <div
            className=" hidden md:flex flex-col justify-start md:justify-center items-center gap-4 p-4 w-[65%] md:w-[35%] h-full bg-transparent text-black"
            onClick={toggleModal}
          ></div>
          {/* modal for items */}
          <div className="flex flex-col justify-start md:justify-center items-center gap-4 p-4 w-full lg:w-[35%] h-full bg-white text-black">
            <div className=" flex flex-col justify-start md:justify-center items-start w-full h-full pt-14 px-2 md:pt-8 gap-4 text-black">
              <div
                className="text-[32px] text-black text-start w-full pt-4 md:pt-10"
                onClick={toggleModal}
              >
                <FaLongArrowAltLeft />
              </div>
              <div className=" flex items-center justify-center w-full h-[28%]">
                <img src={images} alt="" className="w-[40%] h-full" />
              </div>
              <h1 className="w-full text-center font-bold">{title}</h1>
              <p className="text-center text-sm">{description}</p>
              <div className="flex flex-col items-start font-[700] gap-2">
                <p>Brand: {brand}</p>
                <p>Stock: {stock}</p>
                <p className="flex items-center justify-center">
                  Rating: {rating}
                  <MdStarRate className="text-[rgba(243,181,25)]" />
                  <MdStarRate className="text-[rgba(243,181,25)]" />
                  <MdStarRate className="text-[rgba(243,181,25)]" />
                </p>
                <p>Category: {category}</p>
              </div>

              <div className="flex justify-center items-center gap-16 font-[500] w-full">
                <a
                  href="#"
                  className="bg-[#00302E] text-white py-2 px-3 text-[12px]"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
