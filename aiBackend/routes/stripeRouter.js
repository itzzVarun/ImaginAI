import express from "express";

import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  handlestripePayment,
  handleFreeSubscription,
  verifyPayment,
} from "../controllers/handleStripePayment.js";

const stripeRouter = express.Router();

stripeRouter.post("/checkout", isAuthenticated, handlestripePayment);
stripeRouter.post("/free-plan", isAuthenticated, handleFreeSubscription);
stripeRouter.post("/verify-payment/:paymentId", isAuthenticated, verifyPayment);

export default stripeRouter;
