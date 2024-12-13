"use client";
import React, { useState } from "react";

function ToggleAdress() {
  const [isChecked, setIsChecked] = useState(false); // Trạng thái checkbox (được chọn hay không)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle trạng thái checkbox
  };

  return (
    <div className="">
      {/* Checkbox */}
      <label className="flex gap-[.5rem] items-center">
        <input
          type="checkbox"
          className="form-checkbox h-3 w-3 text-blue-600"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className=" text-gray-700 mt-[.1rem]">Create an account?</span>
      </label>

      {/* Form xổ xuống khi checkbox được chọn */}
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out mt-4 ${
          isChecked ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="w-[100%]">
          <div className="billing-info mb-4">
            <label className="block text-black">Email Address</label>
            <input
              className="h-[45px] w-[100%] border border-gray-200  text-[.8rem]  px-[1rem] focus:outline-[#266bf9] mb-[1rem]"
              placeholder="Email Address"
              type="text"
            />
            <label className="block text-black">Password</label>
            <input
              className="h-[45px] w-[100%] border border-gray-200  text-[.8rem]  px-[1rem] focus:outline-[#266bf9]"
              placeholder="Password"
              type="text"
            />
          </div>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="py-[0.8rem] px-[2rem] bg-[#266bf9] text-white font-semibold text-[14px] flex justify-center items-center transition-all hover:bg-[#000000] hover:text-white"
          >
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToggleAdress;
