"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="bg-blue-600 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-blue-600 bottom-0 leading-5 h-[50rem] w-full overflow-hidden"></div>

      <div className="relative py-9 sm:flex sm:flex-row justify-center">
        <div className="flex justify-center self-center z-10">
          <div className="p-12 bg-white mx-auto rounded-3xl w-[28rem] shadow-lg">
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
                  className="w-full text-sm px-4 py-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  className="w-full text-sm px-4 py-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div className="relative">
                <input
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
                      <path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z" />
                    </svg>
                  ) : (
                    <svg
                      className="h-4 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fill="currentColor"
                    >
                      <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" />
                    </svg>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm ml-auto">
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-blue-600 hover:bg-blue-500 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
                >
                  Register
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
                  className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm hover:text-white  text-blue-500 p-3 rounded-lg tracking-wide font-medium cursor-pointer transition ease-in duration-500"
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
          </div>
        </div>
        <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10">
          <div className="self-start hidden lg:flex flex-col text-gray-300">
            <h1 className="my-3 font-semibold text-4xl">Welcome back</h1>
            <p className="pr-3 text-sm opacity-75">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
