// components/OrderCard.js
import React from 'react';

const OrderCard = ({ order }) => {
  return (
    <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <p className="text-gray-700">{order.status}</p>
        <p className="text-gray-700">Tổng tiền: <span className="text-blue-500 font-bold">{order.totalPrice} đ</span></p>
      </div>
      <div className="flex mt-4">
        <img src={order.productImage} alt="Product" className="w-20 h-20 object-cover rounded-lg" />
        <div className="ml-4 flex-grow">
          <h2 className="text-lg font-semibold">{order.productName}</h2>
          <p className="text-sm text-gray-500">{order.sellerName}</p>
        </div>
        <div className="flex flex-col justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-2">Mua lại</button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg">Xem chi tiết</button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
