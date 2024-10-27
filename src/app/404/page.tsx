import React from 'react';
const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Oops!</h1>
        <h2 className="text-4xl font-medium mb-6">Page not found!</h2>
        <p className="text-gray-600 mb-8">
          You could either go back or go to homepage
        </p>
        <div className="flex gap-4 justify-center">
          <button 
           
            className="px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            GO BACK
          </button>
          <button 
       
            className="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
          >
            HOMEPAGE
          </button>
        </div>
        <div className="mt-8 text-gray-400 text-8xl font-thin">
          1920x1080
        </div>
      </div>
    </div>
  );
};

export default NotFound;