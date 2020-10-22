const express = require('express')
const router = express.Router()
const home = require('./modules/home.js')
const urls = require('./modules/urls.js')

router.use('/', home)
router.use('/urls', urls)

module.exports = router