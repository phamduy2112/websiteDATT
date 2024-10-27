import React from "react";

const Lienhe = () => {
  return (
    <div className="flex flex-col pb-2 bg-white">
    <div className="flex flex-col justify-center items-center px-20 py-40 w-full text-center bg-slate-300 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col mb-0 max-w-full w-[326px] max-md:mb-2.5">
        <div className="text-5xl leading-tight text-black max-w-[617px] max-md:text-4xl">
          Contact Us
        </div>
        <div className="flex gap-6 self-center mt-8 max-w-full text-lg leading-none uppercase whitespace-nowrap w-[172px]">
          <div className="text-black">Home</div>
          <div className="grow shrink text-blue-600 w-[92px]">Contact</div>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap gap-5 justify-between self-end mr-5 w-full max-w-[1540px] max-md:mr-2.5 max-md:max-w-full">
      <div className="flex flex-col items-center px-20 pt-28 pb-5 bg-neutral-100 max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[930px]">
          <div className="self-center text-5xl font-medium leading-none text-center text-black max-md:text-4xl">
            Send A Quest
          </div>
          <div className="flex flex-wrap gap-8 mt-14 text-sm font-light whitespace-nowrap text-neutral-400 max-md:mt-10 max-md:max-w-full">
            <div className="overflow-hidden grow px-5 py-5 bg-white rounded-2xl border border-solid border-zinc-300 w-fit max-md:px-5 max-md:max-w-full">
              Name*
            </div>
            <div className="overflow-hidden grow px-5 py-5 bg-white rounded-2xl border border-solid border-zinc-300 w-fit max-md:px-5 max-md:max-w-full">
              Email*
            </div>
          </div>
          <div className="overflow-hidden px-5 py-5 mt-8 text-sm font-light whitespace-nowrap bg-white rounded-2xl border border-solid border-zinc-300 text-neutral-400 max-md:px-5 max-md:max-w-full">
            Subject*
          </div>
          <div className="flex shrink-0 mt-8 bg-white rounded-2xl border border-solid border-zinc-300 h-[250px] max-md:max-w-full" />
          <div className="self-center px-12 py-6 mt-16 max-w-full text-lg font-semibold leading-none text-center text-white bg-blue-600 rounded-2xl w-[230px] max-md:px-5 max-md:mt-10">
            Send Message
          </div>
           {/* Contact Info Section */}
           <div className="mt-32 max-md:mt-10 max-sm:mt-8">
              <div className="flex gap-5 justify-center max-md:flex-col max-sm:flex-col">
                {/* Address Box */}
                <div className="flex flex-col w-[30%] max-md:w-full max-sm:w-full">
                  <div className="flex flex-col items-center px-6 py-8 w-full text-center bg-white rounded-xl shadow-[4px_0px_20px_rgba(0,0,0,0.1)] max-md:px-4 max-sm:px-3 max-sm:py-6">
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

                {/* Phone Box */}
                <div className="flex flex-col w-[30%] max-md:w-full max-sm:w-full">
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

                {/* Email/Web Box */}
                <div className="flex flex-col w-[30%] max-md:w-full max-sm:w-full">
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

      {/* Floating Button */}
    </div>
  );
};

export default Lienhe;
