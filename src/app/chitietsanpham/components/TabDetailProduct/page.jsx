"use client";
import React, { useState, useEffect } from "react";
import "../../../globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const comments = [
  {
    id: 1,
    name: "Tulen",
    image: "https://via.placeholder.com/90x90",
    rating: 4,
    content:
      "Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra.",
  },
];

const product = {
  id: "Ch-256xl",
  name: "Modern Smart Phone",
  price: 20.9,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  tags: "Smart Device, Phone",
  images: [
    "https://via.placeholder.com/570x675",
    "https://via.placeholder.com/127x127",
    "https://via.placeholder.com/127x127",
    "https://via.placeholder.com/127x127",
  ],
  reviews: 5,
  category: "Smartphones",
};

const TabDetailProduct = () => {
  const [activeTab, setActiveTab] = useState("information"); 
  const [isMobile, setIsMobile] = useState(false);
  const [tabContentVisible, setTabContentVisible] = useState({
    information: false,
    description: false,
    reviews: false,
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTabContent = (tab) => {
    setTabContentVisible((prev) => ({
      ...prev,
      [tab]: !prev[tab],
    }));
    setActiveTab(tab);
  };

  const [showReviews, setShowReviews] = useState(false);  

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "reviews") {
      setShowReviews(true); 
    } else {
      setShowReviews(false); 
    }
  };

  return (
    <div className="mt-4 flex flex-col text-[16px]">
      <div className="flex flex-wrap md:flex-nowrap font-bold items-start md:items-center relative">
        {/* Tab Information */}
        <button
          className={`w-full md:w-auto px-4 py-2 text-left transition duration-300 ${
            activeTab === "information"
              ? "text-[#266bf9] border-b-2 border-[#266bf9]"
              : "hover:text-[#266bf9]"
          }`}
          onClick={() => toggleTabContent("information")}
        >
          Information
        </button>
        {isMobile && tabContentVisible.information && (
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div className="font-normal">Weight</div>{" "}
            <div className="font-normal">400 g</div>
            <div className="font-normal">Dimensions</div>{" "}
            <div className="font-normal">10 x 10 x 15 cm</div>
            <div className="font-normal">Materials</div>{" "}
            <div className="font-normal">60% cotton, 40% polyester</div>
            <div className="font-normal">Other Info</div>{" "}
            <div className="font-normal">
              American heirloom jean shorts pug seitan letterpress
            </div>
          </div>
        )}

        {/* Tab Description */}
        <button
          className={`w-full md:w-auto px-4 py-2 text-left transition duration-300 ${
            activeTab === "description"
              ? "text-[#266bf9] border-b-2 border-[#266bf9]"
              : "hover:text-[#266bf9]"
          }`}
          onClick={() => toggleTabContent("description")}
        >
          Description
        </button>
        {isMobile && tabContentVisible.description && (
          <div className="mt-2">
            <p className="font-normal">{product.description}</p>
          </div>
        )}

        {/* Tab Reviews */}
        <button
          className={`w-full md:w-auto px-4 py-2 text-left transition duration-300 ${
            activeTab === "reviews"
              ? "text-[#266bf9] border-b-2 border-[#266bf9]"
              : "hover:text-[#266bf9]"
          }`}
          onClick={() => toggleTabContent("reviews")}
        >
          Reviews ({product.reviews})
        </button>
        {isMobile && tabContentVisible.reviews && showReviews && (
          <div className="mt-7">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="flex flex-col md:flex-row mt-10 mb-10"
              >
                <img
                  src={comment.image}
                  alt="User"
                  className="w-[90px] h-[90px] mb-4 md:mr-4 md:mb-0"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <h4 className="text-[18px] font-medium">
                        {comment.name}
                      </h4>
                      <div className="text-yellow-500 flex">
                        {"★".repeat(comment.rating)}
                        {"☆".repeat(5 - comment.rating)}
                      </div>
                    </div>
                    <p className="ml-auto cursor-pointer text-[16px] font-normal">
                      Reply
                    </p>
                  </div>
                  <p className="text-text text-[14px] leading-normal mt-2 font-normal">
                    {comment.content}
                  </p>

                  {/* Bình luận trả lời */}
                  <div className="mt-12">
                    <div className="flex flex-col md:flex-row">
                      <img
                        src="https://via.placeholder.com/120"
                        alt="User Reply"
                        className="w-[90px] h-[90px] mb-4 md:mr-4 md:mb-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <h4 className="text-[18px] font-medium">Ignis</h4>
                            <div className="text-yellow-500 flex">
                              {"★".repeat(5)}
                            </div>
                          </div>
                          <p className="ml-auto cursor-pointer text-[16px] font-normal">
                            Reply
                          </p>
                        </div>
                        <p className="text-text text-[14px] leading-normal mt-2 font-normal">
                          Vestibulum ante ipsum primis aucibus orci luctustrices
                          posuere cubilia Curae Suspendisse viverra ed viverra.
                          Mauris ullarper euismod vehicula. Phasellus quam nisi,
                          congue id nulla.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Bảng đánh giá */}
            <div className="mt-10">
              <h3 className="text-[18px] font-medium">Add a Review</h3>
              <div className="mt-2">
                <div className="flex items-center mb-4">
                  <span className="text-[18px] font-medium">Your rating:</span>
                  <div className="flex ml-2 text-yellow-500">
                    {"★".repeat(5)} {/* Mã đánh giá giả */}
                  </div>
                </div>

                {/* Thêm trường nhập cho Name và Email */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block">
                      <input
                        type="text"
                        className="mt-1 p-2 border border-gray-300 w-full placeholder:text-[16px]"
                        placeholder="Name"
                      />
                    </label>
                  </div>
                  <div>
                    <label className="block">
                      <input
                        type="email"
                        className="mt-1 p-2 border border-gray-300 w-full placeholder:text-[16px]"
                        placeholder="Email"
                      />
                    </label>
                  </div>
                </div>

                {/* Trường nhập cho Message */}
                <div className="mt-4">
                  <label className="block">
                    <textarea
                      className="mt-1 p-2 border border-gray-300 w-full placeholder:text-[16px]"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </label>
                </div>

                <button className="mt-4 bg-black text-white px-4 py-2 w-[170px] h-[50px] text-[18px] rounded-2xl">
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Divider cho màn hình lớn */}
      {!isMobile && (
        <hr className="border-b-2 mt-[-1px] w-full border-gray-300" />
      )}

      {/* Nội dung cho màn hình lớn */}
      {!isMobile && activeTab === "information" && (
        <div className="mt-7 grid grid-cols-2 gap-2">
          <div>Weight</div> <div>400 g</div>
          <div>Dimensions</div> <div>10 x 10 x 15 cm</div>
          <div>Materials</div> <div>60% cotton, 40% polyester</div>
          <div>Other Info</div>
          <div>American heirloom jean shorts pug seitan letterpress</div>
        </div>
      )}

      {!isMobile && activeTab === "description" && (
        <div className="mt-7">
          <p>{product.description}</p>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="mt-7">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="flex flex-col md:flex-row mt-10 mb-10"
            >
              <img
                src={comment.image}
                alt="User"
                className="w-[90px] h-[90px] mb-4 md:mr-4 md:mb-0"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <h4 className="text-[18px] font-medium">{comment.name}</h4>
                    <div className="text-yellow-500 flex">
                      {"★".repeat(comment.rating)}
                      {"☆".repeat(5 - comment.rating)}
                    </div>
                  </div>
                  <p className="ml-auto cursor-pointer text-[16px] font-normal">
                    Reply
                  </p>
                </div>
                <p className="text-text text-[14px] leading-normal mt-2 font-normal">
                  {comment.content}
                </p>

                {/* Bình luận trả lời */}
                <div className="mt-12">
                  <div className="flex flex-col md:flex-row">
                    <img
                      src="https://via.placeholder.com/120"
                      alt="User Reply"
                      className="w-[90px] h-[90px] mb-4 md:mr-4 md:mb-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <h4 className="text-[18px] font-medium">Ignis</h4>
                          <div className="text-yellow-500 flex">
                            {"★".repeat(5)}
                          </div>
                        </div>
                        <p className="ml-auto cursor-pointer text-[16px] font-normal">
                          Reply
                        </p>
                      </div>
                      <p className="text-text text-[14px] leading-normal mt-2 font-normal">
                        Vestibulum ante ipsum primis aucibus orci luctustrices
                        posuere cubilia Curae Suspendisse viverra ed viverra.
                        Mauris ullarper euismod vehicula. Phasellus quam nisi,
                        congue id nulla.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Bảng đánh giá */}
          <div className="mt-10">
            <h3 className="text-[18px] font-medium">Add a Review</h3>
            <div className="mt-2">
              <div className="flex items-center mb-4">
                <span className="text-[18px] font-medium">Your rating:</span>
                <div className="flex ml-2 text-yellow-500">
                  {"★".repeat(5)} {/* Mã đánh giá giả */}
                </div>
              </div>

              {/* Thêm trường nhập cho Name và Email */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block">
                    <input
                      type="text"
                      className="mt-1 p-2 border border-gray-300 w-full placeholder:text-[16px]"
                      placeholder="Name"
                    />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <input
                      type="email"
                      className="mt-1 p-2 border border-gray-300 w-full placeholder:text-[16px]"
                      placeholder="Email"
                    />
                  </label>
                </div>
              </div>

              {/* Trường nhập cho Message */}
              <div className="mt-4">
                <label className="block">
                  <textarea
                    className="mt-1 p-2 border border-gray-300 w-full placeholder:text-[16px]"
                    placeholder="Message"
                    rows="4"
                  ></textarea>
                </label>
              </div>

              <button className="mt-4 bg-black text-white px-4 py-2 w-[170px] h-[50px] text-[18px] rounded-2xl">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabDetailProduct;
