const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const connectDB = require('./utils/db.js')

const ArticleRouter = require('./routes/articles.js')
const UserRouter = require('./routes/users.js')

require('dotenv').config()

const server = express()
connectDB()

server.use(helmet())
server.use(cors())
server.use(morgan('dev'))
server.use(express.json())

server.get('/', (req, res) => {
  res.send(`Server is runing on port ${PORT}`)
})

server.use('/articles', ArticleRouter)
server.use('/users', UserRouter)

const PORT = process.env.PORT || 3333
server.listen(PORT, () => {
  console.log(`\n** Server is listening on port ${PORT} **`)
})
