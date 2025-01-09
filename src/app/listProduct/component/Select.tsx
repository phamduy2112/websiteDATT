'use strict';
import React, { useState } from "react";

const DropdownSelect = () => {
  const [selectedOption, setSelectedOption] = useState(""); // Lưu giá trị được chọn

  const options = [
    { value: "home", label: "Home" },
    { value: "about", label: "About" },
    { value: "services", label: "Services" },
    { value: "contact", label: "Contact" },
  ];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-[13rem] h-[2.5rem]">
    
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleChange}
        className="w-full text-[.9rem] px-4 py-2 border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>
        Sort by: Default
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    
    </div>
  );
};

export default DropdownSelect;
