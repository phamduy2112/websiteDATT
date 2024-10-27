import React from 'react';

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      {/* Check Icon Circle */}
      <div className="w-24 h-24 rounded-full border-8 border-green-500 flex items-center justify-center mb-8">
        <div className="w-12 h-12 text-green-500" strokeWidth={4} />
      </div>

      {/* Confirmation Message */}
      <p className="text-gray-700 text-xl mb-8 text-center">
        Thank you for ordering in our store. You will receive a confirmation email shortly.
      </p>

      {/* Continue Shopping Button */}
      <button
        className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mb-16"
      >
        Continue Shopping
      </button>

      {/* Quick Order Section */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Call Us for Quick Order
        </h2>
        <a 
          href="tel:01234567890" 
          className="text-2xl text-red-500 hover:text-red-600 transition-colors"
        >
          01 234 567 890
        </a>
      </div>
    </div>
  );
};

export default OrderConfirmation;