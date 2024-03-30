const express = require('express')
const router = express.Router()
const { getAllPatients } = require('../controllers/getAllPatients')

router.get('/getAllPatients', getAllPatients);
// router.get('/vitals', getAllData)
//router.post('/login', login)

module.exports = router
