const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user')
const authMiddleware = require('../middlewares/auth')

router.get('/',  userCtrl.index)
router.get('/:id', userCtrl.findOneById )
//router.post('/', carteCtrl)

module.exports = router