const express = require('express')
const router = express.Router()
const { editVitals, getAllData } = require('../controllers/vitals')

router.post('/editVitals', editVitals);
router.get('/vitals', getAllData)
//router.post('/login', login)

module.exports = router
