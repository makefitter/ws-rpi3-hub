import http from 'http';
import socket from 'socket.io';
export default (app) => {
    const server = http.createServer(app);
    const io = socket(server);
    io.on('connection', function (client) {
       
        console.log('Socket.io is connected!');
        client.on('disconnect', function () {
            console.log("Socket.io is disconnected!");
        });
        // client.on('incomingMessage', function (data) {
        //     console.log(data);

        // });
        // client.on('toBackEnd', function (data) {
        //     console.log(data);
        //     client.emit('message','test');
        // });
    });
    return {
        server:server,
        io:io
    };
}