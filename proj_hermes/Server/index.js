const express = require('express');
const app = express();
const http = require('http')
const cors = require('cors');
const { Server } = require('socket.io');

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;
const server = http.createServer(app);

const socket = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

socket.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on("send_message", (data) => {
        socket.emit("receive_message", data);
    })

    socket.on('disconnect', () => {
        console.log('User Disconnected', socket.id);
    })
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})


