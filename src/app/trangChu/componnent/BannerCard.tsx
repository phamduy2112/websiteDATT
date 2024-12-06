import React from 'react';

const BannerCard = ({ title, price, buttonColor }) => {
  return (
    <div className="bg-gray-300 w-[100%] h-[100%] p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">From ${price}</p>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-gray-500">570x255</span>
        <button
          className={`px-4 py-2 text-white rounded flex items-center gap-2 ${buttonColor}`}
        >
          Shop Now <span>➜</span>
        </button>
      </div>
    </div>
  );
};

export default BannerCard;