import axios from "axios";

export const postOrderApi = async (orderData: Order) => {
  try {
    const response = await axios.post(
      "https://api-core.dsp.one/api/auth/order",
      orderData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      return response;
    }

    throw new Error("Đặt hàng thất bại");
  } catch (error) {
    throw error;
  }
};
export const getProvinceApi = async () => {
  const response = await axios.get(
    `https://api-core.dsp.one/api/auth/province`
  );
  return response.data;
};

// Lấy danh sách huyện theo tỉnh
export const getDistrictApi = async (provinceCode: string) => {
  const response = await axios.get(
    `https://api-core.dsp.one/api/auth/district?provinceCode=${provinceCode}`
  );
  return response.data;
};

// Lấy danh sách xã theo huyện
export const getWardApi = async (districtCode: string) => {
  const response = await axios.get(
    `https://api-core.dsp.one/api/auth/ward?districtCode=${districtCode}`
  );
  return response.data;
};
