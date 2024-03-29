const express = require('express')
const router = express.Router()
const {heartData} = require('../controllers/heartpost')

router.post('/heart', heartData);
//router.post('/login', login)

module.exports = router
