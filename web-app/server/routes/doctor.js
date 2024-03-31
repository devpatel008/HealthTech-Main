const express = require('express')
const router = express.Router()
const { getAllPatients,
    postMedication,
    getPatient } = require('../controllers/doctor')

router.get('/getAllPatients', getAllPatients);
router.get("/getPateint/:id", getPatient)
router.post("/medication/:id", postMedication)
// router.get('/vitals', getAllData)
//router.post('/login', login)

module.exports = router
