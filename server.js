const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const connectDB = require('./utils/db.js')

require('dotenv').config()

const server = express()
connectDB()

server.use(helmet())
server.use(morgan('dev'))
server.use(cors())

server.get('/', (req, res) => {
  res.send(`Server is runing on port ${PORT}`)
})

const PORT = process.env.PORT || 3333
server.listen(PORT, () => {
  console.log(`\n** Server is listening on port ${PORT} **`)
})
