const mongoose = require('mongoose')
const urlSchema = new mongoose.Schema({
  originalURL: {
    type: String,
    required: true,
  },
  shortenURL: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Url', urlSchema)
