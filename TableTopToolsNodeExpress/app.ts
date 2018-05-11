import debug = require('debug');
import express = require('express');
import path = require('path');

import routes from './routes/index';
import users from './routes/user';
import dice from './routes/Dice';
import layout from './routes/layout';
import scheduling from './routes/scheduling';
import sessions from './routes/sessions';

var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function (socket) {
    console.log('connection');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

app.set('view options', { layout: 'views/layout.html' });

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/dice', dice);
//app.use('/layout', layout);
app.use('/scheduling', scheduling);
app.use('/sessions', sessions);
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err: any, req, res, next) => {
        res.status(err['status'] || 500);
        res.render('Error.html', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err: any, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

var server = http.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});
