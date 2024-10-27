import React from 'react';
import { FaShippingFast, FaCreditCard, FaUndoAlt } from 'react-icons/fa';

const FeatureSection = () => {
  return (
    <div className="2xl:w-[80%] m-auto py-6 sxm:w-[95%] md:w-[90%]">
      <div className="border rounded-lg p-6 shadow-lg grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        
        {/* Free Shipping */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white rounded-full p-4 mb-3">
            <FaShippingFast size={30} />
          </div>
          <h3 className="font-bold">Free Shipping</h3>
          <p className="text-gray-500 text-sm">Capped at $39 per order</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white rounded-full p-4 mb-3">
            <FaShippingFast size={30} />
          </div>
          <h3 className="font-bold">Free Shipping</h3>
          <p className="text-gray-500 text-sm">Capped at $39 per order</p>
        </div>

        {/* Card Payments */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white rounded-full p-4 mb-3">
            <FaCreditCard size={30} />
          </div>
          <h3 className="font-bold">Card Payments</h3>
          <p className="text-gray-500 text-sm">12 Months Installments</p>
        </div>

        {/* Easy Returns */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white rounded-full p-4 mb-3">
            <FaUndoAlt size={30} />
          </div>
          <h3 className="font-bold">Easy Returns</h3>
          <p className="text-gray-500 text-sm">Shop With Confidence</p>
        </div>

      </div>
    </div>
  );
};

export default FeatureSection;
