"use client";
import React from "react";
import "../../../globals.css";
import TabDetailProduct from "../TabDetailProduct/page";
import AddCart from "../../components/AddCart/page";
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
const InforProduct = () => {
    return (
        <div>
    <div className="flex flex-wrap mt-4">
          <div className="w-full md:w-1/2 p-4">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-auto rounded-[10px]"
            />
            <div className="flex justify-center space-x-2 mt-4">
              {product.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${index + 1}`}
                  className="w-1/4 h-auto cursor-pointer rounded-[10px]"
                />
              ))}
            </div>
          </div>
          {/* Chi tiết sản phẩm */}
          <div className="w-full md:w-1/2 p-4 mb-4">
            <h1 className="text-[36px] text-black capitalize leading-none font-normal mb-5">
              {product.name}
            </h1>
            <p className="text-[36px] text-black leading-[30px] font-semibold">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex items-center mt-2 mb-4">
              <span className="text-yellow-500">{"★".repeat(4)}☆</span>
              <span className="ml-2 text-gray-500 text-[18px]">
                ({product.reviews} Customer Reviews)
              </span>
            </div>
            <hr />
            <p className="text-[#181818] text-[16px] leading-[30px] mb-[20px] text-justify mt-4">
              {product.description}
            </p>
            <div className="mt-4 text-[16px]">
              <span className="font-semibold text-[#266bf9]">SKU:</span>
              <span> {product.id}</span>
            </div>
            <div className="mt-2 text-[16px]">
              <span className="font-semibold text-[#266bf9]">Categories:</span>
              <span> {product.category}</span>
            </div>
            <div className="mt-2 mb-4 text-[16px]">
              <span className="font-semibold text-[#266bf9]">Tags:</span>
              <span> {product.tags}</span>
            </div>
            <AddCart></AddCart>
            <TabDetailProduct></TabDetailProduct>
          </div>
        </div>
        </div>
    );

};

export default InforProduct;
