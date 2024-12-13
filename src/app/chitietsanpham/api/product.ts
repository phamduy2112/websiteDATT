export interface Product {
  id: string; // Mã sản phẩm
  code: string; // Mã sản phẩm (Code)
  name: string; // Tên sản phẩm
  slug: string; // Slug (URL-friendly name)
  type: string; // Loại sản phẩm
  short_description: string; // Mô tả ngắn
  description: string; // Mô tả chi tiết
  thumbnail: number; // ID của ảnh thumbnail
  price: number; // Giá sản phẩm
  width: number; // Chiều rộng
  length: number; // Chiều dài
  height: number; // Chiều cao
  status: number; // Trạng thái sản phẩm (ví dụ: còn hàng hay hết hàng)
  sale?: string; // Giá khuyến mãi (nếu có)
  originalPrice?: number; // Giá gốc (nếu có)
  image?: string | string[];
  category?: string; // Danh mục sản phẩm
  tags?: string[]; // Tags sản phẩm (mảng các tags)
  rating?: number; // Đánh giá của sản phẩm (số sao)
  reviews?: number; // Số lượng đánh giá
}
