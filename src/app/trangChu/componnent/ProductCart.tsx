import React from 'react';
import { FaHeart, FaEye, FaShoppingCart, FaPhoneAlt } from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import ProductItem from '@/app/components/ProductItem/ProductItem';

const ProductCard = () => {
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/270x274",
      name: "Modern Smart Phone",
      price: "$38.50",
      sale: "Sale 10%",
      status: "New",
      category: "Accessories",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/270x274",
      name: "Bluetooth Headphone",
      price: "$38.50",
      sale: "Sale 10%",
      status: "Sale",
      category: "Accessories",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/270x274",
      name: "Smart Music Box",
      price: "$38.50",
      sale: "Sale",
      status: "New",
      category: "Accessories",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/270x274",
      name: "Air Pods 256K Black",
      price: "$38.50",
      sale: "Sale",
      status: "New",
      category: "Accessories",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/270x274",
      name: "Air Pods 256K Black",
      price: "$38.50",
      sale: "Sale",
      status: "New",
      category: "Accessories",
    },
    {
      id: 1,
      image: "https://via.placeholder.com/270x274",
      name: "Modern Smart Phone",
      price: "$38.50",
      sale: "Sale 10%",
      status: "New",
      category: "Accessories",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/270x274",
      name: "Bluetooth Headphone",
      price: "$38.50",
      sale: "Sale 10%",
      status: "Sale",
      category: "Accessories",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/270x274",
      name: "Smart Music Box",
      price: "$38.50",
      sale: "Sale",
      status: "New",
      category: "Accessories",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/270x274",
      name: "Air Pods 256K Black",
      price: "$38.50",
      sale: "Sale",
      status: "New",
      category: "Accessories",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/270x274",
      name: "Air Pods 256K Black",
      price: "$38.50",
      sale: "Sale",
      status: "New",
      category: "Accessories",
    },
  ];
  return (
    <div className='grid grid-cols-5 gap-[1rem]'>
 
  {products.map((product) => (
   <ProductItem product={product} key={product.id}/>
  ))}

    </div>
  );
};

export default ProductCard;
