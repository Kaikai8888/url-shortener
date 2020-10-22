const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const router = require('./routes')

const app = express()
const PORT = 3000
const URL = 'http://localhost'

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)

app.listen(PORT, () => console.log(`App is listening on ${URL}:${PORT}`))
