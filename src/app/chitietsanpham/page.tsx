"use client";

import React, { useEffect, useState } from "react";
import TabDetailProduct from "./components/TabDetailProduct/page";
import BannerDetailProduct from "./components/BannerDetailProduct/page";
import AddCart from "./components/AddCart/page";
import RelatedProduct from "./components/RelatedProduct/page";
import { getProductDetailApi } from "./api/productDetail.api";


const ProductDetail = () => {
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const  id  = 5;
  const productId = Number(id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductDetailApi(productId);
        if (product) {
          setProduct(product);
          setError(null);
        }
      } catch (error) {
        console.error("Failed to fetch product details:", error);
        setError("Không thể lấy thông tin sản phẩm");
      }
    };

    fetchProduct();
  }, [productId]);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-xl">Đang tải thông tin sản phẩm...</p>
      </div>
    );
  }

  const { name, price, sale, originalPrice, rating, reviews, short_description, category, type } = product?.data;

  return (
    <div>
      <BannerDetailProduct />
      <div className="container mx-auto max-w-[1170px] px-4 py-10">
        <div className="flex flex-wrap mt-4">
          {/* Cột ảnh sản phẩm */}
          <div className="w-full md:w-1/2 p-4">
            <img
              src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/product-image/zoom-image/1.webp"
              className="w-full h-auto rounded-[10px]"
              alt="Product image"
            />
          </div>

          {/* Cột thông tin sản phẩm */}
          <div className="w-full md:w-1/2 p-4 mb-4">
            <h1 className="text-[36px] text-black capitalize leading-none font-normal mb-5">{name}</h1>
            <p className="text-[36px] text-black leading-[30px] font-semibold">
              {price}
              {sale && <span className="line-through text-red-500 ml-2">{originalPrice}</span>}
            </p>
            <div className="flex items-center mt-2 mb-4">
              <span className="text-yellow-500">
                {"★".repeat(rating || 0)}☆
              </span>
              <span className="ml-2 text-gray-500 text-[18px]">
                ({reviews || 0} Customer Reviews)
              </span>
            </div>
            <hr />
            <p className="text-[#181818] text-[16px] leading-[30px] mb-[20px] text-justify mt-4">
              {short_description}
            </p>
            <div className="mt-4 text-[16px]">
              <span className="font-semibold text-[#266bf9]">SKU:</span>
              <span>{productId || "Không xác định"}</span>
            </div>
            <div className="mt-2 text-[16px]">
              <span className="font-semibold text-[#266bf9]">Categories:</span>
              <span>{category?.name || "Đang cập nhật"}</span>
            </div>
            <div className="mt-2 mb-4 text-[16px]">
              <span className="font-semibold text-[#266bf9]">Tags:</span>
              <span>{type}</span>
            </div>

            <AddCart key={productId} product={product} />

            <TabDetailProduct />
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-[48px] text-center font-semibold mb-5">Related Products</h2>
          <p className="text-[18px] text-center text-gray-500 mb-7">
            There are many variations of passages of Lorem Ipsum available
          </p>
          <RelatedProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
