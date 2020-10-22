const express = require('express')
const router = express.Router()

require('../../config/mongoose.js')


router.get('/', (req, res) => res.render('index'))


module.exports = router
