'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [isProductHovered, setIsProductHovered] = useState(false);
  const [isBlogHovered, setIsBlogHovered] = useState(false);  // State for Blog dropdown
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMouseEnterProduct = () => {
    setIsProductHovered(true);
  };

  const handleMouseLeaveProduct = () => {
    setIsProductHovered(false);
  };

  const handleMouseEnterBlog = () => {
    setIsBlogHovered(true);
  };

  const handleMouseLeaveBlog = () => {
    setIsBlogHovered(false);
  };

  // Monitor scroll event
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
  <div className="bg-black">
      <nav
      className={` ${
        isScrolled ? "fixed w-[100%] top-0 left-0  bg-blue-600 shadow-lg z-50" : "container bg-blue-600"
      } py-3 transition-all duration-300`}
    >
      <div className="w-[80%] mx-auto flex justify-center uppercase">
        <ul className="flex gap-[3rem] text-white text-[.8rem] font-medium">
          <li><Link href="/">Home</Link></li>
          <li
            onMouseEnter={handleMouseEnterProduct}
            onMouseLeave={handleMouseLeaveProduct}
            className="relative"
          >
            <button className="focus:outline-none flex justify-center items-center gap-1 uppercase">
              Page
              <MdKeyboardArrowDown />
            </button>
            {isProductHovered && (
              <div
                className="absolute left-0 top-full z-20 bg-white shadow-lg p-4 mt-1 rounded-lg w-[1000px]"
                onMouseEnter={handleMouseEnterProduct}
                onMouseLeave={handleMouseLeaveProduct}
              >
                <div className="grid grid-cols-4 gap-4 text-black">
                  <div className="border border-r-gray-300 border-transparent">
                    <h2 className="text-[.8rem] font-bold ">Inner Pages</h2>
                    <ul className="space-y-2 mt-[1rem] text-[.7rem] text-gray-500 font-semibold">
                      <li><Link href="/404" className="hover:text-blue-500 hover:ml-[7px] transition-all ">404 Page</Link></li>
                      <li><Link href="/orderTrack" className="hover:text-blue-500 hover:ml-[7px] transition-all ">Order Tracking</Link></li>
                      <li><Link href="/faq" className="hover:text-blue-500 hover:ml-[7px] transition-all ">Faq Page</Link></li>
                      <li><Link href="/comingsoon" className="hover:text-blue-500 hover:ml-[7px] transition-all ">Coming Soon Page</Link></li>
                    </ul>
                  </div>

                  <div className="border border-r-gray-300 border-transparent">
                    <h2 className="text-[.8rem] font-bold">Other Shop Pages</h2>
                    <ul className="space-y-2 mt-[1rem] text-[.7rem] text-gray-500 font-semibold">
                      <li><Link href="/cart" className="hover:text-blue-500 hover:ml-[7px] transition-all ">Cart Page</Link></li>
                      <li><Link href="/checkout" className="hover:text-blue-500 hover:ml-[7px] transition-all ">Checkout Page</Link></li>
                      {/* <li><Link href="#" className="hover:text-blue-500 hover:ml-[7px] transition-all ">Compare Page</Link></li>
                      <li><Link href="#" className="hover:text-blue-500 hover:ml-[7px] transition-all ">Wishlist Page</Link></li> */}
                    </ul>
                  </div>

                  <div className="border border-r-gray-300 border-transparent">
                    <h2 className="text-[.8rem] font-bold">Related Shop Pages</h2>
                    <ul className="space-y-2 mt-[1rem] text-[.7rem] text-gray-500 font-semibold">
                      <li><Link href="/account" className="hover:text-blue-500 hover:ml-[7px] transition-all ">Account Page</Link></li>
                      <li><Link href="/dangnhap" className="hover:text-blue-500 hover:ml-[7px] transition-all ">Login & Register Page</Link></li>
                      {/* <li><Link href="/giohangtrong" className="hover:text-blue-500 hover:ml-[7px] transition-all ">Empty Cart Page</Link></li> */}
                      <li><Link href="/orderSuccess" className="hover:text-blue-500 hover:ml-[7px] transition-all ">Thank You Page</Link></li>
                    </ul>
                  </div>
                  <div className="w-full h-48 bg-gray-300 text-center flex items-center justify-center">
                    <span className="text-gray-500">244x182</span>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Blog Dropdown */}
          <li
            onMouseEnter={handleMouseEnterBlog}
            onMouseLeave={handleMouseLeaveBlog}
            className="relative"
          >
            <button className="focus:outline-none flex justify-center items-center gap-1 uppercase">
              Blog
              <MdKeyboardArrowDown />
            </button>
            {isBlogHovered && (
              <div
                className="absolute left-0 top-full z-20 bg-white shadow-lg p-4 mt-1 rounded-lg w-[300px]"
                onMouseEnter={handleMouseEnterBlog}
                onMouseLeave={handleMouseLeaveBlog}
              >
                <ul className="space-y-2 text-[.7rem] text-gray-500 font-semibold">
                  <li><Link href="/blog/blogList" className="hover:text-blue-500 hover:ml-[7px] transition-all ">Blog List</Link></li>
                  <li><Link href="/blog/blogGrid" className="hover:text-blue-500 hover:ml-[7px] transition-all ">Blog Grid</Link></li>
                  <li><Link href="/blog/detail" className="hover:text-blue-500 hover:ml-[7px] transition-all ">Blog Detail</Link></li>
                </ul>
              </div>
            )}
          </li>

          <li><Link href="/gioithieu" className="hover:underline">About</Link></li>
          <li><Link href="/listProduct" className="hover:underline">Shop</Link></li>
          <li><Link href="/lienhe" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
    </nav>
  </div>
  );
};

export default Navbar;
