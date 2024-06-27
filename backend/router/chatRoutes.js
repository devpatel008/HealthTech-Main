import express from "express";
import {
    accessChat,
    fetchChats,
} from "../controller/chatControllers.js";

import {
    isUserAuthenticated,
} from "../middlewares/auth.js";
const router = express.Router();

router.route("/").post(isUserAuthenticated, accessChat);
router.route("/").get(isUserAuthenticated, fetchChats);

export default router;