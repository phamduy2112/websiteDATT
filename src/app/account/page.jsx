'use client';

import React, { useState } from 'react';

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState('DASHBOARD');
// đẩy code 2
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const orders = [
    { id: 1, date: 'May 10, 2018', status: 'Completed', total: '$25.00', items: 1 },
    { id: 2, date: 'June 15, 2018', status: 'Processing', total: '$50.00', items: 2 },
  ];

  const downloads = [
    { id: 1, product: 'Product 1', date: 'May 10, 2018', expires: 'Expired', link: '#' },
    { id: 2, product: 'Product 2', date: 'June 15, 2018', expires: 'Never', link: '#' },
  ];

  return (
    <div className="min-h-screen bg-white flex justify-center items-start">
      <div className="w-4/5 bg-white rounded-lg p-10 ">
        <div className="flex">
          <div className="flex-col space-y-4 mr-8">
            <div
              className={`bg-black text-white text-sm p-2 cursor-pointer ${
                activeTab === 'DASHBOARD' ? 'bg-blue-500' : ''
              }`}
              onClick={() => handleTabClick('DASHBOARD')}
            >
              DASHBOARD
            </div>
            <div
              className={`bg-black text-white text-sm p-2 cursor-pointer ${
                activeTab === 'ORDERS' ? 'bg-blue-500' : ''
              }`}
              onClick={() => handleTabClick('ORDERS')}
            >
              ORDERS
            </div>
            <div
              className={`bg-black text-white text-sm p-2 cursor-pointer ${
                activeTab === 'DOWNLOADS' ? 'bg-blue-500' : ''
              }`}
              onClick={() => handleTabClick('DOWNLOADS')}
            >
              DOWNLOADS
            </div>
            <div
              className={`bg-black text-white text-sm p-2 cursor-pointer ${
                activeTab === 'ADDRESSES' ? 'bg-blue-500' : ''
              }`}
              onClick={() => handleTabClick('ADDRESSES')}
            >
              ADDRESSES
            </div>
            <div
              className={`bg-black text-white text-sm p-2 cursor-pointer ${
                activeTab === 'ACCOUNT DETAILS' ? 'bg-blue-500' : ''
              }`}
              onClick={() => handleTabClick('ACCOUNT DETAILS')}
            >
              ACCOUNT DETAILS
            </div>
          </div>
          <div className="flex-1">
            {activeTab === 'ORDERS' && (
              <div className="py-4">
                <h2 className="text-2xl font-bold mb-4 text-black">Orders</h2>
                <table className="w-full border-collapse bg-white">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="py-2 px-4 text-left text-black">Order</th>
                      <th className="py-2 px-4 text-left text-black">Date</th>
                      <th className="py-2 px-4 text-left text-black">Status</th>
                      <th className="py-2 px-4 text-left text-black">Total</th>
                      <th className="py-2 px-4 text-left text-black">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className="border-b hover:bg-gray-100">
                        <td className="py-2 px-4 text-black">{order.id}</td>
                        <td className="py-2 px-4 text-black">{order.date}</td>
                        <td className="py-2 px-4 text-black">{order.status}</td>
                        <td className="py-2 px-4 text-black">{order.total}</td>
                        <td className="py-2 px-4 text-black ">
                          <a href={`/orders/${order.id}`} className="text-blue-500 hover:text-blue-700">
                            View
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'DOWNLOADS' && (
              <div className="py-4">
                <h2 className="text-2xl font-bold mb-4 text-black">Downloads</h2>
                <table className="w-full border-collapse bg-white">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="py-2 px-4 text-left text-black">Product</th>
                      <th className="py-2 px-4 text-left text-black">Downloads</th>
                      <th className="py-2 px-4 text-left text-black">Expires</th>
                      <th className="py-2 px-4 text-left text-black">Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {downloads.map((download) => (
                      <tr key={download.id} className="border-b hover:bg-gray-100">
                        <td className="py-2 px-4 text-black">{download.product}</td>
                        <td className="py-2 px-4 text-black">{download.date}</td>
                        <td className="py-2 px-4 text-black">{download.expires}</td>
                        <td className="py-2 px-4 text-black">
                          <a href={download.link} className="text-blue-500 hover:text-blue-700">
                            Click Here To Download Your File
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'ACCOUNT DETAILS' && (
              <div className="py">
                <h3 className="text-2 font-bold text-black">Account details</h3>
                <div className="login">
                  <div className="login_form_container">
                    <div className="account_login_form">
                      <form action="#" className="mx-auto flex-1">
                        <p className="mb-2 text-1 text-black">
                          Already have an account? <></>
                          <a href="#" className="text-blue-500" data-bs-toggle="modal" data-bs-target="#loginActive">
                            Log in instead!
                          </a>
                        </p>
                        <div className="input-radio mb-1">
                          <span className="custom-radio py-1 text-black">
                            <input type="radio" value="1" name="id_gender" /> Mr.
                          </span> 
                          <span className="custom-radio ml-4 py-1 text-black">
                            <input type="radio" value="2" name="id_gender" /> Mrs.
                          </span>
                        </div>
                        <div className="default-form-box mb-1 py-1">
                          <label className="text-black">First Name</label>
                          <input type="text" name="first-name" className="border p-2 w-full" />
                        </div>
                        <div className="default-form-box mb-1 py-1">
                          <label className="text-black">Last Name</label>
                          <input type="text" name="last-name" className="border p-2 w-full" />
                        </div>
                        <div className="default-form-box mb-1 py-1">
                          <label className="text-black">Email</label>
                          <input type="text" name="email-name" className="border p-2 w-full" />
                        </div>
                        <div className="default-form-box mb-1 py-1">
                          <label className="text-black">Password</label>
                          <input type="password" name="user-password" className="border p-2 w-full" />
                        </div>
                        <div className="default-form-box mb-1 py-1">
                          <label className="text-black">Birthdate</label>
                          <input type="date" name="birthday" className="border p-2 w-full" />
                        </div>
                        <label className="checkbox-default mb-1 py-1" htmlFor="offer">
                          <input type="checkbox" id="offer" />
                          <span className="text-black"> Receive offers from our partners</span>
                        </label><br />
                        <label className="checkbox-default mb-1 py-1" htmlFor="newsletter">
                          <input type="checkbox" id="newsletter" />
                          <span className="text-black"> Sign up for our newsletter
                            <br />
                            <em className='text-[#3B3B3B]'>50 You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</em>
                          </span>
                        </label>
                        <div className="save_button mt-3">
                          <button className="btn bg-[#3B3B3B] text-white p-2 rounded hover:bg-blue-500" type="submit">
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;