"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      className="absolute top-[50%] left-[1rem] transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 z-10 shadow-md hover:bg-gray-900"
      onClick={onClick}
    >
  
  <FaAngleLeft />
  </button>
  );
  
  const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      className="absolute top-[50%] right-[1rem] transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 z-10 shadow-md hover:bg-gray-900"
      onClick={onClick}
    >
  <FaAngleRight />  
    </button>
  );
const FeaturedOffers = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Hiển thị mặc định 3 sản phẩm
    slidesToScroll: 2, // Cuộn 2 sản phẩm mỗi lần
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1600, // Với màn hình nhỏ hơn 1024px
        settings: {
          slidesToShow: 2, // Hiển thị 2 sản phẩm
          slidesToScroll: 1, // Cuộn 1 sản phẩm mỗi lần
        },
      },
     
      {
        breakpoint: 768, // Với màn hình nhỏ hơn 768px
        settings: {
          slidesToShow: 1, // Hiển thị 1 sản phẩm
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="container mx-auto">
      {/* Tiêu đề */}
      <h2 className="text-3xl font-bold text-center py-4">Featured Offers</h2>
      <p className="text-gray-500 text-center mb-3">
        There are many variations of passages of Lorem Ipsum available
      </p>

      {/* Slider */}
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="px-2"> {/* Mỗi sản phẩm là một slide */}
            <div className="flex border rounded-lg shadow-lg max-w-full h-[20rem]">
              {/* Image + Button */}
              <div className="relative flex-shrink-0 w-1/2 bg-[#acabab] flex justify-center items-center">
                <span className="text-2xl font-bold">270x380</span>
              </div>

              {/* Nội dung */}
              <div className="p-4 ">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm">
                    {product.timer}
                  </span>
                  <div className="text-right">
                    <span className="text-gray-400 line-through block">
                      {product.oldPrice}
                    </span>
                    <span className="text-black font-bold block">{product.newPrice}</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>
                    <b>Predecessor:</b> {product.predecessor}
                  </li>
                  <li>
                    <b>Support Type:</b> {product.supportType}
                  </li>
                  <li>
                    <b>Cushioning:</b> {product.cushioning}
                  </li>
                  <li>
                    <b>Total Weight:</b> {product.totalWeight}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedOffers;
