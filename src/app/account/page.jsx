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
        <div className="md:w-[20%] p-4 border-b md:border-b-0 md:border-r">
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
        <div className="md:w-[75%] p-6">
   {renderComponent()}

        
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
