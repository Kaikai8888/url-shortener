const express = require('express')
const router = express.Router()

const randomString = require('../../models/functions/random-string.js')
require('../../config/mongoose.js')
const Url = require('../../models/url.js')

const URL_LENGTH = 5
const DOMAIN = process.env.PORT ? 'https://polar-ridge-08340.herokuapp.com/' : 'http://localhost:3000/'

//shorten url
router.post('/', (req, res) => {
  const originalURL = req.body.originalURL
  Url.find()
    .lean()
    .then(urls => {
      const existingUrl = urls.find(url => url.originalURL === originalURL)
      if (existingUrl) {
        res.render('index', { shortenURL: existingUrl.shortenURL })
      } else {
        let shortenURL
        do {
          shortenURL = DOMAIN + randomString(URL_LENGTH)
        } while (urls.some(url => url.shortenURL === shortenURL))

        Url.create({ originalURL, shortenURL })
          .then(() => res.render('index', { shortenURL }))
          .catch(error => res.render('error', { errorMessage: 'Invalid URL!' }))
      }
    })
    .catch(error => console.error(error))
})



module.exports = router