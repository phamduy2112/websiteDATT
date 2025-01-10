"use client";

import { getBlogApi } from '@/app/blog/api/Blog';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa'; // Icons for date and author



const BlogSection = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const toggleOffCanvas = () => {
    setShowOffCanvas((prevState) => !prevState);
  };
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
    <div className="blog-posts-area flex justify-center mt-10">
    <div className="container ">
      <div className='text-center'>
      <h3 className='text-3xl font-bold text-center py-4'>Latest Blog</h3>
      <p className="text-gray-500 text-center mb-3">
        There are many variations of passages of Lorem Ipsum available</p>
      </div>
      <div className="flex justify-content-center flex-wrap md:flex-row">
        {/* Example Blog Post Item */}
        {blog.slice(0,2).map((item, index) => (
          <div key={index} className="md:w-[49%] sxm:w-[100%] mb-6 md:flex-row">
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
                    {item?.updated_at}
                  </div>
                  <div className="blog-author text-black" style={{ fontSize: '14px' }}>
                    <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-400" />
                  {item?.author}
                  </div>
                </div>
                <h1 className="post-title text-black" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                  <Link href={`/blog/detail/${item?.id}`}>
               {item?.title}
                  </Link>
                </h1>
                <p className="post-excerpt text-black mt-5 mb-5" style={{ fontSize: '14px', color: '#3a3a3a' }}>
{item?.description}
                </p>
                <Link 
                  className="read-more text-white" 
                  style={{ backgroundColor: '#4e4e4e', padding: '10px 35px', borderRadius: '15px', marginTop: '10px', display: 'inline-block', transition: 'background-color 0.3s' }} 
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'blue'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4e4e4e'}
                  href={`/blog/detail/${item?.id}`}
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
  );
};

export default BlogSection;