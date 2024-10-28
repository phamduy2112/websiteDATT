'use client'
import React, { useState } from 'react'

function AccountInfo() {
    const [formData, setFormData] = useState({
        name: '',
        nickname: '',
        day: '',
        month: '',
        year: '',
        gender: '',
        country: '',
        phone: '',
        email: ''
      });
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to the server)
      };
  return (
    <div>
                  <h2 className="text-2xl font-bold mb-6">Thông Tin Tài Khoản</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h3 className="font-semibold">Thông Tin Cá Nhân</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nhập họ tên"
          className="border w-full p-2 mb-4"
          required
        />
        <input
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="Nhập nickname"
          className="border w-full p-2 mb-4"
          required
        />
        
        <div className="flex items-center space-x-4 mb-4">
<div className="border rounded-md p-2">
<label>
<input
type="radio"
name="gender"
value="Nam"
onChange={handleChange}
required
className="mr-2" // Add margin to the right of the radio button
/>
Nam
</label>
</div>

<div className="border rounded-md p-2">
<label>
<input
type="radio"
name="gender"
value="Nữ"
onChange={handleChange}
required
className="mr-2" // Add margin to the right of the radio button
/>
Nữ
</label>
</div>

<div className="border rounded-md p-2">
<label>
<input
type="radio"
name="gender"
value="Khác"
onChange={handleChange}
className="mr-2" // Add margin to the right of the radio button
/>
Khác
</label>
</div>
</div>

        <select
          name="country"
          onChange={handleChange}
          className="border w-full p-2 mb-4"
          required
        >
          <option value="">Chọn quốc tịch</option>
          <option value="Vietnam">Vietnam</option>
          <option value="US">US</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2"
        >
          Lưu
        </button>
      </form>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="font-semibold">Số điện thoại và Email</h3>
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Số điện thoại"
        className="border w-full p-2 mb-4"
        required
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Địa chỉ email"
        className="border w-full p-2 mb-4"
        type="email"
        required
      />
      <button className="bg-blue-500 text-white px-4 py-2 mb-4">
        Cập nhật
      </button>
    
    </div>
  </div>
    </div>

  )
}

export default AccountInfo