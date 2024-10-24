import { atom, useRecoilState, useRecoilValue } from 'recoil';
import Swal from 'sweetalert2';

// Khai báo atom
export const productAtom = atom({
  key: 'productAtom',
  default: [
    {
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
    },
  ],
});