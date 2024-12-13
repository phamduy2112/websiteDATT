import { corsNextjs } from "@/app/components/utils/utils";
import axios from "axios";

export const getProductApi = async () => {
  const response = await axios.get("https://api-core.dsp.one/api/auth/product");
  return response.data;
};
