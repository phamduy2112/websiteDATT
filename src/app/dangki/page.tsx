"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { register } from "./api/register";
import Swal from "sweetalert2";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "123 Street",
    phone: "0123456789",
    nick_name: "john",

    password_confirmation: "",
    customer_id: 1,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await register(formData);
      console.log("API Response:", response); // Kiểm tra ở đây
      if (response) {
        Swal.fire("Đã đăng kí thành công!", "Bạn có thể đăng nhập!", "success");
      } else {
        Swal.fire(
          "Đăng kí thất bại!",
          "Bạn có thể kiểm tra lại thông tin",
          "error"
        );
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
   <div className="relative flex flex-col justify-center items-center w-full text-center bg-[#acabab] min-h-[406px] px-4 sm:px-8 md:px-20 py-4 sm:py-24 md:py-40 ">
      <div className="relative flex flex-col w-full max-w-[300px] z-10">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight text-black mb-4">
        Register
        </h1>

        {/* Navigation */}
        <div className="flex gap-3 sm:gap-6 justify-center items-center text-sm sm:text-base uppercase">
          <div className="text-black">Home</div>
          <div className="text-blue-600">{'//'} Register</div>
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#1a191991] text-4xl sm:text-6xl md:text-8xl font-thin whitespace-nowrap opacity-50 z-0">
        1920x406
      </div>
    </div>
      <div className="flex flex-col gap-6 items-center justify-center bg-white py-8 px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          {" "}
          <h2 className="text-xl font-medium">
            {" "}
            <a href="dangnhap">Login</a>
            <span className="text-gray-500 ml-4 mr-4">|</span>{" "}
            <a href="dangki" className="text-blue-500 hover:text-blue-600">
              Register
            </a>{" "}
          </h2>{" "}
        </div>
        <div className="max-w-[35rem] w-full space-y-8 bg-white p-8  shadow-md">
          <form className="mt-8 space-y-6">
            <div className="space-y-8 w-[80%] m-auto">
              {" "}
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  required
                  className="appearance-none relative block w-full px-2 py-3 border border-gray-300 placeholder-gray-500 
            text-gray-900  focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10  sm:text-[.7rem] "
                />{" "}
              </div>{" "}
              <div>
                {" "}
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="appearance-none relative block w-full px-2 py-3  border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10  sm:text-[.7rem]"
                />{" "}
              </div>{" "}
              <div>
                {" "}
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="appearance-none relative block w-full px-2 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10  sm:text-[.7rem]"
                />{" "}
              </div>{" "}
            </div>{" "}
            {/* Register Button */}{" "}
            <div>
              {" "}
              <button
                type="submit"
                className="w-32 py-2 px-3 bg-gray-100 hover:bg-gray-200  sm:text-[.7rem] font-semibold ml-[3rem]  transition duration-200 ease-in-out"
              >
                {" "}
                REGISTER{" "}
              </button>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default Register;
