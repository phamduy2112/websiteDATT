"use client";

import React, { useEffect, useState } from "react";
import BannerDetailProduct from "../components/BannerDetailProduct/page";
import InfoProduct from "../components/InfoProduct/page";
import RelatedProduct from "../components/RelatedProduct/page";
import { getProductDetailApi } from "../api/productDetail.api";
import AddCart from "../components/AddCart/page";
import TabDetailProduct from "../components/TabDetailProduct/page";
import { log } from "console";
import { useRouter } from "next/router";

interface ProductDetailProps {
  productId: number;
}
const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
  const [product, setProduct] = useState<any>(null);
  const { id } = params;
  const productId = Number(id);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductDetailApi(productId);
        console.log(product);

        if (product) {
          setProduct(product);
        }
      } catch (error) {
        console.error("Không thể lấy thông tin sản phẩm:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-xl">Đang tải thông tin sản phẩm...</p>
      </div>
    );
  }

  return (
    <div>
      <BannerDetailProduct />
      <div className="container mx-auto max-w-[1170px] px-4 py-10">
        <div className="flex flex-wrap mt-4">
          {/* Cột ảnh sản phẩm */}
          <div className="w-full md:w-1/2 p-4">
            <img
              src={
                product?.data?.image || "https://via.placeholder.com/570x675"
              }
              className="w-full h-auto rounded-[10px]"
              alt="Product image"
            />
          </div>
          {/* <div className="flex justify-center space-x-2 mt-4">
            {product.image && Array.isArray(product.image)
              ? product.image
                  .slice(0)
                  .map((image, index) => (
                    <img
                      key={index}
                      src="https://via.placeholder.com/127x127"
                      className="w-1/4 h-auto cursor-pointer rounded-[10px]"
                    />
                  ))
              : null}
          </div> */}

          {/* Cột thông tin sản phẩm */}
          <div className="w-full md:w-1/2 p-4 mb-4">
            <h1 className="text-[36px] text-black capitalize leading-none font-normal mb-5">
              {product?.data?.name}
            </h1>
            <p className="text-[36px] text-black leading-[30px] font-semibold">
              {product?.data?.price}
              {product.sale && (
                <span className="line-through text-red-500 ml-2">
                  ${product.originalPrice}
                </span>
              )}
            </p>
            <div className="flex items-center mt-2 mb-4">
              <span className="text-yellow-500">
                {"★".repeat(product.rating || 0)}☆
              </span>
              <span className="ml-2 text-gray-500 text-[18px]">
                ({product.reviews || 0} Customer Reviews)
              </span>
            </div>
            <hr />
            <p className="text-[#181818] text-[16px] leading-[30px] mb-[20px] text-justify mt-4">
              {product?.data?.short_description}
            </p>
            <div className="mt-4 text-[16px]">
              <span className="font-semibold text-[#266bf9]">SKU:</span>
              <span> {product?.data?.id || "Không xác định"}</span>
            </div>
            <div className="mt-2 text-[16px]">
              <span className="font-semibold text-[#266bf9]">Categories:</span>
              <span> {product?.data?.category.name || "Đang cập nhật"}</span>
            </div>
            <div className="mt-2 mb-4 text-[16px]">
              <span className="font-semibold text-[#266bf9]">Tags:</span>
              <span>{product?.data?.type}</span>
            </div>

            <AddCart key={product.id} product={product} />

            <TabDetailProduct />
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-[48px] text-center font-semibold mb-5">
            Related Products
          </h2>
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
