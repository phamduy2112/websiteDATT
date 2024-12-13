"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./component/Navbar";
import { useState } from "react";
import TaskHeaderMb from "./component/TaskHeader";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { cartState } from '../../cart/cartState'; 
import { useRecoilValue } from 'recoil';
import { MdEmail } from "react-icons/md";
const Header = () => {
  const [isvisibleHeaderMB, setisvisibleHeaderMB] = useState(false);
  const cart = useRecoilValue(cartState);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  
  return (
    <header className="relative w-full z-50">
      {/* Top Bar */}
      <div className="bg-gray-900 text-gray-300 py-2 relative border-b border-gray-400">
        <div className="container mx-auto flex justify-between items-center px-4 flex-wrap md:flex-nowrap">
          <div className="text-xs sm:text-[.8rem] text-center md:text-left w-full md:w-auto mb-2 md:mb-0">
            World Wide Completely Free Returns and Shipping
          </div>
          <div className="flex items-center w-full md:w-auto justify-center md:justify-end">
            <div className="flex gap-[.5rem] items-center border-r border-gray-300 px-4">
              <FontAwesomeIcon icon={faPhone} className="text-blue-500" />
              <span className="text-xs sm:sm:text-[.8rem]">+012 3456 789</span>
            </div>
            <div className="flex gap-[.5rem] items-center  border-r border-gray-300 px-4">
             <MdEmail className="text-blue-500" />
              <span className="text-xs sm:sm:text-[.8rem]">demo@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <a
                href="#"
                className="text-gray-300 hover:text-white text-xs sm:text-sm"
              >
                Account
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="sxm:hidden mdl:block">
        <div className="bg-gray-900 text-gray-300 py-3 hidden md:block">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className="text-2xl font-bold">
              <a href="#" className="text-blue-500">
                H
              </a>
              <span className="text-white">mart</span>
            </div>
            <div className="hidden md:block w-3/4">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full py-2 px-4 rounded-l-md bg-gray-100 text-gray-900 focus:outline-none"
                />
                <button className="bg-blue-500 px-4 rounded-r-md flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.9 14.32a8 8 0 111.414-1.414l4.95 4.95a1 1 0 01-1.414 1.414l-4.95-4.95zM8 14a6 6 0 100-12 6 6 0 000 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.8 4.6a5.6 5.6 0 00-7.9 0L12 5.5l-.9-.9a5.6 5.6 0 00-7.9 7.9l.9.9L12 21l8.9-8.9.9-.9a5.6 5.6 0 000-7.9z" />
                </svg>
              </div>
              <div className="relative">
                <Link href="/cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={9} cy={21} r={1} />
                    <circle cx={20} cy={21} r={1} />
                    <path d="M1 1h4l1.68 10.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                  </svg>
                  {totalQuantity > 0 && (
                    <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {" "}
                      {totalQuantity}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Navbar />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="mdl:hidden flex shadow-sm justify-center items-center bg-gray-900 py-3">
        <div className="w-[95%] m-auto flex items-center justify-between">
          <div
            className="text-2xl"
            onClick={() => setisvisibleHeaderMB(!isvisibleHeaderMB)}
          >
            <FaBars className="text-white" />
          </div>
          <div className="text-2xl font-bold">
            <a href="#" className="text-blue-500">
              H
            </a>
            <span className="text-white">mart</span>
          </div>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={9} cy={21} r={1} />
              <circle cx={20} cy={21} r={1} />
              <path d="M1 1h4l1.68 10.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              01
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {isvisibleHeaderMB && (
        <div className="fixed inset-0 z-30 flex">
          <div className="w-[320px] h-[100%] bg-white">
            <TaskHeaderMb onClose={() => setisvisibleHeaderMB(false)} />
          </div>
          <div
            className="w-[100%] h-full bg-[rgba(0,0,0,0.5)]"
            onClick={() => setisvisibleHeaderMB(false)}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
