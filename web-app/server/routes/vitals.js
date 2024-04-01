const express = require("express");
const router = express.Router();
const {
  editVitals,
  getData,
  getAllMedication,
  postMedicalHistory,
} = require("../controllers/patient");
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/task");
// const { route } = require("./auth");
router.post("/editVitals", editVitals);
router.get("/vitals", getData);
router.get("/allMedications", getAllMedication);
router.post("/medicalHistory", postMedicalHistory);
router.get("/getAllTasks", getAllTasks);
router.post("/createTask", createTask);
router.route("/task/:id").get(getTask).delete(deleteTask).patch(updateTask);

//router.post('/login', login)

module.exports = router;
