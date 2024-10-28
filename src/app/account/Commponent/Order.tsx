'use client';
import { useState } from 'react';

function Order() {
  const [orders, setOrders] = useState([
    { id: 1, date: '2024-10-01', total: 150000, status: 'Đã giao' },
    { id: 2, date: '2024-10-05', total: 300000, status: 'Đang giao' },
  ]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleOrderClick = (orderId) => {
    setSelectedOrderId(selectedOrderId === orderId ? null : orderId);
  };

  return (
    <div>
      {/* Orders Section */}
      <h2 className="text-2xl font-bold mb-6">Thông Tin Đơn Hàng</h2>

      <div className="mt-6">
        <h3 className="font-semibold mb-4">Đơn Hàng</h3>
        <ul className="space-y-2">
          {orders.map(order => (
            <li key={order.id}>
              <div
                className={`border p-4 flex justify-between items-center cursor-pointer ${
                  selectedOrderId === order.id ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleOrderClick(order.id)}
              >
                <div>
                  <p>Mã Đơn: {order.id}</p>
                  <p>Ngày: {order.date}</p>
                  <p>Tổng Tiền: {order.total.toLocaleString()} VNĐ</p>
                </div>
                <span className="text-green-500">{order.status}</span>
              </div>

              {/* Order Details Section with Sliding Effect */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${selectedOrderId === order.id ? 'max-h-screen' : 'max-h-0'}`}>
                {selectedOrderId === order.id && (
                  <div className="mt-2 p-4 bg-gray-100 rounded">
                    <h3 className="font-semibold mb-2">Chi Tiết Đơn Hàng {order.id}</h3>
                    <p>Ngày: {order.date}</p>
                    <p>Tổng Tiền: {order.total.toLocaleString()} VNĐ</p>
                    <p>Trạng Thái: {order.status}</p>
                    <p>Sản phẩm:</p>
                    {/* Example product detail */}
                    <ul>
                      <li>Sản phẩm A - 1 cái - 100000 VNĐ</li>
                      <li>Sản phẩm B - 2 cái - 50000 VNĐ</li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Order;
