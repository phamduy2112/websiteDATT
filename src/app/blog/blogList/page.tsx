"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';

const BlogListPage = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const toggleOffCanvas = () => {
    setShowOffCanvas((prevState) => !prevState);
  };

  return (
    <div className="bg-white flex flex-col pb-10">
      {/* OffCanvas Wishlist */}
      <div
        id="offcanvas-wishlist"
        className={`offcanvas offcanvas-wishlist ${showOffCanvas ? 'show' : ''}`}
      >
        {/* OffCanvas Wishlist content */}
      </div>

      {/* OffCanvas Cart */}
      <div
        id="offcanvas-cart"
        className={`offcanvas offcanvas-cart ${showOffCanvas ? 'show' : ''}`}
      >
        {/* OffCanvas Cart content */}
      </div>

      {/* OffCanvas Menu */}
      <div
        id="offcanvas-mobile-menu"
        className={`offcanvas offcanvas-mobile-menu ${showOffCanvas ? 'show' : ''}`}
      >
        {/* OffCanvas Menu content */}
      </div>

      {/* Breadcrumb Area */}
      <div className="breadcrumb-area relative bg-gray-300 min-h-[35vh]" style={{ borderRadius: '20px' }}>
      <div className="text-left container  m-auto">
       <div className='absolute top-[30%] left-[40%] z-[10]'>
        <h2 className='text-center text-[3rem] font-semibold'>Blog Single
        </h2>
        <div className="flex gap-6 self-center max-w-full text-[1rem] leading-none uppercase whitespace-nowrap w-[172px]">
            <Link href="/" className="text-black hover:text-blue-600">Home</Link>
            <div className="grow shrink text-blue-600 w-[92px]"> // BlogList</div>
          </div>
       </div>
       
        <div className="absolute top-[30%] left-[40%] z-0 text-gray-400 text-8xl font-thin ">
          1920x406
        </div>
      </div>
      </div>
      {/* Breadcrumb Area End */}

      {/* Blog Posts Area */}
      <div className="blog-posts-area flex justify-center mt-10">
        <div className="container w-[90%] md:w-[80%] lg:w-[60%]">
          <div className="row justify-content-center">
            {/* Example Blog Post Item */}
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="col-12 mb-6 md:flex-row">
                <div className="blog-post bg-white p-4 flex flex-col md:flex-row">
                  <div className="mr-0 md:mr-10 bg-gray-100 border-5 border-gray-400 mb-4 md:mb-0 rounded-2xl">
                    <img 
                      src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/blog-image/1.webp" 
                      className="w-full h-[368px] object-cover rounded-2xl" 
                    />
                  </div>
                  
                  {/* Nội dung bài viết */}
                  <div className="flex-1">
                    <div className="blog-post-meta flex items-center mb-4">
                      <div className="blog-date mr-4 text-black" style={{ fontSize: '14px' }}>
                        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-blue-400" />
                        27, Jun 2030
                      </div>
                      <div className="blog-author text-black" style={{ fontSize: '14px' }}>
                        <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-400" />
                        Oaklee Odom
                      </div>
                    </div>
                    <h1 className="post-title text-black" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                      <Link href="/blog/blogDetail">The Top Reasons People Succeed in the Smart Product Industry.</Link>
                    </h1>
                    <p className="post-excerpt text-black mt-5 mb-5" style={{ fontSize: '14px', color: '#3a3a3a' }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <Link 
                      href="/blog/blogDetail" 
                      className="read-more text-white" 
                      style={{ backgroundColor: '#4e4e4e', padding: '10px 35px', borderRadius: '15px', marginTop: '10px', display: 'inline-block', transition: 'background-color 0.3s' }} 
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'blue'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4e4e4e'}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Pagination Area Start */}
    <div className="pro-pagination-style text-center mb-5 mt-5">
      <div className="pages">
        <ul className="flex justify-center">
          <li className="li">
            <Link 
              className="page-link border-2 border-gray-300 text-gray-600 px-2 py-1 rounded-md transition-colors duration-300 hover:border-blue-500 hover:text-blue-500" 
              href="#">&lt;
            </Link>
          </li>
          <li className="li">
            <Link 
              className="page-link border-2 border-blue-500 text-blue-500 px-2 py-1 rounded-md font-bold mx-1 transition-colors duration-300" 
              href="#">1
            </Link>
          </li>
          <li className="li">
            <Link 
              className="page-link border-2 border-gray-300 text-gray-300 px-2 py-1 rounded-md mx-1 transition-colors duration-300 hover:border-blue-500 hover:text-blue-500" 
              href="#">2
            </Link>
          </li>
          <li className="li">
            <Link 
              className="page-link border-2 border-gray-300 text-gray-300 px-2 py-1 rounded-md mx-1 transition-colors duration-300 hover:border-blue-500 hover:text-blue-500" 
              href="#">3
            </Link>
          </li>
          <li className="li">
            <Link 
              className="page-link border-2 border-gray-300 text-gray-600 px-2 py-1 rounded-md mx-1 transition-colors duration-300 hover:border-blue-500 hover:text-blue-500" 
              href="#">&gt;
            </Link>
          </li>
        </ul>
      </div>
    </div>
    {/* Pagination Area End */}
    </div>
  );
};

export default BlogListPage;