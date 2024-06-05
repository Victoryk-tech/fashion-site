import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdStarRate } from "react-icons/md";
import axios from "axios";
import { Loader } from "./Loader";
import { Products } from "./Products";

export const Features = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setLoading(false);
      setProducts(response.data.products);
      console.log(response.data.products);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error.message);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    <div>Error:{error}</div>;
  }
  return (
    <div className="w-full h-full p-4 md:p-3 lg:py-10 lg:px-7 bg-white">
      <div className="text-center flex flex-col items-center center pb-4 w-full">
        <h1 className="text-[38px] font-bold">Features</h1>
        <p className="text-xl">Summer collection New modern products</p>
      </div>
      <div className="flex items-start justify-start gap-3">
        <div className="hidden md:flex flex-col items-start justify-start p-3  lg:w-96 bg-white">
          <div className="pb-3 gap-3">
            <h1 className="text-sm font-bold pb-3">CATEGORY</h1>
            <h2 className="text-[16px]">Health & Beauty</h2>
          </div>
          <div className="space-y-3">
            <h1 className="text-sm font-bold pb-3">SHIP FROM</h1>
            <div className="flex items-center justify-center gap-2">
              <a href="" className="p-[5px]  border-[3px] border-[#E3E6F3]"></a>
              <h2 className="text-[13px]">Shipped from Nigeria</h2>
            </div>
            <div className="flex items-center justify-center gap-2">
              <a href="" className="p-[5px]  border-[3px] border-[#E3E6F3]"></a>
              <h2 className="text-[13px]">Shipped from Abroad</h2>
            </div>
          </div>

          <div>
            <h1 className="text-sm font-bold py-4">BRANDS</h1>

            <div className=" md:flex items-center justify-center py-[2px] mb-2 hover:bg-[#E3E6F3] border-[1px] border-black rounded-[10px]">
              <CiSearch className="text-[24px] font-bold" />
              <input
                type="text"
                className="border-none bg-transparent outline-none"
              />
            </div>

            <div className="flex items-startjustify-start space-x-2">
              <div className="flex flex-col space-y-3 justify-center items-center">
                <a
                  href=""
                  className="p-[5px] border-[3px] border-[#E3E6F3]"
                ></a>
                <a
                  href=""
                  className="p-[5px] border-[3px] border-[#E3E6F3]"
                ></a>
                <a
                  href=""
                  className="p-[5px] border-[3px] border-[#E3E6F3]"
                ></a>
                <a
                  href=""
                  className="p-[5px] border-[3px] border-[#E3E6F3]"
                ></a>
                <a
                  href=""
                  className="p-[5px] border-[3px] border-[#E3E6F3]"
                ></a>
              </div>
              <div className="flex flex-col justify-start items-start space-y-[7.2px]">
                {" "}
                <h2 className="text-[13px]">Beauty</h2>
                <h2 className="text-[13px]">2black</h2>
                <h2 className="text-[13px]">Afri</h2>
                <h2 className="text-[13px]">Culture</h2>
                <h2 className="text-[13px]">Fricon</h2>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-sm font-bold pt-4">PROUDUCT BRANDS</h1>

            <div className="flex items-center justify-center text-center gap-2">
              <a
                href=""
                className="p-[6px]  border-[3px] rounded-[50%] border-[#E3E6F3] "
              ></a>
              <div className="flex items-center justify-center">
                <MdStarRate className="text-[rgba(243,181,25)]" />
                <MdStarRate className="text-[#E3E6F3]" />
                <MdStarRate className="text-[#E3E6F3]" />
                <MdStarRate className="text-[#E3E6F3]" />
                <MdStarRate className="text-[#E3E6F3]" />
                <p className="text-sm"> & above</p>
              </div>
            </div>
            <div className="flex items-center justify-center text-center gap-2">
              <a
                href=""
                className="p-[6px]  border-[3px] rounded-[50%] border-[#E3E6F3] "
              ></a>
              <div className="flex items-center justify-center">
                <MdStarRate className="text-[rgba(243,181,25)]" />
                <MdStarRate className="text-[rgba(243,181,25)]" />
                <MdStarRate className="text-[rgba(243,181,25)]" />
                <MdStarRate className="text-[rgba(243,181,25)]" />
                <MdStarRate className="text-[rgba(243,181,25)]" />
                <p className="text-sm"> & above</p>
              </div>
            </div>
            <div className="flex items-center justify-center text-center gap-2">
              <a
                href=""
                className="p-[6px]  border-[3px] rounded-[50%] border-[#E3E6F3]"
              ></a>
              <div className="flex items-center justify-center">
                <MdStarRate className="text-[rgba(243,181,25)]" />
                <MdStarRate className="text-[rgba(243,181,25)]" />
                <MdStarRate className="text-[#E3E6F3]" />
                <MdStarRate className="text-[#E3E6F3]" />
                <MdStarRate className="text-[#E3E6F3]" />
                <p className="text-sm"> & above</p>
              </div>
            </div>
            <div className="flex items-center justify-center text-center gap-2">
              <a
                href=""
                className="p-[6px]  border-[3px] rounded-[50%] border-[#E3E6F3]"
              ></a>
              <div className="flex items-center justify-center">
                <MdStarRate className="text-[rgba(243,181,25)]" />
                <MdStarRate className="text-[rgba(243,181,25)]" />
                <MdStarRate className="text-[rgba(243,181,25)]" />
                <MdStarRate className="text-[rgba(243,181,25)]" />
                <MdStarRate className="text-[rgba(243,181,25)]" />
                <p className="text-sm"> & above</p>
              </div>
            </div>
            <div className="flex items-center justify-center text-center gap-2">
              <a
                href=""
                className="p-[6px]  border-[3px] rounded-[50%] border-[#E3E6F3]"
              ></a>
              <div className="flex items-center justify-center">
                <MdStarRate className="text-[rgba(243,181,25)]" />
                <MdStarRate className="text-[rgba(243,181,25)]" />
                <MdStarRate className="text-[rgba(243,181,25)]" />
                <MdStarRate className="text-[#E3E6F3]" />
                <MdStarRate className="text-[#E3E6F3]" />
                <p className="text-sm"> & above</p>
              </div>
            </div>
            <div className="flex items-center justify-center text-center gap-2">
              <a
                href=""
                className="p-[6px]  border-[3px] rounded-[50%] border-[#E3E6F3]] "
              ></a>
              <div className="flex items-center justify-center">
                <MdStarRate className="text-[rgba(243,181,25)]" />
                <MdStarRate className="text-[rgba(243,181,25)]" />
                <MdStarRate className="text-[rgba(243,181,25)]" />
                <MdStarRate className="text-[rgba(243,181,25)]" />
                <MdStarRate className="text-[#E3E6F3]" />
                <p className="text-sm"> & above</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-sm font-bold pt-4">GENDER</h1>

            <div className="flex items-center justify-center gap-2">
              <a href="" className="p-[5px]  border-[3px] border-[#E3E6F3]"></a>
              <h2 className="text-[13px]">Unisex</h2>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-sm font-bold pt-4">SCORE SELLER</h1>

            <div className="flex items-center justify-center gap-2">
              <a
                href=""
                className="p-[6px]  border-[3px] rounded-[50%] border-[#E3E6F3] "
              ></a>
              <h2 className="text-[13px]">80% or more</h2>
            </div>
            <div className="flex items-center justify-center gap-2">
              <a
                href=""
                className="p-[6px]  border-[3px] rounded-[50%] border-[#E3E6F3] "
              ></a>
              <h2 className="text-[13px]">60% or more</h2>
            </div>
            <div className="flex items-center justify-center gap-2">
              <a
                href=""
                className="p-[6px]  border-[3px] rounded-[50%] border-[#E3E6F3] "
              ></a>
              <h2 className="text-[13px]">40% or more</h2>
            </div>
            <div className="flex items-center justify-center gap-2">
              <a
                href=""
                className="p-[6px]  border-[3px] rounded-[50%] border-[#E3E6F3] "
              ></a>
              <h2 className="text-[13px]">20% or more</h2>
            </div>
          </div>
        </div>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center justify-center">
          {products.length ? (
            products.map((product, index) => {
              return (
                <div className="w-full h-full flex items-center justify-center">
                  <Products key={index} product={product} />
                  {/* props product= */}
                </div>
              );
            })
          ) : (
            <p>loading....</p>
          )}
        </div>
      </div>
    </div>
  );
};
