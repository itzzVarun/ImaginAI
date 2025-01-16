import asyncHandler from "express-async-handler";
import User from "../models/User.js";

const checkApiRequestLimit = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authorized" });
  }
  //Find the user
  const user = await User.findById(req?.user?.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  
  //check if the user has exceeded his/her monthly request or not
  if (user?.apiRequestCount >= user?.monthlyRequestCount) {
    throw new Error("API Request limit reached, please subcribe to a plan");
  }
  next();
});

export default checkApiRequestLimit;
