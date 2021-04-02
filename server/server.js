const path = require('path')
const express = require('express')
const server = express()

const uploadRoutes = require('./routes/upload')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/', uploadRoutes)

module.exports = server
