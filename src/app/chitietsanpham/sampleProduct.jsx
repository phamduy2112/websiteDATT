// Sample product data
const sampleProduct = {
  id: 123,
  code: "P001",
  name: "Product Example",
  slug: "product-example",
  type: "Electronics",
  short_description: "This is a sample product.",
  description:
    "This is a detailed description of the sample product. It provides more information about the product's features and benefits.",
  thumbnail: 1,
  price: 99.99,
  width: 10,
  length: 20,
  height: 5,
  status: 1,
  sale: "79.99", // Sale price
  originalPrice: 99.99, // Original price
  category: "Electronics",
  image: [
    "https://via.placeholder.com/570x675", // Main image
    "https://via.placeholder.com/127x127", // Additional image 1
    "https://via.placeholder.com/127x127", // Additional image 2
  ],
  rating: 4, // Rating out of 5
  reviews: 150, // Number of customer reviews
  tags: ["New", "Popular", "Sale"], // Product tags
};

export default sampleProduct;
