const express = require('express')
const { getHealthPassbook, updateHealthPassbook } = require('../controllers/healthControllers.js')
const { authMiddleware } = require('../middlewares/authMiddleware.js')

const router = express.Router()

router.get('/passbook', authMiddleware, getHealthPassbook)
router.put('/passbook', authMiddleware, updateHealthPassbook)

module.exports = router
