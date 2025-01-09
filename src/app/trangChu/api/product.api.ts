import { corsNextjs } from "@/app/components/utils/utils";
import axios from "axios";

export const getProductApi = async () => {
  const response = await axios.get("https://api-core.dsp.one/api/client/product");
  return response.data;
};
