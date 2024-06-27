import express from "express";
import {
  getAllMessagestoAd,
  sendMessagetoAd,
} from "../controller/messageController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/send", sendMessagetoAd);
router.get("/getall", isAdminAuthenticated, getAllMessagestoAd);

export default router;
