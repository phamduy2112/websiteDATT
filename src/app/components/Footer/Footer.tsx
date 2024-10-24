import React from 'react'

function Footer() {
  return (
<footer className="bg-gray-100 text-gray-700 pt-10">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
    {/* Logo and Description */}
    <div>
      <a href="#" className="text-3xl font-bold text-blue-500">H</a><span className="text-gray-900 text-3xl">mart</span>
      <p className="mt-4 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
      </p>
      <div className="flex space-x-4 mt-4">
        {/* Social Media Icons */}
        <a href="#" className="text-gray-500 hover:text-blue-500"><i className="fab fa-facebook-square text-2xl" /></a>
        <a href="#" className="text-gray-500 hover:text-blue-500"><i className="fab fa-tumblr-square text-2xl" /></a>
        <a href="#" className="text-gray-500 hover:text-blue-500"><i className="fab fa-twitter-square text-2xl" /></a>
        <a href="#" className="text-gray-500 hover:text-blue-500"><i className="fab fa-instagram-square text-2xl" /></a>
      </div>
    </div>
    {/* Services */}
    <div>
      <h3 className="font-semibold text-lg mb-4">Services</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-blue-500">My Account</a></li>
        <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        <li><a href="#" className="hover:text-blue-500">Shopping Cart</a></li>
        <li><a href="#" className="hover:text-blue-500">Shop</a></li>
        <li><a href="#" className="hover:text-blue-500">Services Login</a></li>
      </ul>
    </div>
    {/* My Account */}
    <div>
      <h3 className="font-semibold text-lg mb-4">My Account</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-blue-500">My Account</a></li>
        <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        <li><a href="#" className="hover:text-blue-500">Shopping Cart</a></li>
        <li><a href="#" className="hover:text-blue-500">Shop</a></li>
        <li><a href="#" className="hover:text-blue-500">Services Login</a></li>
      </ul>
    </div>
    {/* Contact Info */}
    <div>
      <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
      <ul className="space-y-2 text-sm">
        <li>Address: Your Address Goes Here</li>
        <li>Phone/Fax: 0123456789</li>
        <li>Email: <a href="mailto:demo@example.com" className="hover:text-blue-500">demo@example.com</a></li>
        <li>Email: <a href="mailto:demo@example.com" className="hover:text-blue-500">demo@example.com</a></li>
      </ul>
    </div>
  </div>
  {/* Bottom Copyright */}
  <div className="bg-blue-50 py-4 mt-10">
    <div className="container mx-auto flex justify-between items-center text-sm px-4">
      <p>© 2022 <span className="text-blue-500">Hmart</span> Made with <span className="text-blue-500">♥</span> by Codecarnival.</p>
      {/* Payment Icons */}
      <div className="flex space-x-4">
        <img src="path-to/american-express.png" alt="American Express" className="h-6" />
        <img src="path-to/paypal.png" alt="PayPal" className="h-6" />
        <img src="path-to/mastercard.png" alt="Mastercard" className="h-6" />
        <img src="path-to/visa.png" alt="Visa" className="h-6" />
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer