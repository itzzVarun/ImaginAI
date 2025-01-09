import { axiosInstance } from "../../lib/axios";
//=======Registration=====

export const registerAPI = async (userData) => {
  const response = await axiosInstance.post(
    "/users/register",
    {
      email: userData?.email,
      password: userData?.password,
      username: userData?.username,
    },
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
//=======Login=====

export const loginAPI = async (userData) => {
  const response = await axiosInstance.post(
    "/users/login",
    {
      email: userData?.email,
      password: userData?.password,
    },
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
//=======Check auth=====

export const checkUserAuthStatusAPI = async () => {
  const response = await axiosInstance.get(
    "/users/auth/check",
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
//=======Logout =====

export const logoutAPI = async () => {
  const response = await axiosInstance.post(
    "/users/logout",
    {},
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
//=======Logout =====

export const getUserProfileAPI = async () => {
  const response = await axiosInstance.get(
    "/users/profile",

    {
      withCredentials: true,
    }
  );
  return response?.data;
};
