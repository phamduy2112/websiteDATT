export interface Product {
  id: string;
  code: string;
  name: string;
  slug: string;
  type: string;
  short_description: string;
  description: string;
  thumbnail: number;
  price: number;
  width: number;
  length: number;
  height: number;
  status: number;
  sale?: string;
  image?: string;
  originalPrice?: number;
  category: {
    id: string;
    name: string;
  };
}
