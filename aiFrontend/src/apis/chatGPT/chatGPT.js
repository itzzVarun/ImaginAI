import { axiosInstance } from "../../lib/axios.js";
//=======Registration=====

export const generateImageAPI = async (userPrompt) => {
  const response = await axiosInstance.post(
    "/openai/generate-image",
    {
      prompt: userPrompt,
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
};
