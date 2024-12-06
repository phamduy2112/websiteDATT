"use client";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useState } from 'react';
import Slider from 'react-slick';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="absolute top-[50%] left-[1rem] transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 z-10 shadow-md hover:bg-gray-900"
    onClick={onClick}
  >

<FaAngleLeft />
</button>
);

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="absolute top-[50%] right-[1rem] transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 z-10 shadow-md hover:bg-gray-900"
    onClick={onClick}
  >
<FaAngleRight />  
  </button>
);

const Banner = () => {
  const [images] = useState([
    {
      img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:1200:75/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-update-19-06%20(1).gif',
      alt: 'Hình ảnh banner 1',
    },
    {
      img: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2023/10/w800/29-cu-cap-sac-xiaomi-tong-hop.jpg.webp',
      alt: 'Hình ảnh banner 2',
    },
    {
      img: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2023/10/w800/29-cu-cap-sac-xiaomi-tong-hop.jpg.webp',
      alt: 'Hình ảnh banner 3',
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="relative banner-list">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="w-[100%] h-[30rem]">
            <img src={item.img} className="w-[100%] h-[100%]" alt={item.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;