const express = require('express')
const router = express.Router()

const controllerTelegram = require('../api/telegramMsg')

router.post('/telegram', controllerTelegram.sendMsg)

module.exports = router
