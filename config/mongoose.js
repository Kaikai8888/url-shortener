const mongoose = require('mongoose')
const MONGODB_URI = 'mongodb://localhost/url-shortener'

mongoose.connect(MONGODB_URI)
const db = mongoose.connection

db.on('error', () => console.log('MongoDB error!'))

db.once('open', () => console.log('MongoDB connect.'))

module.exports = db