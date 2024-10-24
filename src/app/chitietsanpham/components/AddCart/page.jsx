"use client";
import { cartState } from "../../../cart/cartState";
import Slider from "react-slick";
import { addCart } from "../../../cart/cartState";
import React, { useState } from "react";
import "../../../globals.css";
import { CiHeart } from "react-icons/ci";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { MdOutlineShoppingBag } from "react-icons/md";
import Swal from "sweetalert2";
import { IoEyeOutline } from "react-icons/io5";
import { useRecoilState } from "recoil";
const AddCart = () => {
  const product = {
    id: "Ch-256xl",
    name: "Modern Smart Phone",
    price: 20.9,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    tags: "Smart Device, Phone",
    images: [
      "https://via.placeholder.com/570x675",
      "https://via.placeholder.com/127x127",
      "https://via.placeholder.com/127x127",
      "https://via.placeholder.com/127x127",
    ],
    reviews: 5,
    category: "Smartphones",
  };

  const [cart, setCart] = useRecoilState(cartState);
  const [quantity, setQuantity] = useState(1);

  // Hàm tăng số lượng
  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Hàm giảm số lượng (không cho phép giảm dưới 1)
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = () => {
    const newCart = addCart(cart, { ...product, quantity });
    setCart(newCart); // Cập nhật giỏ hàng trong Recoil
  };
  return (
    <div>
      <div className="flex items-center">
        <div className="inline-flex items-center rounded-sm h-[40px] bg-[#454545] mr-1 p-1">
  <button
    onClick={decrement}
    className="px-3 py-1 text-[14px] rounded focus:outline-none text-white"
  >
    -
  </button>
  <span className="text-lg text-[14px] text-white mx-2">{quantity}</span>
  <button
    onClick={increment}
    className="px-3 py-1 text-[14px] rounded focus:outline-none text-white"
  >
    +
  </button>
</div>

        <button
          className="bg-blue-500 hover:bg-black w-[189px] h-[40px] text-white text-[16px] font-semibold rounded custom-small-text "
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>

        <div className="flex items-center gap-2 ml-1 text-text font-normal">
          <button
            className="bg-gray-300 rounded-sm  h-[40px] w-[40px]  flex items-center justify-center"
            style={{ backgroundColor: "#454545" }}
          >
            <CiHeart className="w-6 h-6 text-white" />
          </button>
          <button
            className="bg-gray-300 rounded-sm  h-[40px] w-[40px] flex items-center justify-center"
            style={{ backgroundColor: "#454545" }}
          >
            <HiArrowPathRoundedSquare className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
