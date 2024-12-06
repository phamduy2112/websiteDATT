import React from 'react';

const BannerCard2 = ({ title, price, buttonColor }) => {
  return (
    <div className="bg-gray-300 w-[100%] h-[100%] p-6 flex flex-col justify-between">
      <div className="flex items-center justify-center text-gray-700 font-bold text-2xl">
        572x542
      </div>
      <div className="mt-auto">
        <h3 className="text-lg font-semibold text-gray-500">{title}</h3>
        <p className="text-gray-600">From ${price}</p>
        <button
          className={`mt-4 px-4 py-2 text-white rounded flex items-center gap-2 ${buttonColor}`}
        >
          Shop Now <span>➜</span>
        </button>
      </div>
    </div>
  );
};

export default BannerCard2;