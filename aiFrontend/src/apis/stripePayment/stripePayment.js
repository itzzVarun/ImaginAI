import { axiosInstance } from "../../lib/axios";
//=======Stripe Payment=====

export const handleFreeSubscriptionAPI = async () => {
  const response = await axiosInstance.post(
    "/stripe/free-plan",
    {},
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
//=======Stripe  Payment intent=====

export const createStripePaymentIntentAPI = async (payment) => {
  console.log(payment);
  const response = await axiosInstance.post(
    "/stripe/checkout",
    {
      amount: Number(payment?.amount),
      subscriptionPlan: payment?.plan,
    },
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
//=======Verify  Payment =====

export const verifyPaymentAPI = async (paymentId) => {
  const response = await axiosInstance.post(
    `/stripe/verify-payment/${paymentId}`,
    {},
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
