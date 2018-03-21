var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var shell = require('shelljs');

app.set('io', io);
app.set('shell', shell);

http.listen(3000, function(){
    console.log("Servidor rodando");
});