import express from "express";

import isAuthenticated from "../middlewares/isAuthenticated.js";
import openAIController from "../controllers/openAIController.js";
import checkApiRequestLimit from "../middlewares/checkApiRequestLimit.js";

const openAIRouter = express.Router();

openAIRouter.post(
  "/generate-image",[isAuthenticated,checkApiRequestLimit,openAIController]);

export default openAIRouter;
