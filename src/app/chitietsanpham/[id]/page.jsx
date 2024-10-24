import React from "react";
import "../../globals.css";
import RelatedProduct from "../components/RelatedProduct/page";
import BannerDetailProduct from "../components/BannerDetailProduct/page";
import InfoProduct from "../components/InfoProduct/page";
export default function ProductDetail() {
  return (
    <div>
      <BannerDetailProduct></BannerDetailProduct>
      <div className="container mx-auto max-w-[1170px] px-4 py-10">
        <InfoProduct></InfoProduct>
        <div className="mt-10 ">
          <h2 className="text-[48px] text-center font-semibold mb-5 ">
            Related Products
          </h2>
          <p className="text-[18px] text-center text-gray-500 mb-7">
            There are many variations of passages of Lorem Ipsum available
          </p>
          <RelatedProduct></RelatedProduct>
        </div>
      </div>
    </div>
  );
}
