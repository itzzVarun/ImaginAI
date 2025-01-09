import dotenv from "dotenv";
dotenv.config();
import asyncHandler from "express-async-handler";
import axios from "axios";
import { v2 as cloudinary } from "cloudinary";
import ContentHistory from "../models/ContentHistory.js";
import User from "../models/User.js";

//!Configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

//----OpenAI Controller----

const openAIController = asyncHandler(async (req, res) => {
  const { prompt } = req.body;
  const encodedPrompt = encodeURIComponent(prompt);
  const seed = () => {
    // Generate a random integer between 0 and 2^32 - 1
    return Math.floor(Math.random() * 2 ** 32);
  };
  //console.log(seed());
  const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=512&height=512&model=flux&seed=${seed()}`; // Construct the URL dynamically
  //console.log(prompt);
  //console.log(url);
  try {
    const imageResponse = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    //Save the image into cloudinary
    const image = await cloudinary.uploader.upload(url, {
      folder: "ai-art-work",
    });
    //console.log(image);
    //send the response
    //Create the history
    const imageCreated = await ContentHistory.create({
      user: req?.user?._id,
      prompt: prompt,
      url: image.url,
      public_id: image.public_id,
    });
    //Push the content into the user
    const userFound = await User.findById(req?.user?.id);
    userFound.contentHistory.push(imageCreated?._id);
    //Update the api Request count
    userFound.apiRequestCount += 1;
    await userFound.save();
    res.status(200).json(imageCreated);
  } catch (error) {
    throw new Error(error);
  }
});

export default openAIController;
