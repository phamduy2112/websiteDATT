import React from "react";
import Link from "next/link";

const Gioithieu = () => {
  return (
    
    <div>
       {/* Breadcrumb Area */}
       <div className="breadcrumb-area relative bg-gray-300 min-h-[35vh]" style={{ borderRadius: '20px' }}>
        <div className="text-left container m-auto">
          <div className='absolute top-[30%] left-1/2 transform -translate-x-1/2 z-[10] text-center'>
            <h2 className='text-[3rem] font-semibold'>About Us</h2>
            <div className="flex gap-6 justify-center items-center max-w-full text-[1rem] leading-none uppercase whitespace-nowrap">
              <Link href="/" className="text-black hover:text-blue-600">Home</Link>
              <div className="text-blue-600"> // About Us</div>
            </div>
          </div>
          <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 z-0 text-gray-400 text-8xl font-thin ">
            1920x406
          </div>
        </div>
      </div>
      {/* Meta tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="stylesheet" href="./global.css" />
      <link 
        rel="stylesheet" 
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap" 
      />

      {/* Main Container */}
      <div className="w-full [background:linear-gradient(#fff,_#fff),_#fff] min-h-screen text-center text-[24px] text-[#000] font-[Poppins]">
        


        {/* 2. Smart Fashion Section */}
        <div className="w-full bg-[#f4f4f4] py-16">
          <div className="max-w-[890px] mx-auto">
            <div className="text-[48px] text-[#444141] mb-12">
              <div className="leading-[40px] font-light mb-4">Smart Fashion</div>
              <div className="text-[60px] leading-[40px] font-bold">With Smart Devices</div>
            </div>
            <div className="text-[16px] leading-[32px] text-[#3a3a3a]">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
              <p>magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comml</p>
              <p>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p>Excepteur sint occaecat cupidatat non proident sunt in culpa</p>
            </div>
          </div>

          {/* Video Banner */}
          <div className="max-w-[1170px] mx-auto mt-16 relative">
            <iframe
              className="rounded-[25px] w-full h-[468px]"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* 3. Team Member Section */}
        <div className="max-w-[1200px] mx-auto py-8 sm:py-12 md:py-16 lg:py-20 px-4">
          {/* Header */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] 
                           leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[34px] 
                           font-semibold mb-4 sm:mb-6 md:mb-8">
              Team Member
            </h2>
            <p className="text-[14px] sm:text-[16px] md:text-[18px]
                          leading-[24px] sm:leading-[26px] md:leading-[30px] 
                          text-[#595959]">
              There are many variations of passages of Lorem Ipsum available
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              "Sara Koivisto",
              "Anaiah Whitten", 
              "Rachel Leonard"
            ].map((name, index) => (
              <div key={index} className="flex flex-col">
                {/* Image Container */}
                <div className="relative h-[280px] sm:h-[340px] md:h-[380px] lg:h-[420px] overflow-hidden">
                  <img 
                    className="w-full h-full object-cover"
                    alt=""
                    src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/team/1.webp"
                  />
                  <div className=" bg-[#266bf9] 
                                  w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]
                                  h-[35px] sm:h-[38px] md:h-[40px] lg:h-[43px]
                                  -bottom-[45px] left-1/2 transform -translate-x-1/2" />
                </div>

                {/* Text Content */}
                <div className="bg-white p-3 sm:p-4 text-center">
                  <div className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]
                                  leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28.8px]
                                  font-medium mb-1 sm:mb-2">
                    {name}
                  </div>
                  <div className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px]
                                  leading-[14px] sm:leading-[15px] md:leading-[16px]
                                  uppercase">
                    Team Member
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* 4. Features Section */}
<div className="max-w-[1200px] mx-auto py-12 sm:py-16 md:py-20 px-4">
  <div className="border-[2px] border-[#e1e1e1] rounded-[20px] p-8 sm:p-12 md:p-16">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          icon: "1.png",
          title: "Free Shipping",
          desc: "Capped at $39 per order"
        },
        {
          icon: "2.png", 
          title: "Card Payments",
          desc: "12 Months Installments"
        },
        {
          icon: "3.png",
          title: "Easy Returns",
          desc: "Shop With Confidence"
        }
      ].map((feature, index) => (
        <div key={index} className="flex flex-col sm:flex-col md:flex-row items-center text-center md:text-left gap-4 md:gap-8">
          <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full bg-[#266bf9] flex items-center justify-center shrink-0">
            <img 
              className="w-[40px] h-[30px] md:w-[46px] md:h-[34px] object-cover"
              alt=""
              src={`https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/icons/${feature.icon}`}
            />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="text-[20px] md:text-[24px] leading-[28.8px] font-semibold mb-2">
              {feature.title}
            </div>
            <div className="text-[14px] md:text-[16px] leading-[24px] md:leading-[32px]">
              {feature.desc}
            </div>
          </div>
        </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Client Feedback Section */}
        <div className="w-full bg-[#f2f8fd] py-12 sm:py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] leading-[34px] font-semibold mb-6 md:mb-8">
              Client Feedback
            </h2>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[30px] text-[#595959] mb-12 md:mb-16">
              There are many variations of passages of Lorem Ipsum available
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((_, index) => (
                <div key={index} className="flex flex-col text-left">
                  <i className="text-[16px] sm:text-[18px] md:text-[20px] leading-[32px] md:leading-[36px] text-[#000] mb-6 md:mb-8">
                    <p>Lorem ipsum dolor sit amel adipiscing elit, sed do</p>
                    <p>eiusll tempor incididunt ut laborj et dolore magna</p>
                    <p>sed do eiusll tempor dolore.</p>
                  </i>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img 
                      className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] object-cover"
                      alt=""
                      src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/testimonial/1.png"
                    />
                    <div>
                      <div className="text-[16px] sm:text-[17px] md:text-[18px] leading-[18px] font-semibold text-[#266bf9]">
                        Regan Rosen
                      </div>
                      <div className="text-[14px] sm:text-[15px] md:text-[16px] leading-[16px] text-[#444141]">
                        Client
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6. Latest Blog Section */}
        <div className="max-w-[1200px] mx-auto py-12 sm:py-16 md:py-20 px-4">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] leading-[34px] font-semibold mb-6 md:mb-8">
            Latest Blog
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[30px] text-[#595959] mb-12 md:mb-16">
            There are many variations of passages of Lorem Ipsum available
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[1, 2].map((_, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-8 text-left">
                <div className="rounded-[20px] overflow-hidden w-full md:w-1/2">
                  <img 
                    className="w-full h-[250px] sm:h-[300px] md:h-[450px] object-cover"
                    alt=""
                    src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/blog-image/1.webp"
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2">
                  <div className="flex items-center gap-4 text-[20px] sm:text-[15px] md:text-[14px] mb-4">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <div className="font-medium">27,Jun 2030</div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="font-medium">Oaklee Odom</span>
                    </div>
                  </div>
                  
                  <h3 className="text-[20px] sm:text-[22px] md:text-[24px] leading-[32px] md:leading-[35px] font-semibold text-[#2b2b2b] mb-4">
                    Lorem ipsum dolor sit amet conse adip
                  </h3>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[28px] md:leading-[32px] text-[#3a3a3a] mb-6 md:mb-8">
                    Lorem ipsum dolor sit amet consl adipisi elit
                  </p>
                  
                  <button className="w-[160px] sm:w-[170px] md:w-[180px] h-[45px] sm:h-[50px] md:h-[54px] rounded-[18px] bg-[#4e4e4e] text-white text-[16px] sm:text-[17px] md:text-[18px] font-semibold flex items-center justify-center gap-2">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Gioithieu;