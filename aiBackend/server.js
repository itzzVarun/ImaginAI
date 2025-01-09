import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cron from "node-cron";
import cors from "cors";
import path from "path";
import usersRouter from "./routes/usersRouter.js";
import errorHandler from "./middlewares/errorMiddleware.js";
import openAIRouter from "./routes/openAIRouter.js";
import stripeRouter from "./routes/stripeRouter.js";
import User from "./models/User.js";
import connectDB from "./utils/connectDB.js";
connectDB();

const app = express();
const PORT = process.env.PORT || 8090;
const __dirname = path.resolve();

//Cron for the trial period : run every single
cron.schedule("0 0 * * * *", async () => {
  console.log("This task runs every second");
  try {
    //get the current date
    const today = new Date();
    const updatedUser = await User.updateMany(
      {
        trialActive: true,
        trialExpires: { $lt: today },
      },
      {
        trialActive: false,
        subscriptionPlan: "Free",
        monthlyRequestCount: 5,
      }
    );
    console.log(updatedUser);
  } catch (error) {
    console.log(error);
  }
});

//Cron for the Free plan: run at the end of every month
cron.schedule("0 0 1 * * *", async () => {
  try {
    //get the current date
    const today = new Date();
    await User.updateMany(
      {
        subscriptionPlan: "Free",
        nextBillingDate: { $lt: today },
      },
      {
        monthlyRequestCount: 0,
      }
    );
  } catch (error) {
    console.log(error);
  }
});

//Cron for the Basic plan: run at the end of every month
cron.schedule("0 0 1 * * *", async () => {
  try {
    //get the current date
    const today = new Date();
    await User.updateMany(
      {
        subscriptionPlan: "Basic",
        nextBillingDate: { $lt: today },
      },
      {
        monthlyRequestCount: 0,
      }
    );
  } catch (error) {
    console.log(error);
  }
});

//Cron for the Premium plan: run at the end of every month
cron.schedule("0 0 1 * * *", async () => {
  try {
    //get the current date
    const today = new Date();
    await User.updateMany(
      {
        subscriptionPlan: "Premium",
        nextBillingDate: { $lt: today },
      },
      {
        monthlyRequestCount: 0,
      }
    );
  } catch (error) {
    console.log(error);
  }
});
//Cron paid plan

//----middlewares----
app.use(express.json()); //pass incoming json data
app.use(cookieParser()); //pass the cookie automatically
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));
//----Routes-----
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/openai", openAIRouter);
app.use("/api/v1/stripe", stripeRouter);

//---Error handler middleware----
app.use(errorHandler);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../aiFrontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../aiFrontend", "dist", "index.html"));
  });
}

//start the server
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
