import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { HiArrowPathRoundedSquare } from 'react-icons/hi2'
import { IoEyeOutline } from 'react-icons/io5'
import { MdOutlineShoppingBag } from 'react-icons/md'

function ProductList() {
  return (
<div className="flex gap-[1rem]">
    <div className='bg-white shadow-md rounded p-[.5rem] w-[60%]'>

    <img className="w-full h-[15rem] object-cover rounded-t" src="https://via.placeholder.com/270x274" alt="Product image" />

    </div>
    <div>
    <h5 className="text-[14px] text-gray-500 font-thin">
     Accessories
   </h5>
    <h2 className="text-gray-900 font-bold text-xl">Air Pods 256K Black</h2>
      <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodol tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni quis nostrud exercitation ullamco laboris

</p>
      <p className="text-gray-900 font-bold py-5">$38.50</p>
      <div className="flex">
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
    </div>
    
    </div>
  )
}

export default ProductList