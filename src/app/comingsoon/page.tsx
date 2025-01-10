import React from 'react';

const ComingSoon = () => {
  return (
    // <div className="flex items-center justify-center min-h-screen bg-gray-300">
    //   <div className="text-center">
    //     {/* Logo Section */}
    //     <div className="mb-8">
    //       <h1 className="text-4xl font-semibold text-blue-500">H<span className="text-black">mart</span></h1>
    //     </div>

    //     {/* Coming Soon Text */}
    //     <h2 className="text-5xl font-bold text-black mb-6">Coming Soon</h2>

    //     {/* Countdown Timer (just placeholder for now) */}
    //     <div className="flex justify-center mb-12">
    //       <div className="flex gap-8  text-black">
    //         <div className="text-center">
    //           <span className="block text-[5rem]">0</span>
    //           <span className="text-[1rem]">Days</span>
    //         </div>
    //         <div className="text-center">
    //         <span className="block text-[5rem]">0</span>
    //         <span className="text-[1rem]">Hours</span>
    //         </div>
    //         <div className="text-center">
    //         <span className="block text-[5rem]">0</span>
    //         <span className="text-[1rem]">Minutes</span>
    //         </div>
    //         <div className="text-center">
    //         <span className="block text-[5rem]">0</span>
    //         <span className="text-[1rem]">Seconds</span>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Email Input and Subscribe Button */}
        // <div className="flex justify-center">
        //   <input
        //     type="email"
        //     placeholder="Enter your e-mail address"
        //     className="px-4 py-3 rounded-l-full bg-white border-2 border-gray-400 focus:outline-none w-80"
        //   />
        //   <button className="px-6 py-3 bg-blue-500 text-white rounded-r-full font-semibold hover:bg-blue-600">
        //     Subscribe
        //   </button>
        // </div>
    //   </div>
    // </div>
    <div className="relative flex flex-col justify-center items-center w-full text-center bg-[#acabab] min-h-[406px] px-4 sm:px-8 md:px-20 py-4 sm:py-24 md:py-40 ">
    <div className="relative flex flex-col w-full max-w-[450px] z-10">
         <div className="mb-8">
          <h1 className="text-3xl font-semibold text-blue-500">H<span className="text-black">mart</span></h1>
      </div>
      {/* Title */}
      <h1 className="text-[2rem] font-semibold leading-tight text-black mb-4">
      Coming Soon
      </h1>
         <div className="flex justify-center mb-12">
         <div className="flex gap-8  text-black">
       <div className="text-center">
         <span className="block text-[5rem]">0</span>
       <span className="text-[1rem]">Days</span>
    </div>
    <div className="text-center">
    <span className="block text-[5rem]">0</span>
       <span className="text-[1rem]">Hours</span>
      </div>
      <div className="text-center">
       <span className="block text-[5rem]">0</span>
    <span className="text-[1rem]">Minutes</span>
      </div>
     <div className="text-center">
     <span className="block text-[5rem]">0</span>
      <span className="text-[1rem]">Seconds</span>
        </div>
     </div>
    </div>
      {/* Navigation */}
       <div className="flex justify-center w-[26rem] sxm:flex-col md:flex-row">
          <input
            type="email"
            placeholder="Enter your e-mail address"
            className="w-[100%] sxm:py-3 md:py-2 px-3 rounded-full text-[.7rem] outline-none"
          />
          <button className=" py-3 px-6 rounded-full text-[.9rem] bg-black text-white relative sxm:mt-2 md:left-[-2rem] md:mt-0 inline-block">
            Subscribe
          </button>
        </div>
    </div>

    {/* Background Text */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#1a191991] text-4xl sm:text-6xl md:text-8xl font-thin whitespace-nowrap opacity-50 z-0">
      1920x406
    </div>
  </div>
  );
};

export default ComingSoon;