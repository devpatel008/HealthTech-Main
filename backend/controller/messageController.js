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



// Patient-Doc
export const allMessages = catchAsyncErrors(async (req, res) => {
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      .populate("sender", "name pic email")
      .populate("chat");
    res.json(messages);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

//@description     Create New Message
//@route           POST /api/Message/
//@access          Protected
export const sendMessage = catchAsyncErrors(async (req, res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    console.log("Invalid data passed into request");
    return res.sendStatus(400);
  }

  var newMessage = {
    sender: req.user._id,
    content: content,
    chat: chatId,
  };

  try {
    var message = await Message.create(newMessage);

    message = await message.populate("sender", "name pic");
    message = await message.populate("chat");
    message = await User.populate(message, {
      path: "chat.users",
      select: "name pic email",
    });


    await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });

    res.json(message);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});
