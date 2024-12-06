// components/Tabs.js
import React, { useState } from 'react';

const Tabs = ({ onSelectTab }) => {
  const tabs = ["Tất cả đơn", "Chờ thanh toán", "Đang xử lý", "Đang vận chuyển", "Đã giao", "Đã hủy"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex space-x-4 border-b bg-white border-gray-200">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => { setActiveTab(index); onSelectTab(tab); }}
          className={`py-2 px-4 ${
            activeTab === index ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
