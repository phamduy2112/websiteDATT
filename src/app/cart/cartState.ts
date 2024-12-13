import { atom } from "recoil";
import { CartItem } from "./cartItem";

export const cartState = atom<CartItem[]>({
  key: "cartState",
  default: [],
});

export const addCart = (cart: CartItem[], product: CartItem): CartItem[] => {
  const newCart = [...cart];
  const foundIndex = cart.findIndex((item) => item.id === product.id);
  const quantity =
    product.quantity && !isNaN(product.quantity) ? product.quantity : 1;

  // Kiểm tra và xử lý giá trị product.price hợp lệ
  const price = product.price && !isNaN(product.price) ? product.price : 0;

  if (foundIndex >= 0) {
    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantity: cart[foundIndex].quantity + product.quantity,
    };
  } else {
    // If product not in cart, add new product
    newCart.push({ ...product, quantity, price });
  }

  return newCart;
};
