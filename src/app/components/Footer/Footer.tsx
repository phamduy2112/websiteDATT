import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoInstagram, IoLogoTumblr, IoLogoTwitter } from 'react-icons/io'

function Footer() {
  return (
<footer className="bg-blue-50 text-gray-700 pt-10 ">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-7" >
    {/* Logo and Description */}
    <div>
      <a href="#" className="text-3xl font-bold text-blue-500">H</a><span className="text-gray-900 text-3xl">mart</span>
      <p className="mt-4 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
      </p>
      <div className="flex space-x-4 mt-4">
        {/* Social Media Icons */}
        <a href="#" className="bg-gray-500 hover:bg-blue-500 w-[35px] h-[35px] rounded-[.2rem] text-white flex justify-center items-center">
          <FaFacebookF />
          </a>
          <a href="#" className="bg-gray-500 hover:bg-blue-500 w-[35px] h-[35px] rounded-[.2rem] text-white flex justify-center items-center">
          <IoLogoTumblr  />
          </a>
          <a href="#" className="bg-gray-500 hover:bg-blue-500 w-[35px] h-[35px] rounded-[.2rem] text-white flex justify-center items-center">
<IoLogoTwitter />
        </a>
        <a href="#" className="bg-gray-500 hover:bg-blue-500 w-[35px] h-[35px] rounded-[.2rem] text-white flex justify-center items-center">
          <IoLogoInstagram />
        </a>
      </div>
    </div>
    {/* Services */}
    <div>
      <h3 className="font-semibold text-lg mb-3">Services</h3>
      <ul className="space-y-1 text-[.9rem]">
        <li><a href="#" className="hover:text-blue-500">My Account</a></li>
        <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        <li><a href="#" className="hover:text-blue-500">Shopping Cart</a></li>
        <li><a href="#" className="hover:text-blue-500">Shop</a></li>
        <li><a href="#" className="hover:text-blue-500">Services Login</a></li>
      </ul>
    </div>
    {/* My Account */}
    <div>
      <h3 className="font-semibold text-lg mb-3">My Account</h3>
      <ul className="space-y-1 text-[.9rem]">
        <li><a href="#" className="hover:text-blue-500">My Account</a></li>
        <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        <li><a href="#" className="hover:text-blue-500">Shopping Cart</a></li>
        <li><a href="#" className="hover:text-blue-500">Shop</a></li>
        <li><a href="#" className="hover:text-blue-500">Services Login</a></li>
      </ul>
    </div>
    {/* Contact Info */}
    <div>
      <h3 className="font-semibold text-lg mb-3">Contact Info</h3>
      <ul className="space-y-1 text-[.9rem]">
        <li>Address: Your Address Goes Here</li>
        <li>Phone/Fax: 0123456789</li>
        <li>Email: <a href="mailto:demo@example.com" className="hover:text-blue-500">demo@example.com</a></li>
        <li>Email: <a href="mailto:demo@example.com" className="hover:text-blue-500">demo@example.com</a></li>
      </ul>
    </div>
  </div>
  {/* Bottom Copyright */}
  <div className="bg-blue-200 py-4 mt-10">
    <div className="container mx-auto sm:flex justify-between items-center text-sm px-4">
      <p>© 2022 <span className="text-blue-500">Hmart</span> Made with <span className="text-blue-500">♥</span> by Codecarnival.</p>
      {/* Payment Icons */}
      <div className="flex space-x-4 justify-center items-center cursor-pointer">
        <img src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/icons/payment.png" alt="" />
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer