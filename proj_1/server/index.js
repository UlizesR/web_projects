const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
const {Server} = require('socket.io')

app.use(cors())
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    },
})

io.on('connection', socket => {
    console.log('a user connected', socket.id)
    socket.on('disconnect', () => {
        console.log('User Disconnected', socket.id)
    })
})

server.listen(3001, () => {
    console.log('Server listening on port 3001')
})