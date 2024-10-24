import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./component/Navbar";


const Header = () => {
  return (
    <header>
 <div className="bg-gray-900 text-gray-300 py-2">
  <div className="container mx-auto flex justify-between items-center px-4 flex-wrap md:flex-nowrap">
    {/* Left section */}
    <div className="text-xs sm:text-sm text-center md:text-left w-full md:w-auto mb-2 md:mb-0">
      World Wide Completely Free Returns and Shipping
    </div>

    {/* Right section */}
    <div className="flex items-center space-x-4 w-full md:w-auto justify-center md:justify-end">
      <div className="flex items-center space-x-2">
        {/* Phone icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2.003 5.884A16.088 16.088 0 0010 14a16.088 16.088 0 007.997-8.116.75.75 0 00-.585-.926l-3.068-.513a.75.75 0 00-.857.454L12.1 6.698a.75.75 0 01-.693.45h-.002a9.759 9.759 0 01-2.708-.487l-.027-.01a9.758 9.758 0 01-1.843-.92.75.75 0 01-.225-.866L6.588 4.007a.75.75 0 00-.62-.454l-3.068.513a.75.75 0 00-.897.818z" />
        </svg>
        <span className="text-xs sm:text-sm">+012 3456 789</span>
      </div>

      <div className="flex items-center space-x-2">
        {/* Email icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2.94 3.44A2.5 2.5 0 015.5 2h9a2.5 2.5 0 012.56 1.44L10 9.48 2.94 3.44z" />
          <path d="M18 8.82l-6.74 4.26a2.5 2.5 0 01-2.52 0L2 8.82V14a2.5 2.5 0 002.5 2.5h11A2.5 2.5 0 0018 14V8.82z" />
        </svg>
        <span className="text-xs sm:text-sm">demo@example.com</span>
      </div>

      <div className="flex items-center space-x-2">
        {/* Account icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a5 5 0 100 10A5 5 0 0010 2zm-3 5a3 3 0 116 0 3 3 0 01-6 0zm3 7c-3.185 0-6 1.19-6 2.5V17a1 1 0 001 1h10a1 1 0 001-1v-.5c0-1.31-2.815-2.5-6-2.5z" clipRule="evenodd" />
        </svg>
        <a href="#" className="text-gray-300 hover:text-white text-xs sm:text-sm">Account</a>
      </div>
    </div>
  </div>
</div>

<div className="bg-gray-900 text-gray-300 py-3">
  <div className="container mx-auto flex justify-between items-center px-4">
    {/* Left section (Logo) */}
    <div className="text-2xl font-bold">
      <a href="#" className="text-blue-500">H</a><span className="text-white">mart</span>
    </div>
    {/* Center section (Search Bar) */}
    <div className="w-1/2">
      <div className="flex">
        <input type="text" placeholder="Search" className="w-full py-2 px-4 rounded-l-md bg-gray-100 text-gray-900 focus:outline-none" />
        <button className="bg-blue-500 px-4 rounded-r-md flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.95 4.95a1 1 0 01-1.414 1.414l-4.95-4.95zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
    {/* Right section (Icons) */}
    <div className="flex items-center space-x-6">
      {/* Wishlist Icon */}
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.8 4.6a5.6 5.6 0 00-7.9 0L12 5.5l-.9-.9a5.6 5.6 0 00-7.9 7.9l.9.9L12 21l8.9-8.9.9-.9a5.6 5.6 0 000-7.9z" />
        </svg>
      </div>
      {/* Cart Icon */}
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx={9} cy={21} r={1} />
          <circle cx={20} cy={21} r={1} />
          <path d="M1 1h4l1.68 10.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
        </svg>
        {/* Cart Notification Badge */}
        <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">01</span>
      </div>
    </div>
  </div>
</div>
<Navbar/>

    </header>
  );
};

export default Header;
