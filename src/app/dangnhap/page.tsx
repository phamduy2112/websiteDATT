'use client'
import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Form submitted:', formData);
  };

  return (
 <div>
 <div className="relative flex flex-col justify-center items-center w-full text-center bg-[#acabab] min-h-[406px] px-4 sm:px-8 md:px-20 py-4 sm:py-24 md:py-40 ">
      <div className="relative flex flex-col w-full max-w-[300px] z-10">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight text-black mb-4">
          Login
        </h1>

        {/* Navigation */}
        <div className="flex gap-3 sm:gap-6 justify-center items-center text-sm sm:text-base uppercase">
          <div className="text-black">Home</div>
          <div className="text-blue-600">{'//'} Login</div>
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#1a191991] text-4xl sm:text-6xl md:text-8xl font-thin whitespace-nowrap opacity-50 z-0">
        1920x406
      </div>
    </div>
      <div className="flex flex-col gap-6 items-center justify-center bg-white py-8 px-4 sm:px-6 lg:px-8">
<div className="flex justify-center space-x-4 text-xl">
          <a href="/dangnhap" className="text-blue-500">Login</a>
          <span className="text-gray-500">|</span>
          <a href="/dangki" className="text-gray-900">Register</a>
        </div>
        <div className="max-w-[35rem] w-full space-y-8 bg-white p-8  shadow-md">
      
        
        <form className="mt-8 space-y-6">
        <div className="space-y-6 w-[80%] m-auto">
        <div>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="appearance-none relative block w-full px-2 py-3 border border-gray-300 placeholder-gray-500 
              text-gray-900  focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10  sm:text-[.7rem] "            />
          </div>
          
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="appearance-none relative block w-full px-2 py-3 border border-gray-300 placeholder-gray-500 
              text-gray-900  focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10  sm:text-[.7rem] "            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-2 w-2 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-600 text-[.9rem]">Remember me</span>
            </label>
            
            <a href="/forgot-password" className="text-[#000] hover:text-blue-600 text-[.8rem]">
              Forgot Password?
            </a>
          </div>
          
          <button
                type="submit"
                className="w-32 py-2 px-3 bg-gray-100 hover:bg-gray-200  sm:text-[.7rem] font-semibold  transition duration-200 ease-in-out"
              >
                {" "}
                LOGIN{" "}
              </button>{" "}
        </div>
     
        </form>
      </div>
    </div>
 </div>
  );
};

export default Login;