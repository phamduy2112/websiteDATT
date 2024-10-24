import { atom } from 'recoil';

// Định nghĩa atom cho giỏ hàng
export const cartState = atom({
  key: 'cart',
  default: [],  
});

export const addCart = (cart, product) => {
  const newCart = [...cart]; 
  const foundIndex = cart.findIndex((item) => item.id === product.id);

  if (foundIndex >= 0) {

    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantity: cart[foundIndex].quantity + product.quantity,
    };
  } else {
    newCart.push(product);
  }

  return newCart;
};
