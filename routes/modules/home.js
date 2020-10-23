const express = require('express')
const router = express.Router()

require('../../config/mongoose.js')
const Url = require('../../models/url.js')
const DOMAIN = 'http://localhost:3000/'

router.get('/', (req, res) => res.render('index'))

//redirect to original url
router.get('/:short', (req, res) => {
  const shortenURL = DOMAIN + req.params.short
  Url.find({ shortenURL })
    .then(urls => {
      if (urls.length === 0) return res.render('error', { errorMessage: 'Cannot find this URL!' })
      res.redirect(urls[0].originalURL)
    })
    .catch(error => console.error(error))
})

module.exports = router
