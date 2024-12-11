import React from 'react';
const NotFound = () => {
  return (
    <div className="min-h-[80vh] relative bg-gray-200 flex items-center px-4">
      <div className="text-left container  m-auto">
        <div className='z-50'>
        <h1 className="text-[4rem] font-normal ">Oops!</h1>
        <h2 className="text-[3rem] font-medium mb-6">Page not found!</h2>
        <p className="text-gray-600 mb-8">
          You could either go back or go to homepage
        </p>
        <div className="flex gap-4">
          <a href='/' 
           
            className="px-8 py-3 rounded-full bg-blue-500 text-white hover:bg-transparent hover:border hover:border-black hover:text-black transition-colors"
          >
            GO BACK
          </a>
          <a href='/' 
       
            className="px-8 py-3 rounded-full bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black transition-colors"
          >
            HOMEPAGE
          </a>
        </div>
        </div>
       
        <div className="absolute top-[50%] left-[25%] z-0 text-gray-400 text-8xl font-thin ">
          1920x1080
        </div>
      </div>
    </div>
  );
};

export default NotFound;