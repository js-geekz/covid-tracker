const express = require('express')
const cors = require('cors')
const routes = require('./routes/index')

let app = express()

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.use(express.static('dist'))

app.use('/', routes)

app.listen(8000, () => console.log('Example app listening on port 8000!'))
