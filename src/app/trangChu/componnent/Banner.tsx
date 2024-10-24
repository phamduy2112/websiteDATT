"use client"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useState } from 'react';
import Slider from 'react-slick';

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
  };

  return (
    <div className='banner-list'>
      <Slider {...settings}> 
        {images.map((item, index) => (
          <div key={index} className='w-[100%] h-[30rem]'>
            <img src={item.img} className='w-[100%] h-[100%]' alt={item.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;