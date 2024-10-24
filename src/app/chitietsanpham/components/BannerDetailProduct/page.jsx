"use client";
import React from "react";
import "../../../globals.css";
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
const BannerDetailProduct = () => {
    return (
        <div>
<div className="breadcrumb-area relative h-[406px] md:h-[300px] sm:h-[260px]">
        <img
          src={product.images[0]}
          alt="Single Product"
          className="w-full h-full object-cover rounded-[10px]"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-3xl font-bold text-white">Single Product</h1>
          <p className="text-lg text-white">Home / Product</p>
        </div>
      </div>
        </div>
    );

};

export default BannerDetailProduct;
