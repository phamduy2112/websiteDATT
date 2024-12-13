"use client";

import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Product } from "./product";
import { useRecoilState } from "recoil";
import { addCart } from "../../cart/cartState";
import { cartState } from "../../cart/cartState";
import Swal from "sweetalert2";

export interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const [cart, setCart] = useRecoilState(cartState);
  const price = product.price && !isNaN(product.price) ? product.price : 0;
  const addToCart = (product: Product) => {
    const newCart = addCart(cart, { ...product, quantity: 1, price }); // Giả sử quantity mặc định là 1
    setCart(newCart);
    Swal.fire({
      icon: "success",
      title: "Thêm vào giỏ hàng thành công!",
      text: `${product.name} đã được thêm vào giỏ hàng`,
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="border p-1 relative group transition-all duration-500 w-[270px] h-[360px] hover:h-[410px]">
      <Link href={`/chitietsanpham/${product.id}`} className="w-full h-full">
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
      </Link>
      <div className="absolute top-1 left-2 flex space-x-2">
        {product.sale && (
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
            {product.sale}
          </span>
        )}
        {product.status && (
          <span className="bg-black text-white text-xs px-2 py-1 rounded">
            {product.status}
          </span>
        )}
      </div>

      <h5 className="text-[14px] text-gray-500 font-thin text-center">
        {product.category?.name || "Category"}
      </h5>
      <h3 className="text-[16px] font-normal text-center">{product.name}</h3>
      <p className="text-gray-700 text-center text-[18px]">
        {product.originalPrice && (
          <del className="font-light">{product.originalPrice}</del>
        )}

        {product.price}
      </p>

      <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button className="text-white bg-[#454545] hover:bg-blue-500 rounded-sm p-1 mx-1">
          <MdOutlineShoppingBag
            className="w-6 h-6"
            onClick={() => addToCart(product)}
          />
        </button>
        <button className="text-white bg-[#454545] hover:bg-blue-500 rounded-sm p-1 mx-1">
          <CiHeart className="w-6 h-6" />
        </button>
        <button className="text-white bg-[#454545] hover:bg-blue-500 rounded-sm p-1 mx-1">
          <IoEyeOutline className="w-6 h-6" />
        </button>
        <button className="text-white bg-[#454545] hover:bg-blue-500 rounded-sm p-1 mx-1">
          <HiArrowPathRoundedSquare className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
