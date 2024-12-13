interface Order {
  code: string;
  cart_id: number;
  user_id: number;
  name: string;
  phone_number: string;
  shipping_address: string;
  payment_method: number;
  shipping_unit: number;
  shipping_costs: number;
  total_order: number;
  total: number;
  status: string;
}
