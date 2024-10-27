import React from 'react';

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="text-center">
        {/* Logo Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-gray-800">Hmart</h1>
        </div>

        {/* Coming Soon Text */}
        <h2 className="text-5xl font-bold text-black mb-6">Coming Soon</h2>

        {/* Countdown Timer (just placeholder for now) */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-8 text-5xl font-bold text-black">
            <div className="text-center">
              <span className="block">0</span>
              <span className="text-sm">Days</span>
            </div>
            <div className="text-center">
              <span className="block">0</span>
              <span className="text-sm">Hours</span>
            </div>
            <div className="text-center">
              <span className="block">0</span>
              <span className="text-sm">Minutes</span>
            </div>
            <div className="text-center">
              <span className="block">0</span>
              <span className="text-sm">Seconds</span>
            </div>
          </div>
        </div>

        {/* Email Input and Subscribe Button */}
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your e-mail address"
            className="px-4 py-3 rounded-l-full bg-white border-2 border-gray-400 focus:outline-none w-80"
          />
          <button className="px-6 py-3 bg-black text-white rounded-r-full font-semibold hover:bg-gray-800">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
