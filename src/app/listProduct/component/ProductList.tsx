import React, { useState, useEffect } from 'react';
import { CiHeart } from 'react-icons/ci';
import { HiArrowPathRoundedSquare } from 'react-icons/hi2';
import { IoEyeOutline } from 'react-icons/io5';
import { MdOutlineShoppingBag } from 'react-icons/md';
import axios from 'axios'; // Assuming you're using axios for API calls

function ProductList(props) {

  



  return (
    <div>
      {props.products.map((product) => (
        <div key={product.id} className="flex flex-col md:flex-row gap-4 p-4">
          {/* Product Image */}
          <div className="bg-white shadow-md rounded-md w-full md:w-[250px]">
            <img
              className="w-full h-[5rem] md:h-[100%] object-cover rounded-t-md md:rounded-md"
              src={product.image || "https://via.placeholder.com/270x274"} // Replace with actual image URL
              alt="Product image"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between w-full md:w-[40%]">
            <div>
              <h5 className="text-sm text-gray-500 font-thin">        {product.category?.name || "Category"}
</h5>
              <h2 className="text-gray-900 font-bold text-lg md:text-xl">{product.name}</h2>
              <p className="text-gray-700 text-sm md:text-base mt-2">{product.description}</p>
            </div>

            <div>
              <p className="text-gray-900 font-bold py-3 md:py-5">${product.price}</p>
              <div className="flex gap-2">
                <button className="text-white bg-[#454545] hover:bg-blue-500 rounded-md p-2">
                  <MdOutlineShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button className="text-white bg-[#454545] hover:bg-blue-500 rounded-md p-2">
                  <CiHeart className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button className="text-white bg-[#454545] hover:bg-blue-500 rounded-md p-2">
                  <IoEyeOutline className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button className="text-white bg-[#454545] hover:bg-blue-500 rounded-md p-2">
                  <HiArrowPathRoundedSquare className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>

            {/* Render Comments for Product */}
          
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
