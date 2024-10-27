import React from "react";
const LoginPage = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="stylesheet" href="global.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@500;700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400&display=swap" />

      <div className="w-full relative bg-gradient-to-b from-white to-white h-[1640px] overflow-y-auto text-center text-[55px] text-white font-['Roboto_Condensed']">
        <div className="absolute top-0 left-0 w-full h-[1223.1px]">
          {/* Top Section */}
          <div className="absolute w-full top-0 right-0 left-0 bg-[#1e1d1d] h-[452px]">
            <div className="absolute w-full h-full bg-[rgba(30,29,29,0.8)]" />
            <div className="absolute w-full top-[107px] right-0 left-0 h-[97.4px]">
              <b className="absolute top-[1px] left-1/2 transform -translate-x-1/2 tracking-[-1.1px] uppercase flex items-center justify-center w-[183.2px] h-[62px]">
                Log In
              </b>
              <div className="absolute w-full top-[75px] h-[22.4px] text-[16px]">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-[113px] h-[22.4px] flex justify-between">
                  <b className="tracking-[-0.32px] uppercase">Home</b>
                  <b className="tracking-[-0.32px] uppercase">:</b>
                  <b className="tracking-[-0.32px] uppercase">Log In</b>
                </div>
              </div>
            </div>
          </div>

          {/* Main Form Section */}
          <div className="absolute top-[582px] left-[calc(50%_-_534px)] w-[1100.8px] h-[641.1px] text-left text-[15px] text-[#7a7373]">
            <img
              src="https://template-1-food.vercel.app/_next/image?url=%2Fimages%2Flogin.png&w=1920&q=75"
            />
            <div className="absolute top-[22px] right-[6.36%] left-[41.86%] bg-[#f6f6f6] border-[#e6e6e6] border-[1px] h-[702.7px]">
              <div className="absolute w-[calc(100%-120px)] top-[52px] right-[60px] left-[60px] border-b-[1px] border-[#ecebeb] text-[35px] text-[#1e1d1d]">
                <b className="uppercase">Welcome</b>
                <div className="absolute left-[234.4px] w-[215.6px] flex justify-between text-center text-[16px] text-white">
                  <div className="bg-[#0004fc] w-[88.4px] h-[41px] flex items-center justify-center uppercase font-medium">
                    Log In
                  </div>
                  <div className="bg-white w-[117.2px] h-[41px] flex items-center justify-center text-[#0004fc] uppercase font-medium">
                    Register
                  </div>
                </div>
              </div>

              <div className="absolute top-[104px] left-[60px] uppercase font-medium">
                Sign in your Boskery account
              </div>

              <div className="absolute top-[159px] w-[calc(100%-120px)] right-[60px] left-[60px]">
                {/* Email Input */}
                <div className="bg-white border-[#ebe3d9] border-[1px] h-[55px] flex items-center px-4">
                  <span>Your Email</span>
                </div>

                {/* Password Input */}
                <div className="bg-white border-[#ebe3d9] border-[1px] h-[55px] mt-4 flex items-center px-4 autofill:">
                  <span>Password</span>
                </div>

                <div className="flex justify-between mt-4">
                  <div className="text-right">Forgot password?</div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Remember me</span>
                  </div>
                </div>

                <div className="bg-[#0004fc] h-[55px] flex justify-center items-center text-white mt-6 uppercase">
                  Log In
                </div>
              </div>

              <div className="absolute w-[calc(100%-120px)] top-[463px] right-[60px] left-[60px] border-t-[1px] border-[#ebe3d9] text-center">
                <div className="mt-6 uppercase font-medium">
                  Don’t have an account? <span className="text-[#0004fc]">Register</span>
                </div>
                <div className="mt-4 text-[14px] capitalize">Or sign in with</div>

                <div className="flex justify-center space-x-4 mt-6">
                  <img className="w-[56px] h-[56px]" alt="Icon" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c8a08d75cd80cc317bf3581df45fd930c49471a864e0023fdf87874a869a984" />
                  <img className="w-[56px] h-[56px]" alt="Icon" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0a47f7776e7735223186d000a4ec1939fb27fdba571de492d4f3df9e4792ce6" />
                  <img className="w-[56px] h-[56px]" alt="Icon" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f18d7fb494dad03c7cdf7ef82c63d06daff11ac46d15657d16dd0bbdea292d5e" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;