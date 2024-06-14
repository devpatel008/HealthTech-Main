import express from "express";
import {
  deleteAppointment,
  getAllAppointments,
  postAppointment,
  updateAppointmentStatus
  // getDocAppointments
} from "../controller/appointmentController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
  isDocAuthenticated
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isPatientAuthenticated, postAppointment);
// router.get("/getDocApp", isDocAuthenticated, getDocAppointments);
router.get("/getall", isAdminAuthenticated, getAllAppointments);
router.put("/update/:id", isAdminAuthenticated, updateAppointmentStatus);
router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment);

export default router;
