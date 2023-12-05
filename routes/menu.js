const express = require('express')
const router = express.Router()
const menuCtrl = require('../controllers/menu')

router.get('/', menuCtrl.index)
//router.post('/', menuCtrl)

module.exports = router