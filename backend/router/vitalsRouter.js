import express from "express";
import {
  updateVitals,
  getLatestVitals
} from "../controller/vitalsController.js";
import {
  isPatientAuthenticated
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/addvitals", isPatientAuthenticated, updateVitals);
router.get("/getlatestvitals", isPatientAuthenticated, getLatestVitals);


export default router;
