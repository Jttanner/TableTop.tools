exports = module.exports = function (io) {
    io.sockets.on('connection', function (socket) {
        socket.on('joinSession', function (data) {
            console.log('\'' + data.name + '\'' + ' is attempting to join session named \'' + data.room + '\'');
        });
    });
}