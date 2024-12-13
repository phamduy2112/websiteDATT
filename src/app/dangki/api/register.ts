import { corsNextjs } from "@/app/components/utils/utils";
import axios from "axios";

export const register = async (data: any) => {
  try {
    const response = await axios.post(
      `${corsNextjs}/https://api-core.dsp.one/api/auth/user/register`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
