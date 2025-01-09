"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import TaskHeaderMb from "./component/TaskHeader";
import { FaBars, FaRegHeart, FaUser } from "react-icons/fa";
import Link from "next/link";
import { cartState } from '../../cart/cartState'; 
import { useRecoilState, useRecoilValue } from 'recoil';
import { MdEmail } from "react-icons/md";
import { BsHearts } from "react-icons/bs";
import { userAtom } from "@/atoms/userAtom";
import { useRouter } from 'next/navigation';

const Header = () => {
  const [isvisibleHeaderMB, setisvisibleHeaderMB] = useState(false);
  const cart = useRecoilValue(cartState);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    const [user, setUser] = useRecoilState(userAtom);
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const toggleHeader = () => {
      setisvisibleHeaderMB(!isvisibleHeaderMB);
    };
  

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <header className="relative w-full z-50">
      {/* Top Bar */}
      <div className="bg-gray-900 text-gray-300 py-2 relative border-b border-gray-400 sxm:hidden md:block">
        <div className="w-[70%] mx-auto flex justify-between items-center px-4 flex-wrap md:flex-nowrap">
          <div className="text-xs sm:text-[.7rem] text-center md:text-left w-full md:w-auto mb-2 md:mb-0">
            World Wide Completely Free Returns and Shipping
          </div>
          <div className="flex items-center w-full md:w-auto justify-center md:justify-end">
            <div className="flex gap-[.5rem] items-center border-r border-gray-300 px-4">
              <FontAwesomeIcon icon={faPhone} className="text-blue-500" />
              <span className="text-xs sm:sm:text-[.7rem]">+012 3456 789</span>
            </div>
            <div className="flex gap-[.5rem] items-center  border-r border-gray-300 px-4">
             <MdEmail className="text-blue-500" />
              <span className="text-xs sm:sm:text-[.7rem]">demo@example.com</span>
            </div>
            <div className="flex gap-[.5rem] items-center px-4">
            <FaUser className="text-blue-500" />
    {
      user.isLoggedIn ? <><a href="account">Xin chào bạn!</a></> : <><a
      href="/dangnhap"
      className="text-gray-300 hover:text-white text-[.7rem]"
    >
      Account
    </a></>
    }
              
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
            <div className="hidden md:block w-[40%]">
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
                <FaRegHeart className="text-[1.5rem]"/>
              </div>
              <div className="relative">
                <Link href="/cart">
                <div className="relative">
            <button className="hover:text-gray-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
            <span className="absolute -top-2 -right-2 bg-blue-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
              01
            </span>
          </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Navbar />
      </div>

    
       
    <div className="bg-gray-900 pb-3 text-white md:hidden">
      {/* Top banner */}
      <div className="bg-gray-800 py-2 px-4 text-center">
        <p className="text-sm">World Wide Completely Free Returns and Shipping</p>
      </div>
      
      {/* Main header */}
      
      <div className=
     { `${isScrolled ?"fixed top-0 left-0 w-[100%] bg-black" :"container mx-auto "} px-4 py-3  flex items-center justify-between`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-blue-500 text-3xl font-bold">H</span>
          <span className="text-white text-3xl">mart</span>
        </div>

      

        {/* Right icons */}
        <div className="flex items-center space-x-6">
          <button className="hover:text-gray-300">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          
          <div className="relative">
            <button className="hover:text-gray-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
            <span className="absolute -top-2 -right-2 bg-blue-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
              01
            </span>
          </div>

          <button className="hover:text-gray-300"
          
          onClick={() => setisvisibleHeaderMB(!isvisibleHeaderMB)}

          >

            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex-1 max-w-2xl mx-8">
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-blue-500 px-6 rounded-r-lg hover:bg-blue-600 transition">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
    </div>


      {/* Mobile Sidebar Menu */}
      {isvisibleHeaderMB && (
              <TaskHeaderMb isOpen={isvisibleHeaderMB} onClose={() => setisvisibleHeaderMB(false)} />

      )}
    </header>
  );
};

export default Header;
