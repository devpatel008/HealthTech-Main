import express from "express";
import {
  addNewAdmin,
  addNewDoctor,
  getAllDoctors,
  getUserDetails,
  login,
  logoutAdmin,
  logoutPatient,
  patientRegister
} from "../controller/userController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
  isDocAuthenticated
} from "../middlewares/auth.js";
import {
  getDocAppointments
} from "../controller/appointmentController.js";

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);
router.post("/admin/doctor/addnew", isAdminAuthenticated, addNewDoctor);
router.get("/admin/doctors", getAllDoctors);
router.get("/patient/me", isPatientAuthenticated, getUserDetails);
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);
router.get("/doctor/getDocApp", isDocAuthenticated, getDocAppointments);

export default router;
