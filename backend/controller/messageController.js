import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { MessageAd } from "../models/messageSchema.js";
// import "express-async-handler";
// const { asyncHandler } = "express - async - handler"
import { Message } from "../models/messageModel.js";
// const Message = require("../models/messageModel");
// const User = require("../models/userModel");
import { Chat } from "../models/chatModel.js";
import { User } from "../models/userSchema.js";
// const Chat = require("../models/chatModel");


// Admin
export const sendMessagetoAd = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }
  await MessageAd.create({ firstName, lastName, email, phone, message });
  res.status(200).json({
    success: true,
    message: "Message Sent!",
  });
});

export const getAllMessagestoAd = catchAsyncErrors(async (req, res, next) => {
  const messages = await MessageAd.find();
  res.status(200).json({
    success: true,
    messages,
  });
});
