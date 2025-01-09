import { atom } from "recoil";

// Khai báo userAtom
export const userAtom = atom({
  key: "userAtom", // Tên định danh duy nhất cho atom này
  default: {
    user_id: null,

    isLoggedIn: false,
  }, // Giá trị mặc định
});
