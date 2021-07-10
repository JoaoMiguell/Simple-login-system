const express = require('express')
const route = require('./route')

const server = express()

server.set('view engine', 'ejs')
server.use(express.static("public"))

server.use(express.urlencoded({extended: true}))

server.use(route)

server.listen(3000, () => console.log('Status Server: ON'))