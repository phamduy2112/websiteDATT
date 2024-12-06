import React from 'react';

const OrderDetailCart = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Order Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Chi tiết đơn hàng #965902309 - <span className="text-red-500">Hủy</span></h2>
        <p className="text-gray-600">Ngày đặt hàng: 11:56 08/12/2021</p>
      </div>

      {/* Information Sections */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Recipient Address */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-gray-600 font-semibold">ĐỊA CHỈ NGƯỜI NHẬN</h3>
          <p className="mt-2 font-semibold">PHẠM DUY</p>
          <p>Địa chỉ: 15 5 mới 2 xã chung chanh huyện hóc môn, Xã Trung Chánh, Huyện Hóc Môn, Hồ Chí Minh</p>
          <p>Điện thoại: 0388088105</p>
        </div>

        {/* Delivery Method */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-gray-600 font-semibold">HÌNH THỨC GIAO HÀNG</h3>
          <p className="mt-2 font-semibold text-yellow-500">FAST Giao Tiết Kiệm</p>
          <p>Giao vào Thứ tư, 15/12</p>
          <p>Được giao bởi TikiNOW Smart Logistics (giao từ Hà Nội)</p>
          <p>Phí vận chuyển: 5.000đ</p>
        </div>

        {/* Payment Method */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-gray-600 font-semibold">HÌNH THỨC THANH TOÁN</h3>
          <p className="mt-2">Thanh toán tiền mặt khi nhận hàng</p>
        </div>
      </div>

      {/* Product List */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-gray-600 font-semibold mb-4">Sản phẩm</h3>
        <div className="flex items-center gap-4">
          {/* Product Image */}
          <img
            src="https://via.placeholder.com/80"
            alt="Product"
            className="w-20 h-20 object-cover rounded"
          />
          {/* Product Details */}
          <div className="flex-1">
            <p className="font-semibold">Sách ID luyện thi THPT QG 2021 theo chuyên đề Tự Học Mũ và Logarit mới nhất</p>
            <p className="text-sm text-gray-500">Cung cấp bởi MoonBook - Top 1 sách luyện thi</p>
            <p className="text-sm text-gray-500">Sku: 6795484095982</p>
            <div className="mt-2 flex gap-4">
              <button className="px-3 py-1 bg-blue-500 text-white rounded">Chat với nhà bán</button>
              <button className="px-3 py-1 bg-gray-200 rounded">Mua lại</button>
            </div>
          </div>
          {/* Price */}
          <div className="text-right">
            <p className="font-semibold">Giá: 115.000đ</p>
            <p className="text-gray-500">Số lượng: 1</p>
            <p className="text-gray-500">Giảm giá: 20.000đ</p>
            <p className="font-semibold text-blue-500">Tạm tính: 95.000đ</p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between mb-2">
          <p>Tạm tính</p>
          <p>115.000đ</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Phí vận chuyển</p>
          <p>35.000đ</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Giảm giá vận chuyển</p>
          <p>-30.000đ</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Giảm giá</p>
          <p>-20.000đ</p>
        </div>
        <div className="flex justify-between font-semibold text-red-500 text-lg">
          <p>Tổng cộng</p>
          <p>100.000đ</p>
        </div>
      </div>

      {/* Back Link */}
      <div className="mt-4">
        <a href="/orders" className="text-blue-500 hover:underline">Quay lại đơn hàng của tôi</a>
      </div>
    </div>
  );
};

export default OrderDetailCart;