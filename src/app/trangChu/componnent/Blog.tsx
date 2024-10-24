import React from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa'; // Icons for date and author

const BlogCard = ({ image, date, author, title, description }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg p-4 max-w-sm">
      {/* Image Section */}
      <div className="bg-gray-200 h-52 w-full flex items-center justify-center">
        <div className="text-gray-600">270x368</div>
      </div>

      {/* Date and Author */}
      <div className="flex items-center space-x-2 text-sm text-gray-500 mt-4">
        <FaCalendarAlt className="text-blue-500" />
        <span>{date}</span>
        <FaUser className="text-blue-500" />
        <span>{author}</span>
      </div>

      {/* Title */}
      <h3 className="font-bold text-lg mt-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-2">{description}</p>

      {/* Read More Button */}
      <button className="bg-gray-800 text-white text-sm font-bold py-2 px-4 mt-4 rounded-lg hover:bg-gray-700">
        Read More
      </button>
    </div>
  );
};

const BlogSection = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Latest Blog</h2>
        <p className="text-gray-500">There are many variations of passages of Lorem Ipsum available</p>
      </div>

      {/* Blog Cards Container */}
      <div className="flex justify-between space-x-6">
        <BlogCard
          image="placeholder"
          date="27, Jun 2030"
          author="Wild Nick"
          title="10 Quick Tips About Smart Product"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <BlogCard
          image="placeholder"
          date="27, Jun 2030"
          author="Oaklee Odom"
          title="5 Real-Life Lessons About Smart Product"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <BlogCard
          image="placeholder"
          date="27, Jun 2030"
          author="Jane Doe"
          title="The Ultimate Guide to Smart Products"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
        />
      </div>
    </div>
  );
};

export default BlogSection;