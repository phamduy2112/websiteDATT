'use client';
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isProductHovered, setIsProductHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsProductHovered(true);
  };

  const handleMouseLeave = () => {
    setIsProductHovered(false);
  };

  return (
    <nav className="bg-blue-600 py-3 h-[50px]">
      <div className="w-[80%] mx-auto flex justify-center">
        <ul className="flex space-x-6 text-white text-sm font-medium">
          <li><Link href="/">Home</Link></li>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <button className="focus:outline-none">
              Page
            </button>
            {isProductHovered && (
              <div
                className="absolute left-0 top-full z-20"
                onMouseEnter={handleMouseEnter} // Keep hover on the dropdown
                onMouseLeave={handleMouseLeave} // Remove hover when leaving dropdown
              >
                <div className="bg-white p-4 shadow-lg rounded-lg">
                  <div className="w-[500px] px-[1rem]">
                    <ul className="flex justify-between">
                      <div className="text-black">
                        <h3 className="text-[.9rem] text-[#7500CF] mb-[.1rem] font-semibold">
                          Inner Pages
                        </h3>
                        <li className="w-[100%] py-1">
                          <Link href="/404" className="text-[.8rem] text-black">
                            404 Page
                          </Link>
                        </li>
                        <li className="w-[100%] py-1">
                          <Link href="/comingsoon" className="text-[.8rem] text-black">
                            Comming soon
                          </Link>
                        </li>
                      
                      </div>

                      <div className="text-black">
                        <h3 className="text-[.9rem] text-[#7500CF] mb-[.1rem] font-semibold">
                          Other Pages
                        </h3>
                        <li className="w-[100%] py-1">
                          <Link href="/cart" className="text-[.8rem] text-black">
                            Cart Page
                          </Link>
                        </li>
                        <li className="w-[100%] py-1">
                          <Link href="/checkout" className="text-[.8rem] text-black">
                            Checkout Page
                          </Link>
                        </li>
                        <li className="w-[100%] py-1">
                          <Link href="/orderTrack" className="text-[.8rem] text-black">
                            Order Page
                          </Link>
                        </li>
                        <li className="w-[100%] py-1">
                          <Link href="/orderSuccess" className="text-[.8rem] text-black">
                            Order Success Page
                          </Link>
                        </li>
                      </div>

                      <div className="text-black">
                        <h3 className="text-[.9rem] text-[#7500CF] mb-[.1rem] font-semibold">
                          Related Pages
                        </h3>
                        <li className="w-[100%] py-1">
                          <Link href="/account" className="text-[.8rem] text-black">
                            Account
                          </Link>
                        </li>
                        <li className="w-[100%] py-1">
                          <Link href="/dangnhap" className="text-[.8rem] text-black">
                            Login
                          </Link>
                        </li>
                        <li className="w-[100%] py-1">
                          <Link href="/dangki" className="text-[.8rem] text-black">
                            Register
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li><Link href="/gioithieu" className="hover:underline">About</Link></li>
          <li><Link href="/listProduct" className="hover:underline">Shop</Link></li>
          <li><Link href="" className="hover:underline">Blog</Link></li>
          <li><Link href="/lienhe" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
