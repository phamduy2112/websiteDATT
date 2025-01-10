import React from 'react';

const BannerCard2 = ({ title, price, buttonColor }) => {
  return (
    <div className="bg-[#acabab] relative w-[100%] h-[100%] p-6 flex flex-col justify-between">
      <div className="flex absolute top-[50%] left-[50%] translate-x-[-50%] items-center justify-center text-gray-700 font-bold text-2xl">
        572x542
      </div>
      <div className="mt-auto">
        <h3 className="text-[1.5rem] w-[50%] font-semibold text-gray-500">{title}</h3>
        <div>

        </div>
        <div className='flex  justify-between'>
        <p className="text-gray-600 mt-[2rem] font-semibold">From ${price}</p>
        <button
          className={`mt-4 px-3 py-2 text-white  text-[.7rem] rounded-lg bg-[#266bf9] hover:bg-black font-semibold flex items-center gap-2 ${buttonColor}`}
        >
          Shop Now <span>➜</span>
        </button>
        </div>
   
      </div>
    </div>
  );
};

export default BannerCard2;