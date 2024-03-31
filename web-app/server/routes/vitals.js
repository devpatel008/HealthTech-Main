const express = require('express')
const router = express.Router()
const { editVitals, getData, getAllMedication } = require('../controllers/patient')

router.post('/editVitals', editVitals);
router.get('/vitals', getData)
router.get("/allMedications", getAllMedication)
//router.post('/login', login)

module.exports = router
