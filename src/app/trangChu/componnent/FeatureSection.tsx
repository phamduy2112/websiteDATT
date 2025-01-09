import React from 'react';
import { FaShippingFast, FaCreditCard, FaUndoAlt } from 'react-icons/fa';

const FeatureSection = () => {
  return (
    <div className="container mx-auto px-4 ">
    <div className="bg-white rounded-2xl p-6 md:p-8 border">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {/* Free Shipping */}
        <div className="flex items-center space-x-4 w-full max-w-xs">
          <div className="bg-blue-500 p-3 md:p-4 rounded-full flex-shrink-0">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-base md:text-lg">Free Shipping</h3>
            <p className="text-gray-600 text-xs md:text-sm">Capped at $39 per order</p>
          </div>
        </div>
  
        {/* Card Payments */}
        <div className="flex items-center space-x-4 w-full max-w-xs">
          <div className="bg-blue-500 p-3 md:p-4 rounded-full flex-shrink-0">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-base md:text-lg">Card Payments</h3>
            <p className="text-gray-600 text-xs md:text-sm">12 Months Installments</p>
          </div>
        </div>
  
        {/* Easy Returns */}
        <div className="flex items-center space-x-4 w-full max-w-xs">
          <div className="bg-blue-500 p-3 md:p-4 rounded-full flex-shrink-0">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-base md:text-lg">Easy Returns</h3>
            <p className="text-gray-600 text-xs md:text-sm">Shop With Confidence</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default FeatureSection;
