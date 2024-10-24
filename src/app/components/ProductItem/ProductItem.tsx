'use client'

import Link from 'next/link'
import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { HiArrowPathRoundedSquare } from 'react-icons/hi2'
import { IoEyeOutline } from 'react-icons/io5'
import { MdOutlineShoppingBag } from 'react-icons/md'

function ProductItem(props) {
   return   <Link href={`/chitietsanpham/${props.product.id}`}
   className="border p-1 relative group transition-all duration-500 w-[270px] h-[360px] hover:h-[410px]"

 >
   {props.product.image ? (
     <img
       src={props.product.image}
       alt={props.product.name}
       className="w-full h-auto mb-2"
     />
   ) : (
     <div className="w-full h-[273px] bg-gray-200 flex items-center justify-center">
       <span className="text-gray-500 text-sm">No Image Available</span>
     </div>
   )}

   <div className="absolute top-1 left-2 flex space-x-2">
     <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
       Sale 10%
     </span>
     <span className="bg-black text-white text-xs px-2 py-1 rounded">
       New
     </span>
   </div>

   <h5 className="text-[14px] text-gray-500 font-thin text-center">
     Accessories
   </h5>
   <h3 className="text-[16px] font-normal text-center">{props.product.name}</h3>
   <p className="text-gray-700 text-center text-[18px]">
     <del className="font-light">{props.product.price}</del> - {props.product.price}
   </p>

   <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-4 left-1/2 transform -translate-x-1/2">
     <button
       className="text-white bg-[#454545] hover:bg-blue-500 rounded-sm p-1 mx-1"
      
     >
       <MdOutlineShoppingBag className="w-6 h-6" />
     </button>
     <button
       className="text-white bg-[#454545] hover:bg-blue-500 rounded-sm p-1 mx-1"
    
     >
       <CiHeart className="w-6 h-6" />
     </button>
     <button className="text-white bg-[#454545] hover:bg-blue-500 rounded-sm p-1 mx-1">
       <IoEyeOutline className="w-6 h-6" />
     </button>
     <button
       className="text-white bg-[#454545] hover:bg-blue-500 rounded-sm p-1 mx-1"
    
     >
       <HiArrowPathRoundedSquare className="w-6 h-6" />
     </button>
   </div>
 </Link>
}

export default ProductItem