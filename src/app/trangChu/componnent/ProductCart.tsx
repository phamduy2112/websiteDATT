"use client";
import React, { useState, useEffect } from "react";
import { FaHeart, FaEye, FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import ProductItem from "@/app/components/ProductItem/ProductItem";
import { Product } from "../api/product";
import { getProductApi } from "../api/product.api";
import { log } from "console";
import axios from "axios";
import { useRecoilState } from "recoil";
import { productAtom } from "../../../atoms/productAtom";

const ProductCard = () => {
  // const products = [
  //   {
  //     id: "Ch-256xl",
  //     name: "Modern Smart Phone",
  //     price: 20.9,
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  //     tags: "Smart Device, Phone",
  //     images: ["https://via.placeholder.com/270x274"],
  //     reviews: 5,
  //     category: "Smartphones",
  //     sale: "Sale 10%",
  //     status: "Sale",
  //   },
  //   {
  //     id: "Ch-357zx",
  //     name: "Wireless Earbuds",
  //     price: 15.5,
  //     description:
  //       "Experience the freedom of wireless sound with these premium earbuds.",
  //     tags: "Audio, Earbuds",
  //     images: ["https://via.placeholder.com/270x274"],
  //     reviews: 4,
  //     category: "Accessories",
  //     sale: "Sale 15%",
  //     status: "Sale",
  //   },
  //   {
  //     id: "Ch-458yt",
  //     name: "4K LED TV",
  //     price: 450.0,
  //     description: "Enjoy stunning visuals with our 4K Ultra HD LED TV.",
  //     tags: "Electronics, TV",
  //     images: ["https://via.placeholder.com/270x274"],
  //     reviews: 10,
  //     category: "Home Appliances",
  //     sale: "Sale 20%",
  //     status: "Sale",
  //   },
  //   {
  //     id: "Ch-679sd",
  //     name: "Bluetooth Speaker",
  //     price: 35.0,
  //     description:
  //       "Portable Bluetooth speaker with clear sound and long battery life.",
  //     tags: "Audio, Speaker",
  //     images: ["https://via.placeholder.com/270x274"],
  //     reviews: 8,
  //     category: "Accessories",
  //     sale: "Sale 5%",
  //     status: "Sale",
  //   },
  //   {
  //     id: "Ch-789rw",
  //     name: "Smart Watch",
  //     price: 99.0,
  //     description:
  //       "Track your health and stay connected with this stylish smartwatch.",
  //     tags: "Smart Device, Watch",
  //     images: ["https://via.placeholder.com/270x274"],
  //     reviews: 7,
  //     category: "Wearables",
  //     sale: "Sale 12%",
  //     status: "Sale",
  //   },
  //   {
  //     id: "Ch-890qw",
  //     name: "Gaming Laptop",
  //     price: 1200.0,
  //     description:
  //       "High-performance gaming laptop with powerful specs and great graphics.",
  //     tags: "Electronics, Laptop",
  //     images: ["https://via.placeholder.com/270x274"],
  //     reviews: 15,
  //     category: "Computers",
  //     sale: "Sale 10%",
  //     status: "Sale",
  //   },
  //   {
  //     id: "Ch-234as",
  //     name: "Smart Home Hub",
  //     price: 150.0,
  //     description:
  //       "Control all your smart devices from one hub with easy-to-use interface.",
  //     tags: "Smart Device, Home",
  //     images: ["https://via.placeholder.com/270x274"],
  //     reviews: 6,
  //     category: "Smart Home",
  //     sale: "Sale 8%",
  //     status: "Sale",
  //   },
  //   {
  //     id: "Ch-567kl",
  //     name: "Portable Power Bank",
  //     price: 25.0,
  //     description:
  //       "Keep your devices charged on the go with this high-capacity power bank.",
  //     tags: "Accessories, Power Bank",
  //     images: ["https://via.placeholder.com/270x274"],
  //     reviews: 4,
  //     category: "Accessories",
  //     sale: "Sale 10%",
  //     status: "Sale",
  //   },
  //   {
  //     id: "Ch-345dp",
  //     name: "Tablet with Stylus",
  //     price: 280.0,
  //     description:
  //       "A sleek tablet with a responsive stylus for precise drawing and note-taking.",
  //     tags: "Electronics, Tablet",
  //     images: ["https://via.placeholder.com/270x274"],
  //     reviews: 9,
  //     category: "Tablets",
  //     sale: "Sale 18%",
  //     status: "Sale",
  //   },
  //   {
  //     id: "Ch-678gt",
  //     name: "Noise Cancelling Headphones",
  //     price: 120.0,
  //     description:
  //       "Block out the noise and enjoy your music with these noise-canceling headphones.",
  //     tags: "Audio, Headphones",
  //     images: ["https://via.placeholder.com/270x274"],
  //     reviews: 12,
  //     category: "Audio",
  //     sale: "Sale 15%",
  //     status: "Sale",
  //   },
  // ];

  const [products, setProducts] = useRecoilState(productAtom);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await getProductApi();
        setProducts(res.data || []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Không thể tải sản phẩm. Vui lòng thử lại!");
      } finally {
        setLoading(false);
      }
    };

    if (products.length === 0) {
      fetchProducts();
    }
  }, [products.length, setProducts]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="spinner border-4 border-blue-500 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600 py-4">{error}</div>;
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-4">
        <p>Không có sản phẩm nào!</p>
      </div>
    );
  }
console.log(products);

  return (
    <div className="flex justify-center">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem]">
        {products?.data?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
