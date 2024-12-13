'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [isProductHovered, setIsProductHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMouseEnter = () => {
    setIsProductHovered(true);
  };

  const handleMouseLeave = () => {
    setIsProductHovered(false);
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
    <nav
      className={`${
        isScrolled ? "fixed top-0 left-0 w-full bg-blue-600 shadow-lg z-50" : "bg-blue-600"
      } py-3 transition-all duration-300`}
    >
      <div className="w-[80%] mx-auto flex justify-center uppercase">
        <ul className="flex gap-[3rem] text-white text-[.9rem] font-medium">
          <li><Link href="/">Home</Link></li>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <button className="focus:outline-none flex justify-center items-center gap-1 uppercase">
              Page
              <MdKeyboardArrowDown />
            </button>
            {isProductHovered && (
              <div
                className="absolute left-0 top-full z-20 bg-white shadow-lg p-4 mt-1 rounded-lg w-[1000px]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="grid grid-cols-4 gap-4 text-black">
                  <div className="border border-r-gray-300 border-transparent">
                    <h2 className="text-[.8rem] font-bold ">Inner Pages</h2>
                    <ul className="space-y-2 mt-[1rem] text-[.8rem]">
                      <li><Link href="#">404 Page</Link></li>
                      <li><Link href="#">Order Tracking</Link></li>
                      <li><Link href="#">Faq Page</Link></li>
                      <li><Link href="#">Coming Soon Page</Link></li>
                    </ul>
                  </div>

                  <div className="border border-r-gray-300 border-transparent">
                    <h2 className="text-[.8rem] font-bold">Other Shop Pages</h2>
                    <ul className="space-y-2 mt-[1rem] text-[.8rem]">
                      <li><Link href="#">Cart Page</Link></li>
                      <li><Link href="#">Checkout Page</Link></li>
                      <li><Link href="#">Compare Page</Link></li>
                      <li><Link href="#">Wishlist Page</Link></li>
                    </ul>
                  </div>

                  <div className="border border-r-gray-300 border-transparent">
                    <h2 className="text-[.8rem] font-bold">Related Shop Pages</h2>
                    <ul className="space-y-2 mt-[1rem] text-[.8rem]">
                      <li><Link href="#">Account Page</Link></li>
                      <li><Link href="#">Login & Register Page</Link></li>
                      <li><Link href="#">Empty Cart Page</Link></li>
                      <li><Link href="#">Thank You Page</Link></li>
                    </ul>
                   
                  </div>
                  <div className="w-full h-48 bg-gray-300 text-center flex items-center justify-center">
                      <span className="text-gray-500">244x182</span>
                    </div>
                </div>
              </div>
            )}
          </li>
          <li><Link href="/gioithieu" className="hover:underline">About</Link></li>
          <li><Link href="/listProduct" className="hover:underline">Shop</Link></li>
          <li><Link href="#" className="hover:underline">Blog</Link></li>
          <li><Link href="/lienhe" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
