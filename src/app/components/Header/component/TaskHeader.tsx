
'use client'
import React, { useState } from "react";

import { IoMdClose } from "react-icons/io";

import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
// Các import khác...

interface TaskHeaderMbProps {
  onClose: () => void;
}



const TaskHeaderMb = ({ isOpen, onClose }) => {
  const [expandedItems, setExpandedItems] = useState({
    home: false,
    pages: true,  // Initially expanded based on the image
    innerPages: false,
    otherShopPages: false,
    relatedShopPage: false,
    shop: false,
    blog: false
  });
  const menuItems = [
    { key: 'home', label: 'Home', link: '/' },
    { key: 'about', label: 'About', link: '/gioithieu' },
    { key: 'pages', label: 'Pages', subMenu: [{ key: 'page1', label: 'Page 1' }, { key: 'page2', label: 'Page 2' }] },
  
    
    { key: 'shop', label: 'Shop', link: '/listProduct' },
    { key: 'blog', label: 'Blog' ,link:"/blog/blogList"},
    { key: 'contactUs', label: 'Contact Us',link:"/contact" },
  ];

  const toggleItem = (key) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div >
      {isOpen && (
  <div className="fixed inset-0 z-40">
    {/* Black Overlay */}
    <div
      className="absolute inset-0 bg-black bg-opacity-50"
      onClick={onClose} // Close the sidebar when clicking on the overlay
    ></div>

    {/* Sidebar */}
    <div
      className={`fixed top-0 left-0 h-full w-80 bg-white transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-blue-500 text-white rounded-full p-2"
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Contact Info Section */}
      <div className="p-6 space-y-4 border-b">
        <div className="flex items-center space-x-3 text-gray-600">
          <svg
            className="w-5 h-5 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>+012 3456 789</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-600">
          <svg
            className="w-5 h-5 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span>demo@example.com</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-600">
          <svg
            className="w-5 h-5 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span>Account</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-6">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.key} className="px-6">
            {item.link ? (
              <a
                href={item.link}
                className="w-full flex items-center justify-between py-2 text-gray-600 hover:text-gray-900"
              >
                <span>{item.label}</span>
              </a>
            ) : (
              <button
                onClick={() => toggleItem(item.key)}
                className="w-full flex items-center justify-between py-2 text-gray-600 hover:text-gray-900"
              >
                <span>{item.label}</span>
                {item.subMenu && (
                  <span className="text-xl">
                    {expandedItems[item.key] ? '-' : '+'}
                  </span>
                )}
              </button>
            )}
            {item.subMenu && expandedItems[item.key] && (
              <ul className="ml-6 mt-2 space-y-2 border-l border-gray-300 pl-4">
                {item.subMenu.map((subItem) => (
                  <li key={subItem.key}>
                    <a
                      href={subItem.link || '#'}
                      className="block text-gray-500 hover:text-gray-800"
                    >
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
)}
     </div>
  );
};

export default TaskHeaderMb;