'use client'
import { useState } from "react";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('DASHBOARD');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'DASHBOARD', title: 'DASHBOARD', icon: '📊' },
    { id: 'ORDERS', title: 'ORDERS', icon: '🛍️' },
    { id: 'DOWNLOADS', title: 'DOWNLOADS', icon: '⬇️' },
    { id: 'ADDRESSES', title: 'ADDRESSES', icon: '📍' },
    { id: 'ACCOUNT_DETAILS', title: 'ACCOUNT DETAILS', icon: '👤' },
    { id: 'LOGOUT', title: 'LOGOUT', icon: '🚪' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false); // Close mobile menu after selection
  };

  return (
    <div className="min-h-screen container bg-white">
      {/* Mobile Header */}
      
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div
          className={`${
             'block' 
          } md:block w-full md:w-64 bg-white `}
        >
          <nav className="p-4">
            {menuItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full px-4 py-3 flex items-center space-x-3 transition-all duration-200 text-center mb-1 ${
                  activeTab === item.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-[black] text-white'
                }`}
              >
                <span className="text-[.8rem] font-semibold">{item.title}</span>
              </div>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          {activeTab === 'DASHBOARD' && (
            <div className="bg-white rounded-lg  ">
              <h2 className=" font-bold mb-1 text-[.85rem]">Dashboard</h2>
              <p className="text-gray-600 text-[.9rem]">
                From your account dashboard, you can easily check & view your{' '}
                <span
                  className="text-blue-500 cursor-pointer hover:underline font-semibol"
                  onClick={() => handleTabClick('ORDERS')}
                >
                  recent orders
                </span>
                , manage your{' '}
                <span
                  className="text-blue-500 cursor-pointer hover:underline font-semibold"
                  onClick={() => handleTabClick('ADDRESSES')}
                >
                  shipping and billing addresses
                </span>{' '}
                and{' '}
                <span
                  className="text-blue-500 cursor-pointer hover:underline font-semibol"
                  onClick={() => handleTabClick('ACCOUNT_DETAILS')}
                >
                  Edit your password and account details
                </span>
                .
              </p>
            </div>
          )}

          {activeTab === 'ORDERS' && (
            <div className="bg-white rounded-lg">
  
              <div className="w-[100%] mx-auto">
              <h2 className="text-[1rem] font-bold mb-4">Orders</h2>
             
      {/* Large screens table */}
      <div className="">
      <table className="w-full border border-gray-300 border-collapse">
      <thead className="bg-[#ededed] text-[.8rem] ">
            <tr className="border-b border-blue-500 ">
              <th className="text-center py-4 px-4">Order</th>
              <th className="text-center py-4 px-4">Date</th>
              <th className="text-center py-4 px-4">Status</th>
              <th className="text-center py-4 px-4">Total</th>
              <th className="text-center py-4 px-4">Actions</th>
            </tr>
          </thead>
  <tbody className="text-[.8rem] text-center">
    <tr className="hover:bg-gray-50">
      <td className="py-4 px-4 border border-gray-300">1</td>
      <td className="py-4 px-4 border border-gray-300">May 10, 2018</td>
      <td className="py-4 px-4 border border-gray-300">
        <span className="px-3 py-1">
          Completed
        </span>
      </td>
      <td className="py-4 px-4 border border-gray-300">$25.00 For 1 Item</td>
      <td className="py-4 px-4 border border-gray-300">
        <a href="#" className="text-blue-500 hover:text-blue-700">
          View
        </a>
      </td>
    </tr>
    <tr className="hover:bg-gray-50">
      <td className="py-4 px-4 border border-gray-300">2</td>
      <td className="py-4 px-4 border border-gray-300">May 10, 2018</td>
      <td className="py-4 px-4 border border-gray-300">
        <span className="px-3 py-1 ">
          Processing
        </span>
      </td>
      <td className="py-4 px-4 border border-gray-300">$17.00 For 1 Item</td>
      <td className="py-4 px-4 border border-gray-300">
        <a href="#" className="text-blue-500 hover:text-blue-700">
          View
        </a>
      </td>
    </tr>
  </tbody>
</table>
      </div>


     
    </div>
            </div>
          )}

          {activeTab === 'DOWNLOADS' && (
       <div className="bg-white rounded-lg">
  
       <div className="w-[100%] mx-auto">
       <h2 className="font-bold mb-1 text-[.85rem]">ORDERS</h2>
      
{/* Large screens table */}
<div className="">
<table className="w-full border border-gray-300 border-collapse">
<thead className="bg-[#ededed] text-[.8rem] ">
     <tr className="border-b border-blue-500 ">
       <th className="text-center py-4 px-4">Product</th>
       <th className="text-center py-4 px-4">Downloads</th>
       <th className="text-center py-4 px-4">Expires</th>
       <th className="text-center py-4 px-4">Download</th>
     </tr>
   </thead>
<tbody className="text-[.8rem] text-center">
<tr className="hover:bg-gray-50">
<td className="py-4 px-4 border border-gray-300">Shopnovilla - Free Real Estate PSD Template	</td>
<td className="py-4 px-4 border border-gray-300">May 10, 2018	</td>
<td className="py-4 px-4 border border-gray-300">
Expired
</td>
<td className="py-4 px-4 border border-gray-300">Click Here To Download Your File</td>

</tr>

</tbody>
</table>
</div>



</div>
     </div>
          )}
          {activeTab === 'ADDRESSES' && (
            <div className="bg-white rounded-lg   text-[.9rem]">
              <h2 className="text-[1rem] font-bold mb-4">Downloads</h2>
              <p className="text-gray-600 text-[.8rem]">The following addresses will be used on the checkout page by default.</p>

<h3 className="font-semibold py-2">Billing address</h3>
<p className="text-blue-500 text-[.8rem]  pb-2">Edit</p>

<h4 className="text-[.75rem] font-semibold  pb-1">
  Michael M Hoskins
</h4>

<h4 className="text-[.75rem] font-semibold pb-1">
  City: 
  
  <span className="font-normal text-gray-600 "> 
    
    Seattle,</span></h4>
    <h4 className="text-[.75rem] font-semibold  pb-1">

  State: 
  <span className="font-normal text-gray-600  pb-1"> 
    Washington(WA),</span></h4>
    <h4 className="text-[.75rem] font-semibold">

  ZIP: 
  <span className="font-normal text-gray-600  pb-1"> 
    98101,</span></h4>
    <h4 className="text-[.75rem] font-semibold">

  Country: 
    <span className="font-normal text-gray-600  pb-1"> 
  
    USA,</span></h4>








              {/* Downloads content */}
            </div>
          )}
        
          {activeTab === 'ACCOUNT_DETAILS' && (
           


           <div className="max-w-2xl mx-auto ">
              <h2 className="text-[1.3rem] font-bold mb-1">Account details</h2>

      <div className="mb-1 text-[.8rem]">
        <span className="text-gray-600">Already have an account? </span>
        <a href="#" className="text-blue-500 hover:text-blue-600 font-semibold">
          Log in instead!
        </a>
      </div>

      <form className="space-y-4">
        <div className="flex gap-4 mb-4">
          <label className="inline-flex items-center font-semibold">
            <input
              type="radio"
              name="title"
              className="form-radio"
              value="Mr."
            />
            <span className="ml-2">Mr.</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="title"
              className="form-radio"
              value="Mrs."
            />
            <span className="ml-2">Mrs.</span>
          </label>
        </div>

        <div>
          <label className="block text-gray-700 mb-1 text-[.85rem]">First Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 text-[.85rem]">Last Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 text-[.85rem]">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 text-[.85rem]">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 text-[.85rem]">Birthdate</label>
          <input
            type="date"
            placeholder="mm/dd/yyyy"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-500 pt-2">
            (E.g.: 05/31/1970)
          </span>
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-gray-700 mb-1 text-[.85rem]">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">Receive Offers From Our Partners</span>
          </label>

          <label className="flex items-center text-gray-700 mb-1 text-[.85rem]">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">Sign Up For Our Newsletter</span>
          </label>

          <p className="text-[.8rem] text-gray-500 italic">
            You May Unsubscribe At Any Moment. For That Purpose, Please Find Our
            Contact Info In The Legal Notice.
          </p>
        </div>

        <button
          type="submit"
          className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
        >
          Save
        </button>
      </form>
    </div>
          )}

          {/* Add other tab contents similarly */}
        </div>
      </div>
    </div>
  );
}
