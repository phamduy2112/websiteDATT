import React from 'react';
import { FaShippingFast, FaCreditCard, FaUndoAlt } from 'react-icons/fa'; // Example icons

const FeatureSection = () => {
  return (
    <div className="w-[80%] mx-auto py-6">
      <div className="border rounded-lg p-6 shadow-lg flex justify-around items-center">
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
