"use client";
import React from "react";
import "../../../globals.css";
import Link from "next/link";

const BannerDetailProduct = () => {
  return (
    <div>
      <div className="breadcrumb-area relative h-[406px] md:h-[300px] sm:h-[260px]">
        <img
          src="https://via.placeholder.com/1920x406"
          alt="Single Product"
          className="w-full h-full object-cover rounded-[10px]"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-[60px] font-medium text-black">Single Product</h1>
          <p className="text-lg text-black">
            <Link href="/" className="hover:text-[#266bf9]">
              HOME
            </Link>{" "}
            <a className="text-[#266bf9]">// PRODUCT</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerDetailProduct;
