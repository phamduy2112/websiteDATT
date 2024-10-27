import React from "react";

import { IoMdClose } from "react-icons/io";

import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
// Các import khác...

interface TaskHeaderMbProps {
  onClose: () => void;
}

function TaskHeaderMb({ onClose }: TaskHeaderMbProps) {
  return (
    <div className="w-[320px] h-[100vh] bg-white absolute top-0 left-0 py-4 px-[1rem]">
      <div className='text-[2rem] cursor-pointer absolute hrefp-[1rem] right-[1rem]' onClick={onClose}>
        <IoMdClose />
      </div>
      <div className="text-center border-b border-gray-500  py-[.5rem]">
      <div className="text-[2rem] font-bold">
            <a href="#" className="text-blue-500">H</a><span className="text-black">mart</span>
          </div>
        <form action="" className="w-full h-[38px]">
        <div className=" w-full">
            <div className="flex">
              <input type="text" placeholder="Search" className="w-full py-2 px-4 rounded-l-md bg-gray-100 text-gray-900 focus:outline-none" />
              <button className="bg-blue-500 px-4 rounded-r-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.95 4.95a1 1 0 01-1.414 1.414l-4.95-4.95zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <ul>
          <li className="text-[1.4rem]">
            <div className="border-b border-gray-500 py-[.5rem]">
              <Link href="/" className="text-[1.4rem] text-black">
                Trang chủ
              </Link>
            </div>
            <div className="border-b border-gray-500  py-[.5rem]">
              <Link href="/gioithieu" className="text-[1.4rem] text-black">
                Giới thiệu
              </Link>
            </div>
            <div className="border-b border-gray-500  py-[.5rem]">
              <Link href="/listProduct" className="text-[1.4rem] text-black">
                Sản Phẩm
              </Link>
            </div>
            <div className="border-b border-gray-500  py-[.5rem]">
              <Link href="/bai-viet" className="text-[1.4rem] text-black">
                Bài viết
              </Link>
            </div>
            <div className="border-b border-gray-500  py-[.5rem]">
              <Link href="/lienhe" className="text-[1.4rem] text-black">
                Liên hệ
              </Link>
            </div>
        
          </li>
        </ul>
        <div className="mt-6">
          <h4 className="text-[1.6rem] py-3">Bạn cần giúp?</h4>
          <div className="text-[1.3rem] py-1">Address: 1234 Fashion Street, Suite 567, New York, NY 10001</div>
          <div className="text-[1.3rem] py-1">Email: <b>info@fashionshop.com</b></div>
          <div className="text-[1.3rem] py-1">Phone: <b>(212) 555-1234</b></div>
        </div>
        <div className="border border-gray-500 w-[28%] px-[1rem]  py-[.5rem] absolute ">
          <Link href="/dangnhap" className="flex text-[1.3rem] gap-[1rem]">   
            {/* <FaRegUser /> */}
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TaskHeaderMb;