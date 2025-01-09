import axios from "axios";
import { useRecoilState } from "recoil";
import { userAtom } from "./atoms/userAtom";

// Tạo một instance Axios
const axiosInstance = axios.create({
  baseURL: "/api", // Sử dụng đường dẫn proxy từ cấu hình Next.js
  headers: {
    "Content-Type": "application/json",
  },
});

// Thêm interceptor để tự động thêm token vào header
axiosInstance.interceptors.request.use(
  (config) => {
    
    const token = localStorage.getItem("token"); // Lấy token từ localStorage
    if(token!==null || token !==""){
        
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Thêm token vào header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// asdaasd

// Thêm interceptor xử lý lỗi (tuỳ chọn)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized: Token may have expired.");
      localStorage.removeItem("token"); // Xóa token không hợp lệ
      // Điều hướng về trang đăng nhập (nếu cần)
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;