const express = require('express')
const router = express.Router()
const carteCtrl = require('../controllers/carte')

router.get('/', carteCtrl.index)
//router.post('/', carteCtrl)

module.exports = router