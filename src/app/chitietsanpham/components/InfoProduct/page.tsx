import React from "react";
import { Product } from "../../api/product"; // Import interface Product
import AddCart from "../AddCart/page";
import TabDetailProduct from "../../components/TabDetailProduct/page.jsx";

interface InfoProductProps {
  product: Product;
}
// const product = {
//   id: "Ch-256xl",
//   name: "Modern Smart Phone",
//   price: 20.9,
//   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//   tags: "Smart Device, Phone",
//   image: [
//     "https://via.placeholder.com/570x675",
//     "https://via.placeholder.com/127x127",
//     "https://via.placeholder.com/127x127",
//     "https://via.placeholder.com/127x127",
//   ],
//   reviews: 5,
//   category: "Smartphones",
// };

const InforProduct: React.FC<InfoProductProps> = ({ product }) => {
  return (
    <div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full md:w-1/2 p-4">
          <img
            src={
              "https://via.placeholder.com/570x675"
            }
            className="w-full h-auto rounded-[10px]"
            alt="Product image"
          />

          <div className="flex justify-center space-x-2 mt-4">
            {product?.image && Array.isArray(product?.image) // Kiểm tra nếu có hình ảnh phụ
              ? product?.image.slice(0).map((image, index) => (
                  <img
                    key={index}
                    src="https://via.placeholder.com/127x127" // Ảnh phụ
                    className="w-1/4 h-auto cursor-pointer rounded-[10px]"
                  />
                ))
              : null}
          </div>
        </div>

        {/* Cột thông tin sản phẩm */}
        <div className="w-full md:w-1/2 p-4 mb-4">
          <h1 className="text-[36px] text-black capitalize leading-none font-normal mb-5">
            {product.name || "Tên sản phẩm"}
          </h1>
          <p className="text-[36px] text-black leading-[30px] font-semibold">
            {/* Hiển thị giá bán hoặc giá khuyến mãi nếu có */}
            {product.sale && product.originalPrice
              ? `$${product.sale}` // Giá sale
              : `$${product.price}`}{" "}
            {/* Giá thông thường nếu không có sale */}
            {product.sale && product.originalPrice && (
              <span className="line-through text-red-500 ml-2">
                ${product.originalPrice} {/* Giá gốc nếu có */}
              </span>
            )}
          </p>
          <div className="flex items-center mt-2 mb-4">
            <span className="text-yellow-500">
              {"★".repeat(product.rating || 0)}☆ {/* Xếp hạng sản phẩm */}
            </span>
            <span className="ml-2 text-gray-500 text-[18px]">
              ({product.reviews || 0} Customer Reviews){" "}
              {/* Số lượng đánh giá */}
            </span>
          </div>
          <hr />
          <p className="text-[#181818] text-[16px] leading-[30px] mb-[20px] text-justify mt-4">
            {product.description || "Mô tả sản phẩm hiện không có sẵn."}{" "}
            {/* Mô tả sản phẩm */}
          </p>
          <div className="mt-4 text-[16px]">
            <span className="font-semibold text-[#266bf9]">SKU:</span>
            <span> {product.id || "Không xác định"}</span> {/* Mã SKU */}
          </div>
          <div className="mt-2 text-[16px]">
            <span className="font-semibold text-[#266bf9]">Categories:</span>
            <span> {product.category || "Đang cập nhật"}</span>{" "}
            {/* Danh mục, nếu không có thì hiển thị "Đang cập nhật" */}
          </div>
          <div className="mt-2 mb-4 text-[16px]">
            <span className="font-semibold text-[#266bf9]">Tags:</span>
            <span>
              {" "}
              {product.tags?.length ? product.tags : "Đang cập nhật"}
            </span>{" "}
            {/* Hiển thị tags hoặc "Đang cập nhật" */}
          </div>

          <AddCart key={product.id} product={product} />

          <TabDetailProduct />
        </div>
      </div>
    </div>
  );
};

export default InforProduct;
