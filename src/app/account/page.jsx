'use client'
import { useState } from 'react';
import AccountInfo from './Commponent/AccountInfo';
import Order from './Commponent/Order';

export default function AccountPage() {
  const items = [
    { id: 'accountInfo', label: 'Thông tin tài khoản' },
    { id: 'orders', label: 'Quản lý đơn hàng' },
    { id: 'notifications', label: 'Thông báo' },
    { id: 'discounts', label: 'Mã giảm giá' },
    { id: 'membership', label: 'Membership' },
    { id: 'viewedProducts', label: 'Sản phẩm đã xem' },
  ];
 

  const [selectedItem, setSelectedItem] = useState('accountInfo');

  const handleItemClick = (item) => {
    setSelectedItem(item);
    // Add any additional logic for when an item is clicked
  };

  const renderComponent = () => {
    switch (selectedItem) {
      case 'accountInfo':
        return <AccountInfo />;
      case 'orders':
        return <Order />;
      // Add cases for other components...
      default:
        return <AccountInfo />;
    }
  };
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
  };

  

  return (
    <div className="2xl:w-[80%] mx-auto py-4 sxm:w-[95%] md:w-[90%]">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="md:w-1/4 p-4 border-b md:border-b-0 md:border-r">
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className={`p-2 ${selectedItem === item.id ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => handleItemClick(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>

        {/* Main Content */}
        <div className="md:w-3/4 p-6">
   {renderComponent()}

          {/* Orders Section
          <div className="mt-6">
            <h3 className="font-semibold mb-4">Đơn Hàng</h3>
            <ul className="space-y-2">
              {orders.map(order => (
                <li key={order.id} className="border p-4 flex justify-between items-center cursor-pointer" onClick={() => handleOrderClick(order)}>
                  <div>
                    <p>Mã Đơn: {order.id}</p>
                    <p>Ngày: {order.date}</p>
                    <p>Tổng Tiền: {order.total.toLocaleString()} VNĐ</p>
                  </div>
                  <span className="text-green-500">{order.status}</span>
                </li>
              ))}
            </ul>
          </div>

          Order Details Section
          {selectedOrder && (
            <div className="mt-6 p-4 bg-gray-100 rounded">
              <h3 className="font-semibold mb-2">Chi Tiết Đơn Hàng {selectedOrder.id}</h3>
              <p>Ngày: {selectedOrder.date}</p>
              <p>Tổng Tiền: {selectedOrder.total.toLocaleString()} VNĐ</p>
              <p>Trạng Thái: {selectedOrder.status}</p>
              <p>Sản phẩm: </p>
              <ul>
                <li>Sản phẩm A - 1 cái - 100000 VNĐ</li>
                <li>Sản phẩm B - 2 cái - 50000 VNĐ</li>
              </ul>
            </div>
          )} */}

          {/* Membership Info */}
          <div className="mt-6 p-4 bg-gray-100 rounded">
            <h3 className="font-semibold mb-2">Tổng Quan Thứ Bậc</h3>
            <p>Hạng thành viên: Gold</p>
            <p>Số điểm hiện tại: 920 Điểm</p>
            <p>Số điểm cần tích lũy thêm: 480 Điểm</p>
          </div>
        </div>
      </div>
    </div>
  );
}
