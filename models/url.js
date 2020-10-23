const mongoose = require('mongoose')
const urlSchema = new mongoose.Schema({
  originalURL: {
    type: String,
    required: true,
    match: [/(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/, 'Invalid URL']
  },
  shortenURL: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Url', urlSchema)
