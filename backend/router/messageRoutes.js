import express from "express";
import {
    allMessages,
    sendMessage,
} from "../controller/messageController.js";
import {
    isUserAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.route("/:chatId").get(isUserAuthenticated, allMessages);
router.route("/").post(isUserAuthenticated, sendMessage);

export default router;
