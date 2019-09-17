require('dotenv').config()
const express = require('express')
const app = express()
const ctrl = require('./controller')
const middleware = require('./middleware')
const session = require('express-session')
const {SERVER_PORT} = process.env


app.use(express.json())


app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))