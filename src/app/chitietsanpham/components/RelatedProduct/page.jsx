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
const RelatedProduct = () => {
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/270x274",
      name: "Modern Smart Phone",
      price: "$38.50",
      sale: "Sale 10%",
      status: "New",
      category: "Accessories",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/270x274",
      name: "Bluetooth Headphone",
      price: "$38.50",
      sale: "Sale 10%",
      status: "Sale",
      category: "Accessories",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/270x274",
      name: "Smart Music Box",
      price: "$38.50",
      sale: "Sale",
      status: "New",
      category: "Accessories",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/270x274",
      name: "Air Pods 256K Black",
      price: "$38.50",
      sale: "Sale",
      status: "New",
      category: "Accessories",
    },
  ];
  // Dữ liệu sản phẩm có sẵn
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
  const handleAddToWishlist = () => {
    Swal.fire({
      title: "Added to Wishlist successfully!",
      text: "",
      showConfirmButton: false,
      backdrop: "rgba(0,0,0,0.8)", // Nền tối phía sau
      html: `
        <div style="position: relative; text-align: center;">
      <img src="${product.images[0]}" alt="${product.name}" style="width: 150px; height: auto; display: block; margin: 0 auto;" />
          <h2 style="font-size:16px">${product.name}</h2>
        </div>
      `,
      onOpen: () => {
        // Thêm sự kiện cho nút đóng
        const closeButton = document.querySelector(".swal2-close");
        closeButton.addEventListener("click", () => {
          Swal.close();
        });
      },
    });
  };
  const handleAddToCompare = () => {
    Swal.fire({
      title: "Added to Compare successfully!",
      text: "", // Có thể thêm mô tả nếu cần
      showConfirmButton: false,
      backdrop: "rgba(0,0,0,0.8)", // Nền tối phía sau
      html: `
        <div style="position: relative; text-align: center;">
               <img src="${product.images[0]}" alt="${product.name}" style="width: 150px; height: auto; display: block; margin: 0 auto;" />
          <h2 style="font-size:16px">${product.name}</h2>
        </div>
      `,
      onOpen: () => {
        const closeButton = document.querySelector(".swal2-close");
        if (closeButton) {
          closeButton.addEventListener("click", () => {
            Swal.close();
          });
        }
      },
    });
  };
  const handleAddToCart = () => {
    Swal.fire({
      title: "Added to Cart successfully!",
      text: "", // Có thể thêm mô tả nếu cần
      showConfirmButton: false,
      backdrop: "rgba(0,0,0,0.8)", // Nền tối phía sau
      html: `
        <div style="position: relative; text-align: center;">
               <img src="${product.images[0]}" alt="${product.name}" style="width: 150px; height: auto; display: block; margin: 0 auto;" />
          <h2 style="font-size:16px">${product.name}</h2>
        </div>
      `,
      onOpen: () => {
        const closeButton = document.querySelector(".swal2-close");
        if (closeButton) {
          closeButton.addEventListener("click", () => {
            Swal.close();
          });
        }
      },
    });
    addToCart({ item: product, quantity });
  };
  const [cart, setCart] = useRecoilState(cartState);
  const [quantity, setQuantity] = useState(1);
  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = () => {
    const newCart = addCart(cart, { ...product, quantity });
    setCart(newCart);
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
     <Slider {...settings} className="ml-4">
  {products.map((product) => (
    <div
      className="border p-1 relative group transition-all duration-500 w-[270px] h-[382px] hover:h-[450px]"
      key={product.id}
    >
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto mb-2"
        />
      ) : (
        <div className="w-full h-[273px] bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-sm">No Image Available</span>
        </div>
      )}

      <div className="absolute top-2 left-2 flex space-x-2">
        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
          Sale 10%
        </span>
        <span className="bg-black text-white text-xs px-2 py-1 rounded">
          New
        </span>
      </div>

      <h5 className="text-[14px] text-gray-500 font-thin text-center">
        Accessories
      </h5>
      <h3 className="text-[16px] font-normal text-center">{product.name}</h3>
      <p className="text-gray-700 text-center text-[18px]">
        <del className="font-light">{product.price}</del> - {product.price}
      </p>

      <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button
          className="text-white bg-[#454545] hover:bg-blue-500 rounded-sm p-2 mx-1"
          onClick={handleAddToCart}
        >
          <MdOutlineShoppingBag className="w-6 h-6" />
        </button>
        <button
          className="text-white bg-[#454545] hover:bg-blue-500 rounded-sm p-2 mx-1"
          onClick={handleAddToWishlist}
        >
          <CiHeart className="w-6 h-6" />
        </button>
        <button className="text-white bg-[#454545] hover:bg-blue-500 rounded-sm p-2 mx-1">
          <IoEyeOutline className="w-6 h-6" />
        </button>
        <button
          className="text-white bg-[#454545] hover:bg-blue-500 rounded-sm p-2 mx-1"
          onClick={handleAddToCompare}
        >
          <HiArrowPathRoundedSquare className="w-6 h-6" />
        </button>
      </div>
    </div>
  ))}
</Slider>

    </div>
  );
};


export default RelatedProduct;
