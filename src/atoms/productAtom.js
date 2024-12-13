import { atom, useRecoilState, useRecoilValue } from "recoil";
import Swal from "sweetalert2";

// Khai báo atom
export const productAtom = atom({
  key: "productAtom",
  default: [],
});
