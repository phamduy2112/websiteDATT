import axios from "axios";
export const getProductDetailApi = async (productId: number) => {
  try {
    const response = await axios.get(
      `https://api-core.dsp.one/api/auth/product/${productId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching product detail:", error);
    throw error;
  }
};
