import React from 'react';

const EmptyCart = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-semibold mb-8">Your cart item</h1>
      
      <div className="border-2 border-gray-300 p-4 rounded-lg mb-4">
        <div className="w-8 h-8 text-gray-400"  />
      </div>
      
      <p className="text-gray-600 mb-6">There are no more items in your cart</p>
      
      <button 
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full transition-colors"
      >
        CONTINUE SHOPPING
      </button>
    </div>
  );
};

export default EmptyCart;