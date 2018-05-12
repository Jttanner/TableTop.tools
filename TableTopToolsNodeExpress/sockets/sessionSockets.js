exports = module.exports = function (io) {
    io.sockets.on('connection', function (socket) {
        socket.on('joinSession', function (data) {
            console.log(data.name.replace(/\s/g, ""));
            if (data.name.replace(/\s/g, "").length == 0) {
                socket.emit('joinSessionNoName', { message: 'You must use a display name' });
                console.log('attempt to join with no name into ' + data.room);
            }
            else if (false) {
                //for name taken
            }
            else {
                console.log('\'' + data.name + '\'' + ' is attempting to join session named \'' + data.room + '\'');
            }
        });
        socket.on('messageToServer', function (data) {
            console.log('message from ' + data.name + ': ' + data.message + ' in room ' + data.room);
            //TODO: check if actually in the room
            var message = {
                room: data.room,
                name: data.name,
                message: data.message
            };
            socket.emit('messageToClient', message);
        });
    });
};
//# sourceMappingURL=sessionSockets.js.map