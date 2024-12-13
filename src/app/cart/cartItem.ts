export interface CartItem {
  id: string; // Ensure `id` matches the product's id type
  name: string;
  price: number;
  quantity: number;
  description?: string;
  images: string;
  category: string;
}
