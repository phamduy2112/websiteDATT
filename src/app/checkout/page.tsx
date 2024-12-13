"use client";
import { useRecoilValue } from "recoil";
import { cartState } from "../cart/cartState";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { stringify } from "flatted";
import {
  getDistrictApi,
  getProvinceApi,
  getWardApi,
  postOrderApi,
} from "./api/order.api";
import Link from "next/link";
import ToggleAdress from "./Component/ToggleAdress";
import Toogle from "./Component/Toogle";
import TooglePay from "./Component/TooglePay";
import ToogleSignUp from "./Component/ToggleSignUp";
import { shippingState } from "../cart/shippingState";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
interface Province {
  id: string;
  name: string;
  code: string;
  name_en: string;
  full_name: string;
  full_name_en: string;
  code_name: string;
  administrative_unit_id: number;
  administrative_region_id?: number;
}

interface District {
  id: string;
  name: string;
  code: string;
  name_en: string;
  full_name: string;
  full_name_en: string;
  code_name: string;
  province_code: string;
  administrative_unit_id: number;
}

interface Ward {
  id: string;
  name: string;
  code: string;
  name_en: string;
  full_name: string;
  full_name_en: string;
  code_name: string;
  district_code: string;
  administrative_unit_id: number;
}

export default function CheckOut() {
  const cart = useRecoilValue(cartState); // Lấy danh sách sản phẩm từ Recoil state
  const [shippingCost, setShippingCost] = useState(0);
  const shipping = useRecoilValue(shippingState);
  const calculateProductTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const calculateTotal = () => {
    const productTotal = parseFloat(calculateProductTotal());
    return (productTotal + shipping).toFixed(2);
  };
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Name is required"),
    address: Yup.string().required("Address is required"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/^\d{10}$/, "Phone number is not valid"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    selectedProvince: Yup.string().required("Town / City is required"),
    selectedDistrict: Yup.string().required("District is required"),
    selectedWard: Yup.string().required("Ward is required"),
  });

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fullname: "",
      address: "",
      phone: "",
      email: "",
      selectedProvince: "",
      selectedDistrict: "",
      selectedWard: "",
    },
  });
  const handlePlaceOrder = async (values: any) => {
    console.log("Form values:", values);

    try {
      const orderData = {
        productId: values.productId,
        quantity: values.quantity,
        customerName: values.customerName,
      };
      const response = await postOrderApi(orderData);

      if (response) {
        Swal.fire({
          icon: "success",
          title: "Đặt hàng thành công!",
          text: "Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ xử lý đơn hàng của bạn sớm nhất.",
          confirmButtonText: "OK",
          confirmButtonColor: "#266bf9",
        }).then(() => {
          window.location.href = "/";
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Đặt hàng thất bại!",
          text: "Không có phản hồi từ API.",
          confirmButtonText: "OK",
          confirmButtonColor: "#f44336",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Đặt hàng thất bại!",
        text: "Có lỗi xảy ra, vui lòng thử lại sau.",
        confirmButtonText: "OK",
        confirmButtonColor: "#f44336",
      });
      console.log(error);
    }
  };

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);
  useEffect(() => {
    const fetchProvinces = async () => {
      const data = await getProvinceApi();
      console.log("Provinces:", data);
      setProvinces(data);
    };
    fetchProvinces();
  }, []);
  useEffect(() => {
    const fetchDistricts = async () => {
      if (selectedProvince) {
        const data = await getDistrictApi(selectedProvince);
        console.log("Districts for province:", selectedProvince, data);
        setDistricts(data);
      } else {
        setDistricts([]);
      }
    };

    fetchDistricts();
  }, [selectedProvince]);

  useEffect(() => {
    const fetchWards = async () => {
      if (selectedDistrict) {
        const data = await getWardApi(selectedDistrict);
        console.log("Wards for district:", selectedDistrict, data);
        setWards(data);
      } else {
        setWards([]);
      }
    };

    fetchWards();
  }, [selectedDistrict]);

  return (
    <div className="w-[80%] mx-auto py-4">
      <form onSubmit={handleSubmit(handlePlaceOrder)}>
        <Toogle />
        <div className="flex w-full justify-between md:flex-row flex-col gap-4">
          <div className="billing-info-wrap w-full custom:w-[55%] text-[.8rem] text-black p-[2rem]">
            <h3 className="text-[24px] font-semibold text-black mb-6">
              Billing Details
            </h3>

            <div className="w-[100%] flex flex-col gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-black">Full Name</label>
                <Controller
                  name="fullname"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className="h-[45px] w-[100%] border border-gray-200 px-4 focus:outline-[#266bf9]"
                    />
                  )}
                />
                {errors.fullname && (
                  <p className="text-red-500 text-xs">
                    {errors.fullname.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-black">Email Address</label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className="h-[45px] w-[100%] border border-gray-200 px-4 focus:outline-[#266bf9]"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="block text-black">Phone</label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className="h-[45px] w-[100%] border border-gray-200 px-4 focus:outline-[#266bf9]"
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-black">Town / City</label>
                <Controller
                  name="selectedProvince"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="h-[45px] w-[100%] border border-gray-200 px-4 focus:outline-[#266bf9]"
                      onChange={(e) => {
                        field.onChange(e);
                        setSelectedProvince(e.target.value); // Cập nhật state khi chọn tỉnh
                        setSelectedDistrict(""); // Reset huyện
                        setSelectedWard(""); // Reset xã
                      }}
                    >
                      <option value="">Chọn thành phố</option>
                      {provinces.map((province) => (
                        <option key={province.code} value={province.code}>
                          {province.name}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.selectedProvince && (
                  <p className="text-red-500 text-xs">
                    {errors.selectedProvince.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-black">District</label>
                <Controller
                  name="selectedDistrict"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="h-[45px] w-[100%] border border-gray-200 px-4 focus:outline-[#266bf9]"
                      onChange={(e) => {
                        field.onChange(e);
                        setSelectedDistrict(e.target.value); // Cập nhật state khi chọn huyện
                        setSelectedWard(""); // Reset xã
                      }}
                    >
                      <option value="">Chọn huyện</option>
                      {districts.map((district) => (
                        <option key={district.code} value={district.code}>
                          {district.name}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.selectedDistrict && (
                  <p className="text-red-500 text-xs">
                    {errors.selectedDistrict.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-black">Ward</label>
                <Controller
                  name="selectedWard"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="h-[45px] w-[100%] border border-gray-200 px-4 focus:outline-[#266bf9]"
                      onChange={(e) => field.onChange(e)}
                    >
                      <option value="">Chọn xã</option>
                      {wards.map((ward) => (
                        <option key={ward.code} value={ward.code}>
                          {ward.name}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.selectedWard && (
                  <p className="text-red-500 text-xs">
                    {errors.selectedWard.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-black">Address</label>
                <Controller
                  name="address"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className="h-[45px] w-[100%] border border-gray-200 px-4 focus:outline-[#266bf9]"
                    />
                  )}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs">
                    {errors.address.message}
                  </p>
                )}
              </div>
            </div>

            <ToogleSignUp />

            <div className="additional-info-wrap">
              <h4 className="font-semibold mb-2">Additional information</h4>
              <div className="additional-info">
                <label className="block text-black mb-4">Order notes</label>
                <textarea
                  className="w-[100%] focus:outline-[#266bf9] border border-gray-200  text-[.8rem]  px-[1rem] py-[.5rem] h-[5.5rem]"
                  placeholder="Notes about your order, e.g. special notes for delivery. "
                  name="message"
                  defaultValue={""}
                />
              </div>
            </div>

            <ToggleAdress />
          </div>

          <div className="your-order-area w-[70%]  h-[100%] border border-gray-200 bg-[#ebebeb] text-[.8rem] p-[2rem] max-w-full  mx-auto">
            {/* Nội dung Your Order */}
            <h3 className="text-[24px] font-semibold text-black">Your order</h3>
            <div className="your-order-wrap gray-bg-4">
              <div className="your-order-product-info ">
                <div className="your-order-top">
                  <ul className="flex justify-between py-[1.5rem] border border-b-gray-200 border-transparent">
                    <li className="font-semibold">Product</li>
                    <li className="font-semibold">Total</li>
                  </ul>
                </div>
                <div className="your-order-middle py-[1.5rem] border border-b-gray-200 border-transparent">
                  <ul>
                    {cart.length > 0 ? (
                      cart.map((item) => (
                        <li className="flex justify-between" key={item.id}>
                          <span className="order-middle-left">
                            {item.name} x {item.quantity}
                          </span>
                          <span className="order-price">
                            ${item.price * item.quantity}
                          </span>
                        </li>
                      ))
                    ) : (
                      <li className="text-center">Your cart is empty.</li>
                    )}
                  </ul>
                </div>
                <div className="your-order-bottom  py-[1.5rem] border border-b-gray-200 border-transparent">
                  <ul className="flex justify-between">
                    <li className="your-order-shipping font-semibold">
                      Shipping
                    </li>
                    <li>
                      {shipping === 0
                        ? "Free shipping"
                        : `$${shipping.toFixed(2)}`}
                    </li>
                  </ul>
                </div>
                <div className="your-order-total font-semibold  py-[1.5rem] border border-b-gray-200 border-transparent">
                  <ul className="flex justify-between">
                    <li className="order-total">Total</li>
                    <li className="text-[#266bf9]">${calculateTotal()}</li>
                  </ul>
                </div>
              </div>
              <div className="payment-method  py-[1.5rem]">
                <TooglePay />
              </div>
            </div>
            <div className="Place-order mt-25">
              <button
                className="block text-center bg-[#266bf9] text-white py-2 text-[14px] font-semibold w-full"
                type="submit"
                onClick={handlePlaceOrder}
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
