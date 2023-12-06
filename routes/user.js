const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user')
const authMiddleware = require('../middlewares/auth')

router.get('/', [authMiddleware], userCtrl.index)
//router.post('/', carteCtrl)

module.exports = router