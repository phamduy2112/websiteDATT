// pages/orders.js
'use client'
import React, { useState } from 'react';


import OrderCard from './orderCard';
import Tabs from './tabsOrder';

const OrdersPage = () => {
  const [selectedTab, setSelectedTab] = useState("Tất cả đơn");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Sample data
  const orders = [
    {
      status: "Đã hủy",
      productName: "Sách ID luyện thi THPT QG 2021 ",
      sellerName: "MoonBook - Top 1 sách luyện thi",
      productImage: "/path/to/image.jpg",
      totalPrice: 100000,
    },
  ];

  const filteredOrders = orders.filter((order) =>
    order.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-[100%] mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Đơn hàng của tôi</h1>
      <Tabs onSelectTab={setSelectedTab} />
      <div className="mt-4 mb-4">
      <input
        type="text"
        placeholder="Tìm đơn hàng theo Mã đơn hàng, Nhà bán hoặc Tên sản phẩm"
        // onChange={(e) => onSearch(e.target.value)}
        className="border rounded-lg w-full px-4 py-2 focus:outline-none focus:border-blue-500"
      />
    </div>      <div>
        {filteredOrders.map((order, index) => (
          <OrderCard key={index} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;