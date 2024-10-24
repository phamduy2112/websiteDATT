'use client'
import { useState } from 'react';

export default function Toogle() {
  const [isOpen, setIsOpen] = useState(false);
    const [isOpenToggle,setIsOpenToggle]=useState(false)

  // Function to toggle the login form
  const toggleForm = () => {
    setIsOpen(!isOpen);
  };
  const toggleDiscount=()=>{
    setIsOpenToggle(!isOpenToggle)
  }

  return (
    <div className="py-[1rem]">
      {/* Button to toggle the login form */}
      <button
        className="bg-gray-100 text-gray-700 w-[100%] py-2 px-[2rem] text-[.8rem] rounded flex justify-start"
        onClick={toggleForm}
      >


        {isOpen ? 'Returning customer? Click here to login' : 'Returning customer? Click here to login'}
      </button>

      {/* The login form with sliding effect */}
      <div
        className={`overflow-hidden transition-max-height duration-1000 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <form className="mt-4 w-[100%] p-6 rounded-lg border border-gray-100 ">
            <h3 className='text-[.8rem]'>Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est sit amet ipsum luctus.

</h3>
        <div className="checkout-account-toggle w-[400px] open-toggle2 mb-30 mt-[1rem]">
    <input  className="h-[45px] w-[100%] border border-gray-200 px-[1rem] text-[.8rem] focus:outline-[#266bf9] mb-[1rem]"placeholder="Email address" type="email" />
    <input  className="h-[45px] w-[100%] border border-gray-200  text-[.8rem]  px-[1rem] focus:outline-[#266bf9]"placeholder="Password" type="password" />
    <button className="btn-hover checkout-btn text-white bg-[#266bf9] h-[45px] px-[1rem] mt-[1rem] text-[0.8rem]" type="submit">Login</button>
  </div>
        </form>
      </div>
    <div className='mt-[1.5rem]'>
    <button
        className="bg-gray-100 text-gray-700 w-[100%] py-2 px-[2rem] text-[.8rem] rounded flex justify-start"
        onClick={toggleDiscount}
      >


        {isOpenToggle ? 'Returning customer? Click here to login' : 'Returning customer? Click here to login'}
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-1000 ease-in-out ${
            isOpenToggle ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <form className="mt-4 w-[100%] p-6 rounded-lg border border-gray-100 ">
            <h3 className='text-[.8rem]'>Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est sit amet ipsum luctus.

</h3>
        <div className=" w-[400px] flex gap-[.5rem] mb-30 mt-[1rem]">
    <input  className="h-[45px] w-[100%] border border-gray-200  text-[.8rem]  px-[1rem] focus:outline-[#266bf9] mb-[1rem]"placeholder="Email address" type="email" />
  
    <button className=" text-white bg-[#266bf9] text-[.8rem] px-[1rem] h-[45px]" type="submit">Submit</button>
  </div>
        </form>
      </div>
    </div>
    </div>
  );
}