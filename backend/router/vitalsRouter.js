import express from "express";
import {
  updateVitals,
  getLatestVitals
} from "../controller/vitalsController.js";
import {
  isUserAuthenticated
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/addvitals", isUserAuthenticated, updateVitals);
router.get("/getlatestvitals", isUserAuthenticated, getLatestVitals);


export default router;