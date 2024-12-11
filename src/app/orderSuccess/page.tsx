import React from 'react';
import Link from 'next/link';

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      {/* Check Icon Circle */}
      <div className="w-40 h-40 mb-[1.1rem]">
        <img src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/icons/cmpted_logo.png" alt="" />
      </div>

      {/* Confirmation Message */}
      <p className="text-gray-700 text-[1rem] mb-8 text-center">
        Thank you for ordering in our store. You will receive a confirmation email shortly.
      </p>

      {/* Continue Shopping Button */}
      <Link href="/">
        <button className="px-8 py-3 bg-blue-600 text-white rounded hover:bg-black transition-colors mb-12">
          Continue Shopping
        </button>
      </Link>

      {/* Quick Order Section */}
      <div className="text-center">
        <h2 className="text-[1.9rem] font-normal mb-3">
          Call Us for Quick Order
        </h2>
        <a 
          href="tel:01234567890" 
          className="text-[1.1rem] text-red-500  hover:text-red-600 transition-colors font-semibold"
        >
          01 234 567 890
        </a>
      </div>
    </div>
  );
};

export default OrderConfirmation;