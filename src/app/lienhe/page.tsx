import React from "react";

const Lienhe = () => {
  return (
    <div className="flex flex-col pb-2 bg-white w-full relative">
      <div className="flex relative flex-col justify-center items-center px-20 py-40 w-full text-center bg-[#acabab] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex  flex-col mb-0 max-w-full w-[300px] max-md:mb-2.5">
          <div className="text-5xl leading-tight text-black max-w-[617px] max-md:text-4xl">
            Contact Us
          </div>
          <div className="flex gap-6 self-center max-w-full text-[1rem] leading-none uppercase whitespace-nowrap w-[172px]">
            <div className="text-black">Home</div>
            <div className="grow shrink text-blue-600 w-[92px]"> // Contact</div>
          </div>
          <div className="absolute top-[40%] left-[40%] z-0 text-[#1a191991] text-8xl font-thin ">
          1920x406
        </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center px-5 md:px-20 pt-28 pb-5 w-full max-w-[1200px] max-md:pt-24 bg-neutral-100">
          <div className="flex flex-col w-full max-w-[1000px]">
            <div className="self-center text-5xl font-medium leading-none text-center text-black max-md:text-4xl">
              Send A Quest
            </div>
            <div className="flex flex-wrap gap-8 mt-14 justify-between text-sm font-light whitespace-nowrap text-neutral-400 max-md:mt-10 w-full">
              <input 
                type="text"
                placeholder="Name*"
                className=" bg-white py-3 px-4 rounded-2xl border border-solid border-zinc-300 w-full md:w-[47%] outline-none"
              />
              <input 
                type="email"
                placeholder="Email*"
                className=" bg-white  py-3 px-4 rounded-2xl border border-solid border-zinc-300 w-full md:w-[47%] outline-none"
              />
            </div>
            <input 
              type="text"
              placeholder="Subject*"
              className="py-3 px-4  mt-8 text-sm font-light bg-white rounded-2xl border border-solid border-zinc-300 text-neutral-400 w-full outline-none"
            />
            <textarea 
              placeholder="Your message..."
              className="w-full py-3 px-4  mt-8 bg-white rounded-2xl border border-solid border-zinc-300 h-[250px] resize-none outline-none"
            />
            <div className="self-center px-15 py-6 mt-16 text-lg font-semibold leading-none text-center text-white bg-blue-600 rounded-2xl w-full md:w-[230px] max-md:mt-10 cursor-pointer hover:bg-black transition-colors">
              Send Message
            </div>
            <div className="mt-32 max-md:mt-10 max-sm:mt-8">
              <div className="flex flex-wrap gap-5 justify-center max-md:flex-col max-sm:flex-col">
                <div className="flex flex-col w-full md:w-[30%] max-md:w-full max-sm:w-full">
                  <div className="flex flex-col items-center px-6 py-9 w-full text-center bg-white rounded-xl shadow-[4px_0px_20px_rgba(0,0,0,0.1)] max-md:px-4 max-sm:px-3 max-sm:py-6">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/55e4fbdde8ee4408a0c35da726195dfe/6ff374c529827dc37922876a73862b08d7a8db1e9117e6e3ff7f7723eba4cea2?apiKey=55e4fbdde8ee4408a0c35da726195dfe&width=100 100w"
                      className="object-contain aspect-square w-[65px]"
                      alt="Address Icon"
                    />
                    <div className="mt-5 text-xl font-medium leading-tight text-zinc-800 max-sm:text-lg">
                      Address
                    </div>
                    <div className="mt-4 text-base leading-6 text-black max-sm:text-sm">
                      Your address goes here.
                      <br />
                      123 Your Location
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full md:w-[30%] max-md:w-full max-sm:w-full">
                  <div className="flex flex-col items-center px-6 py-8 w-full text-center bg-white rounded-xl shadow-[4px_0px_20px_rgba(0,0,0,0.1)] max-md:px-4 max-sm:px-3 max-sm:py-6">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/55e4fbdde8ee4408a0c35da726195dfe/27c5146b41092d3e4a89c31f4d229caa25665a2afe89b22bf4916452d29083ae?apiKey=55e4fbdde8ee4408a0c35da726195dfe&width=100 100w"
                      className="object-contain aspect-square w-[65px]"
                      alt="Phone Icon"
                    />
                    <div className="mt-5 text-xl font-medium leading-tight text-zinc-800 max-sm:text-lg">
                      Phone No
                    </div>
                    <div className="mt-4 text-base leading-6 text-black max-sm:text-sm">
                      +012 345 67 89
                    </div>
                    <div className="mt-2 max-sm:text-sm">+012 345 67 89</div>
                  </div>
                </div>
                <div className="flex flex-col w-full md:w-[30%] max-md:w-full max-sm:w-full">
                  <div className="flex flex-col items-center px-6 py-8 w-full text-center bg-white rounded-xl shadow-[4px_0px_20px_rgba(0,0,0,0.1)] max-md:px-4 max-sm:px-3 max-sm:py-6">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/55e4fbdde8ee4408a0c35da726195dfe/3554e7b29226a023ca7e5b6a2a7c96c79e3476d1d460ba72c3bb55c5afc814b1?apiKey=55e4fbdde8ee4408a0c35da726195dfe&width=100 100w"
                      className="object-contain aspect-square w-[65px]"
                      alt="Email Icon"
                    />
                    <div className="mt-5 text-xl font-medium leading-tight text-zinc-800 max-sm:text-lg">
                      Email/Web
                    </div>
                    <div className="mt-4 text-base leading-6 text-black max-sm:text-sm">
                      demo@example.com
                    </div>
                    <div className="mt-2 max-sm:text-sm">www.example.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full h-[500px] relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197956!2d106.69843!3d10.778063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzQxLjAiTiAxMDbCsDQxJzU0LjMiRQ!5e0!3m2!1svi!2s!4v1639127895!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md">
          Sử dụng ctrl + cuộn để thu phóng bản đồ
        </div>
      </div>
    </div>
  );
};

export default Lienhe;