const express = require("express");
const router = express.Router();
const {
  getAllPatients,
  postMedication,
  getPatientVitals,
  getPatientHistory,
} = require("../controllers/doctor");

router.get("/getAllPatients", getAllPatients);
router.get("/getPatientVitals/:id", getPatientVitals);
router.get("/getPatientHistory/:id", getPatientHistory);
router.post("/medication/:id", postMedication);
// router.get('/vitals', getAllData)
//router.post('/login', login)

module.exports = router;
