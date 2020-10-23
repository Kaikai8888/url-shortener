const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const router = require('./routes')

const app = express()
const PORT = process.env.PORT || 3000
const URL = process.env.PORT ? 'https://polar-ridge-08340.herokuapp.com/' : 'http://localhost'

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)

app.listen(PORT, () => console.log(`App is listening on ${URL}:${PORT}`))
