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
    customer_id: 1
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
        Swal.fire("Đăng kí thất bại!", "Bạn có thể kiểm tra lại thông tin", "error");
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
      <div className="bg-blue-600 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-blue-600 bottom-0 leading-5 h-[50rem] w-full overflow-hidden"></div>

      <div className="relative py-9 sm:flex sm:flex-row justify-center">
        <div className="flex justify-center self-center z-10">
          <div className="p-12 bg-white mx-auto rounded-3xl w-[28rem] shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-7">
                <h3 className="font-semibold text-2xl text-gray-800">Register</h3>
                <p className="text-gray-400">
                  Don't have an account?{" "}
                  <Link
                    href="/dangnhap"
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Login
                  </Link>
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full text-sm px-4 py-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full text-sm px-4 py-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                    type="email"
                    placeholder="Email"
                  />
                </div>

                <div className="relative">
                  <input
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    className="text-sm text-black px-4 py-3 rounded-lg w-full bg-transparent border border-gray-300 focus:outline-none focus:border-blue-600 transition-colors"
                  />
                  <div
                    className="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg
                        className="h-4 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        fill="currentColor"
                      >
                        <path d="..." />
                      </svg>
                    ) : (
                      <svg
                        className="h-4 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        fill="currentColor"
                      >
                        <path d="..." />
                      </svg>
                    )}
                  </div>
                </div>

                {error && <p className="text-red-600 text-sm">{error}</p>}
<div>
  <input
    name="password_confirmation"
    value={formData.password_confirmation}
    onChange={handleChange}
    placeholder="Confirm Password"
    type={showPassword ? "text" : "password"}
    className="text-sm text-black px-4 py-3 rounded-lg w-full bg-transparent border border-gray-300 focus:outline-none focus:border-blue-600 transition-colors"
  />
  {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

</div>
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center bg-blue-600 hover:bg-blue-500 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
                  >
                    {loading ? "Registering..." : "Register"}
                  </button>
                </div>

                <div className="flex items-center justify-center space-x-2 my-5">
                  <span className="h-px w-16 bg-gray-100"></span>
                  <span className="text-gray-300 font-normal">or</span>
                  <span className="h-px w-16 bg-gray-100"></span>
                </div>

                <div className="flex justify-center gap-5 w-full">
                  <button
                    type="button"
                    className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm hover:text-white text-blue-500 p-3 rounded-lg tracking-wide font-medium cursor-pointer transition ease-in duration-500"
                  >
                    <FaGoogle className="mr-2" />
                    <span>Google</span>
                  </button>
                  <button
                    type="button"
                    className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm hover:text-white text-blue-500 p-3 rounded-lg tracking-wide font-medium cursor-pointer transition ease-in duration-500"
                  >
                    <FaFacebookF className="mr-2" />
                    <span>Facebook</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
