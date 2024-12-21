// blog/grid/page.tsx
"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from 'react';
import { getBlogApi } from '../api/Blog';

const BlogGridPage = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const toggleOffCanvas = () => {
    setShowOffCanvas((prevState) => !prevState);
  };

  const blogPosts = [
    {
      imageUrl: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/blog-image/1.webp",
      date: "27 tháng 6 năm 2030",
      author: "Oaklee Odom",
      title: "The Top Reasons People Succeed in the Smart Product Industry.",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      postLink: "/blog/blogDetail"
    },
    {
      imageUrl: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/blog-image/1.webp",
      date: "27 tháng 6 năm 2030",
      author: "Oaklee Odom",
      title: "The Top Reasons People Succeed in the Smart Product Industry.",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      postLink: "/blog/blogDetail"
    },
    {
      imageUrl: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/blog-image/1.webp",
      date: "27 tháng 6 năm 2030",
      author: "Oaklee Odom",
      title: "The Top Reasons People Succeed in the Smart Product Industry.",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      postLink: "/blog/blogDetail"
    },
    {
      imageUrl: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/blog-image/1.webp",
      date: "27 tháng 6 năm 2030",
      author: "Oaklee Odom",
      title: "The Top Reasons People Succeed in the Smart Product Industry.",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      postLink: "/blog/blogDetail"
    },
    {
      imageUrl: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/blog-image/1.webp",
      date: "27 tháng 6 năm 2030",
      author: "Oaklee Odom",
      title: "The Top Reasons People Succeed in the Smart Product Industry.",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      postLink: "/blog/blogDetail"
    },
    {
      imageUrl: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/blog-image/1.webp",
      date: "27 tháng 6 năm 2030",
      author: "Oaklee Odom",
      title: "The Top Reasons People Succeed in the Smart Product Industry.",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      postLink: "/blog/blogDetail"
    },
    {
      imageUrl: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/blog-image/1.webp",
      date: "27 tháng 6 năm 2030",
      author: "Oaklee Odom",
      title: "The Top Reasons People Succeed in the Smart Product Industry.",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      postLink: "/blog/blogDetail"
    },
    {
      imageUrl: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/blog-image/1.webp",
      date: "27 tháng 6 năm 2030",
      author: "Oaklee Odom",
      title: "The Top Reasons People Succeed in the Smart Product Industry.",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      postLink: "/blog/blogDetail"
    },
  ];
 const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await getBlogApi(); // Gọi API
        setBlog(res.data || []); // Lưu dữ liệu vào state
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    if (blog.length === 0) { // Kiểm tra blog đã có dữ liệu chưa
      fetchBlogs();
    }
  }, [blog.length]); // Chỉ chạy khi blog.length thay đổi
console.log(blog);
  return (
    <div className="bg-white flex flex-col pb-10">
      {/* OffCanvas Wishlist, Cart, Menu */}
      {['wishlist', 'cart', 'mobile-menu'].map((type) => (
        <div key={type} id={`offcanvas-${type}`} className={`offcanvas offcanvas-${type} ${showOffCanvas ? 'show' : ''}`}>
          {/* OffCanvas content here */}
        </div>
      ))}

      {/* Breadcrumb Area */}
      <div className="breadcrumb-area relative bg-gray-300 min-h-[35vh]" style={{ borderRadius: '20px' }}>
      <div className="text-left container  m-auto">
       <div className='absolute top-[30%] left-[40%] z-[10]'>
        <h2 className='text-center text-[3rem] font-semibold'>Blog Grid
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

      {/* Blog Post Grid */}
      <div className="container mx-auto mt-10" style={{ width: '100%' }}>
        <div className="flex flex-wrap justify-center gap-6" style={{ width: '90%', margin: '0 auto' }}>
          {blog.map((post, index) => (
              <div className="bg-white p-4 rounded-lg w-[300px]" key={index}>
                <div className="border-5" style={{ width: '100%', height: '368px' }}>
                   <img 
                      src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/blog-image/1.webp" 
                      className="w-full h-[368px] object-cover rounded-2xl" 
                    />
                </div>
                <div className="mt-3">
                  <div className="flex items-center space-x-4 text-sm text-black">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-400 mr-2" />
                      {post?.updated_at}
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faUser} className="text-blue-400 mr-2" />
                      {post?.author}
                    </div>
                  </div>
                  <h1 className="mt-3 text-lg font-bold text-black">
                  <Link 
                      href={`/blog/detail/${post?.id}`}
                      >{post?.title}</Link>
                  </h1>
                  <p className="mt-3 text-sm text-gray-700">
                    {post?.description}
                  </p>
                  <Link
                      href={`/blog/detail/${post?.id}`}
                      className="inline-block mt-4 px-5 py-2 text-sm text-white bg-gray-700 rounded-full hover:bg-blue-600 transition"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
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

export default BlogGridPage;