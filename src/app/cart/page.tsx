"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/cart.css";
import { faClose, faPen } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cartState } from "./cartState";
import Link from "next/link";
import { useState } from "react";
import { CartItem } from "../cart/cartItem";
import classNames from "classnames/bind";
import { shippingState } from "./shippingState";
import Swal from "sweetalert2";

interface cart {
  CartItem: CartItem[];
}

const Cart: React.FC<cart> = () => {
  const [selectedShipping, setSelectedShipping] = useState<string | null>(null);
  const [cart, setCart] = useRecoilState(cartState);

  const handleIncrement = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const handleRemove = (id) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa sản phẩm này?",
      text: "Sản phẩm sẽ bị xóa khỏi giỏ hàng!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
        Swal.fire("Đã xóa!", "Sản phẩm đã được xóa khỏi giỏ hàng.", "success");
      }
    });
  };

  const calculateProductTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };
  const handleClearCart = () => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa tất cả sản phẩm trong giỏ hàng?",
      text: "Tất cả sản phẩm sẽ bị xóa!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Xóa tất cả",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
        Swal.fire("Giỏ hàng đã được xóa!", "", "success");
      }
    });
  };
  const setShipping = useSetRecoilState(shippingState);
  const handleShippingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    setSelectedShipping(selectedValue);

    // Cập nhật giá trị giao hàng vào Recoil
    if (selectedValue === "standard") {
      setShipping(20);
    } else if (selectedValue === "express") {
      setShipping(30);
    } else {
      setShipping(0);
    }
  };
  const shipping = useRecoilValue(shippingState);

  const calculateGrandTotal = () => {
    const productTotal = parseFloat(calculateProductTotal());
    return (productTotal + shipping).toFixed(2);
  };

  // Xử lý khi người dùng nhấn nút Proceed to Checkout
  const handleCheckout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!selectedShipping) {
      e.preventDefault(); // Ngăn việc chuyển trang
      Swal.fire({
        icon: "warning",
        title: "Vui lòng chọn phương thức giao hàng",
        text: "Bạn cần chọn một trong hai phương thức giao hàng trước khi tiếp tục.",
        confirmButtonText: "OK",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div>
      <div className="breadcrumb-area relative h-[406px] md:h-[300px] sm:h-[260px]">
        <img
          src="https://via.placeholder.com/1920x406"
          alt="Single Product"
          className="w-full h-full object-cover rounded-[10px]"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-[60px] font-medium text-black">Cart</h1>
          <p className="text-lg text-white">
            <Link href="/" className="hover:text-[#266bf9]">
              HOME
            </Link>{" "}
            <a className="text-[#266bf9]">// CART</a>
          </p>
        </div>
      </div>

      <div className="w-[80%] mx-auto py-4">
        <h1 className="text-[24px] font-semibold py-3">Your cart items</h1>
        <table className="w-[100%] table-cart">
          <thead className="w-[100%] bg-[#ebebeb] text-black h-[76px] text-center">
            <tr className=" text-[16px]">
              <th>IMAGE</th>
              <th>PRODUCT NAME</th>
              <th className="text-left">UNTIL PRICE</th>
              <th className="text-left">QTY</th>
              <th>SUBTOTAL</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item) => (
              <tr key={item.id}>
                <td className="product-thumbnail w-[150px] ">
                  <a href="#">
                    <img
                      className="p-[1rem] max-w-[100%] ml-15px"
                      src={item.images}
                    />
                  </a>
                </td>
                <td className="product-name">
                  <a href="#" className="text-[#3A3A3A] text-[16px]">
                    {item.name}
                  </a>
                </td>
                <td className="product-price-cart">
                  <span className="amount text-[#3A3A3A] text-[16px]">
                    ${item.price.toFixed(2)}
                  </span>
                </td>
                <td className="product-quantity flex justify-center items-center h-[150px]">
                  <div className="text-[1rem] border border-l-[#ebebeb] flex items-center w-[5.5rem] justify-between">
                    <div
                      className="border  text-[1rem] px-1 border-l-[#ebebeb] py-1 cursor-pointer"
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </div>
                    <input
                      type="text"
                      value={item.quantity}
                      className="text-center focus:outline-none bg-transparent w-[100%] px-[.8rem]  text-[#3A3A3A] text-[16px]"
                      min={1}
                      max={100}
                    />
                    <div
                      className="border text-[1rem] px-1 border-l-[#ebebeb] py-1 cursor-pointer"
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </div>
                  </div>
                </td>
                <td className="product-subtotal text-[#3A3A3A] text-[16px]">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="product-remove cursor-pointer ">
                  <FontAwesomeIcon
                    icon={faPen}
                    className="w-3 h-3 m-auto mr-4"
                  />
                  <FontAwesomeIcon
                    icon={faClose}
                    className="w-4 h-4 m-auto"
                    onClick={() => handleRemove(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-wrap justify-between py-[1rem] mt-4 mb-8">
          <button className="py-[0.8rem] px-[3rem] bg-[#ebebeb] text-[#000000] font-semibold text-[14px] flex justify-center h-[49px] items-center transition-all hover:bg-[#266bf9] hover:text-white w-full mb-[0.5rem] sm:w-auto">
            CONTINUE SHOPPING
          </button>
          <div className="flex gap-[1rem] w-full  sm:w-auto flex-wrap">
            <button className="py-[0.8rem] px-[3rem] bg-[#ebebeb] text-[#000000] font-semibold text-[14px] flex justify-center h-[49px] items-center transition-all hover:bg-[#266bf9] hover:text-white w-full mb-[0.5rem] sm:w-auto">
              UPDATE SHOPPING CART
            </button>
            <button
              onClick={handleClearCart}
              className="py-[0.8rem] px-[3rem] bg-[#266bf9] text-white font-semibold text-[14px] flex justify-center items-center h-[49px] transition-all hover:bg-[#000000] hover:text-white mb-[0.5rem] ml-[10px]  w-full sm:w-auto"
            >
              CLEAR SHOPPING CART
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-between py-[2rem] mt-4 mb-8">
          <div className="cart-tax w-full sm:w-[30%] shadow-sm bg-[#ebebeb] px-[2rem] py-[2rem] text-black mb-[1rem] sm:mb-0">
            <div className="title-wrap">
              <h4 className="font-semibold mb-[1rem] text-[18px]">
                Estimate Shipping And Tax
              </h4>
            </div>
            <div className="tax-wrapper">
              <p className="mb-[.8rem] text-[16px] text-gray-400">
                Enter your destination to get a shipping estimate.
              </p>
              <div className="tax-select-wrapper">
                <div className="tax-select pb-[.5rem]">
                  <label className="block mb-[.5rem] text-[16px]">
                    * Country
                  </label>
                  <select className="w-[100%] border border-black py-[.4rem] px-3 text-[16px]">
                    <option>Bangladesh</option>
                    <option>Albania</option>
                    <option>Åland Islands</option>
                    <option>Afghanistan</option>
                    <option>Belgium</option>
                  </select>
                </div>
                <div className="tax-select text-[16px]">
                  <label className="block mt-[.5rem] mb-[.5rem]">
                    * Region / State
                  </label>
                  <select className="w-[100%] border border-black py-[.4rem] px-3">
                    <option>Bangladesh</option>
                    <option>Albania</option>
                    <option>Åland Islands</option>
                    <option>Afghanistan</option>
                    <option>Belgium</option>
                  </select>
                </div>
                <div className="tax-select mb-25px text-[16px]">
                  <label className="block mt-[.5rem] mb-[.5rem]">
                    * Zip/Postal Code
                  </label>
                  <input
                    type="text"
                    className="w-[100%] border border-black py-[.3rem] px-3"
                  />
                </div>
                <button
                  className="cart-btn-2 mt-[1rem] hover hover:bg-[#000000] w-full text-center block "
                  type="submit"
                >
                  Get A Quote
                </button>
              </div>
            </div>
          </div>
          <div className="cart-tax w-full sm:w-[30%] bg-[#ebebeb] shadow-sm h-[100%] px-[2rem] py-[2rem] text-black mb-[1rem] sm:mb-0">
            <div className="discount-code-wrapper">
              <div className="title-wrap">
                <h4 className="font-semibold mb-[1rem] text-[18px]">
                  Use Coupon Code
                </h4>
              </div>
              <div className="discount-code text-[16px]">
                <p className="mb-[.8rem] text-[16px] text-gray-400">
                  Enter your coupon code if you have one.
                </p>
                <form>
                  <input
                    type="text"
                    className="w-[100%] border border-black py-[.3rem] px-3"
                  />
                  <button
                    className="cart-btn-2 mt-[1rem] hover hover:bg-[#000000]  w-full text-center block "
                    type="submit"
                  >
                    Apply Coupon
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="cart-tax w-full sm:w-[30%] bg-[#ebebeb] shadow-sm h-[100%] px-[2rem] py-[2rem] text-black">
            <div className="title-wrap">
              <h4 className="font-semibold text-[18px]">Cart Total</h4>
            </div>
            <h5 className="flex py-[1rem] justify-between text-[16px]">
              Total products{" "}
              <span className="font-semibold">${calculateProductTotal()}</span>
            </h5>
            <div className="total-shipping text-[16px]">
              <h5>Total shipping</h5>
              <ul>
                <li className="flex justify-between">
                  <div>
                    <input
                      type="radio"
                      name="shipping"
                      value="standard"
                      onChange={handleShippingChange}
                    />{" "}
                    Standard
                  </div>
                  <span className="text-gray-500">$20.00</span>
                </li>
                <li className="flex justify-between">
                  <div>
                    <input
                      type="radio"
                      name="shipping"
                      value="express"
                      onChange={handleShippingChange}
                    />{" "}
                    Express
                  </div>
                  <span className="text-gray-500">$30.00</span>
                </li>
              </ul>
            </div>
            <h4 className="grand-totall-title flex justify-between text-[1.1rem] py-[2rem] font-semibold text-[#266bf9]">
              Grand Total{" "}
              <span>${parseFloat(calculateGrandTotal()).toFixed(2)}</span>
            </h4>
            <Link
              href="/checkout"
              className="block font-semibold text-center bg-[#266bf9] hover hover:bg-[#000000] text-white py-2 text-[14px]"
              onClick={handleCheckout}
            >
              PROCEED TO CHECKOUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;