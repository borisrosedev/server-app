const express = require('express')
const router = express.Router()
const menuCtrl = require('../controllers/menu')

router.get('/', menuCtrl.index)
router.get('/:id', menuCtrl.findOneById)
//router.post('/', menuCtrl)

module.exports = router