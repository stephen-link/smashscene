const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
const Knex = require('knex')
const knexConfig = require('../knexfile')
const { Model } = require('objection')



const knex = Knex(knexConfig.development)
Model.knex(knex)

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

app.listen(config.port)



