"use client";
import { cartState } from "../../../cart/cartState";
import Slider from "react-slick";
import { addCart } from "../../../cart/cartState";
import React, { useState } from "react";
import "./style.css";
import { CiHeart } from "react-icons/ci";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { MdOutlineShoppingBag } from "react-icons/md";
import Swal from "sweetalert2";
import { IoEyeOutline } from "react-icons/io5";
import { useRecoilState } from "recoil";
const RelatedProduct = () => {
  const products = [
    {
      id: 1,
      image: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/product-image/1.webp",
      name: "Modern Smart Phone",
      price: "$38.50",
      sale: "Sale 10%",
      status: "New",
      category: "Accessories",
    },
    {
      id: 2,
      image: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/product-image/1.webp",
      name: "Bluetooth Headphone",
      price: "$38.50",
      sale: "Sale 10%",
      status: "Sale",
      category: "Accessories",
    },
    {
      id: 3,
      image: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/product-image/1.webp",
      name: "Smart Music Box",
      price: "$38.50",
      sale: "Sale",
      status: "New",
      category: "Accessories",
    },
    {
      id: 4,
      image: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/product-image/1.webp",
      name: "Air Pods 256K Black",
      price: "$38.50",
      sale: "Sale",
      status: "New",
      category: "Accessories",
    },
  ];
  // Dữ liệu sản phẩm có sẵn
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
  const handleAddToWishlist = () => {
    Swal.fire({
      title: "Added to Wishlist successfully!",
      text: "",
      showConfirmButton: false,
      backdrop: "rgba(0,0,0,0.8)", // Nền tối phía sau
      html: `
        <div style="position: relative; text-align: center;">
      <img src="${product.images[0]}" alt="${product.name}" style="width: 150px; height: auto; display: block; margin: 0 auto;" />
          <h2 style="font-size:16px">${product.name}</h2>
        </div>
      `,
      onOpen: () => {
        // Thêm sự kiện cho nút đóng
        const closeButton = document.querySelector(".swal2-close");
        closeButton.addEventListener("click", () => {
          Swal.close();
        });
      },
    });
  };
  const handleAddToCompare = () => {
    Swal.fire({
      title: "Added to Compare successfully!",
      text: "", // Có thể thêm mô tả nếu cần
      showConfirmButton: false,
      backdrop: "rgba(0,0,0,0.8)", // Nền tối phía sau
      html: `
        <div style="position: relative; text-align: center;">
               <img src="${product.images[0]}" alt="${product.name}" style="width: 150px; height: auto; display: block; margin: 0 auto;" />
          <h2 style="font-size:16px">${product.name}</h2>
        </div>
      `,
      onOpen: () => {
        const closeButton = document.querySelector(".swal2-close");
        if (closeButton) {
          closeButton.addEventListener("click", () => {
            Swal.close();
          });
        }
      },
    });
  };
  const handleView = () => {
    Swal.fire({
      text: "", // Có thể thêm mô tả nếu cần
      showConfirmButton: false,
      backdrop: "rgba(0,0,0,0.8)", // Nền tối phía sau
      html: `
        <div class="flex flex-wrap mt-4">
          <div class="w-full md:w-1/2 p-4">
            <img
              src="https://via.placeholder.com/570x675"
              alt="Product image"
              className="w-full h-auto rounded-[10px]"
            />
  
            <div class="flex justify-center space-x-2 mt-4">
              ${product.images
                .slice(1)
                .map(
                  (image, index) => `
                <img
                  key="${index}"
                  src="${image}"
                  alt="Product image ${index + 1}"
                  class="w-1/4 h-auto cursor-pointer rounded-[10px]"
                />
              `
                )
                .join("")}
            </div>
          </div>
  
          <!-- Cột thông tin sản phẩm -->
          <div class="w-full md:w-1/2 p-4 mb-4">
            <h1 class="text-[24px] text-black capitalize leading-none font-normal mb-5">
              ${product.name || "Tên sản phẩm"}
            </h1>
            <p class="text-[24x] text-black leading-[30px] font-semibold">
              ${
                product.sale && product.originalPrice
                  ? `$${product.sale}` // Giá sale
                  : `$${product.price}`
              }
              
            </p>
            <div class="flex items-center mt-2 mb-4">
              <span class="text-yellow-500">
                ${"★".repeat(product.rating || 0)}☆
              </span>
              <span class="ml-2 text-gray-500 text-[14px]">
                (${product.reviews || 0} Customer Reviews)
              </span>
            </div>
            <hr />
            <p class="text-[#181818] text-[16px] leading-[30px] mb-[20px] text-justify mt-4">
              ${product.description || "Mô tả sản phẩm hiện không có sẵn."}
            </p>
            <div class="mt-4 text-[16px]">
              <span class="font-semibold text-[#266bf9]">SKU:</span>
              <span> ${product.id || "Không xác định"}</span>
            </div>
            <div class="mt-2 text-[16px]">
              <span class="font-semibold text-[#266bf9]">Categories:</span>
              <span> ${product.category || "Đang cập nhật"}</span>
            </div>
            <div class="mt-2 mb-4 text-[16px]">
              <span class="font-semibold text-[#266bf9]">Tags:</span>
              <span>
                ${product.tags?.length ? product.tags : "Đang cập nhật"}
              </span>
            </div>
            <div class="mt-4">
              <AddCart />
            </div>
            <TabDetailProduct />
          </div>
        </div>
      `,
      onOpen: () => {
        const closeButton = document.querySelector(".swal2-close");
        if (closeButton) {
          closeButton.addEventListener("click", () => {
            Swal.close();
          });
        }
      },
    });
  };

  const handleAddToCart = () => {
    Swal.fire({
      title: "Added to Cart successfully!",
      text: "",
      showConfirmButton: false,
      backdrop: "rgba(0,0,0,0.8)",
      html: `
        <div style="position: relative; text-align: center;">
          <img src="${product.images[0]}" alt="${product.name}" style="width: 150px; height: auto; display: block; margin: 0 auto;" />
          <h2 style="font-size:16px">${product.name}</h2>
        </div>
      `,
      onOpen: () => {
        const closeButton = document.querySelector(".swal2-close");
        if (closeButton) {
          closeButton.addEventListener("click", () => {
            Swal.close();
          });
        }
      },
    });

    // Add to cart with correct structure
    const updatedCart = addCart(cart, { ...products, quantity });
    setCart(updatedCart);
  };
  const [cart, setCart] = useRecoilState(cartState);
  const [quantity, setQuantity] = useState(1);
  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = () => {
    const newCart = addCart(cart, { ...product, quantity });
    setCart(newCart);
  };
  const CustomPrevArrow = ({ onClick }) => {
    return (
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-200 transition-all"
        onClick={onClick}
      >
        &lt;
      </button>
    );
  };

  const CustomNextArrow = ({ onClick }) => {
    return (
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-200 transition-all"
        onClick={onClick}
      >
        &gt;
      </button>
    );
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />, // Custom nút trái
    nextArrow: <CustomNextArrow />, // Custom nút phải
    centerMode: false,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "90px",
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "90px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "90px",
        },
      },
      {
        breakpoint: 428,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10%",
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {products?.map((product) => (
          <div
            className="border p-2 relative group transition-all duration-500 w-[270px] h-[382px] hover:h-[450px] rounded-lg"
            key={product.id}
          >
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto mb-2 object-cover"
              />
            ) : (
              <div className="w-full h-[273px] bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">
                  No Image Available
                </span>
              </div>
            )}

            <div className="absolute top-2 left-2 flex space-x-2">
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                10%
              </span>
              <span className="bg-black text-white text-xs px-2 py-1 rounded">
                New
              </span>
            </div>

            <h5 className="text-[14px] text-gray-500 font-thin text-center">
              Accessories
            </h5>
            <h3 className="text-[16px] font-normal text-center">
              {product.name}
            </h3>
            <p className="text-gray-700 text-center text-[18px]">
              <del className="font-light">{product.price}</del> -{" "}
              {product.price}
            </p>

            <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-2">
              <button
                className="text-white bg-[#454545] hover:bg-blue-500 rounded-sm p-2"
                onClick={handleAddToCart}
              >
                <MdOutlineShoppingBag className="w-6 h-6" />
              </button>
              <button
                className="text-white bg-[#454545] hover:bg-blue-500 rounded-sm p-2"
                onClick={handleAddToWishlist}
              >
                <CiHeart className="w-6 h-6" />
              </button>
              <button
                className="text-white bg-[#454545] hover:bg-blue-500 rounded-sm p-2"
                onClick={handleView}
              >
                <IoEyeOutline className="w-6 h-6" />
              </button>
              <button
                className="text-white bg-[#454545] hover:bg-blue-500 rounded-sm p-2"
                onClick={handleAddToCompare}
              >
                <HiArrowPathRoundedSquare className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RelatedProduct;
