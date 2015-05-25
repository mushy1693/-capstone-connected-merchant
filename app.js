//require all modules
var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    server = require('http').Server(app),
    config = require('./server/config.js');

//set middleware
app.use(express.static(__dirname + '/client'));

//get home route
app.get('/', function(req,res){

  res.sendFile(__dirname + config.set.home);

});

//get merchant chat route
app.get('/merchant-chat', function(req,res){

  res.sendFile(__dirname + config.set.merchantChat);

});

//get traveler chat route
app.get('/traveler-chat', function(req,res){

  res.sendFile(__dirname + config.set.travelerChat);

});

//restful api route
require('./server/route/traveler-route')(app);
require('./server/route/merchant-route')(app);

//listen for connection
server.listen(config.set.port, function(){

  console.log('Listening on port 3000');

});

var io = require('socket.io').listen(server);

var users = {};

io.on('connection',function(socket){

  socket.on("send-chat", function(message){

    io.emit('all', message);

  });

  socket.on('join-chat', function(shop){

    socket.room = shop;
    if(users[socket.room] == null){
      users[socket.room] = [];
    }
    socket.join(socket.room);

  });

  socket.on('username',function(username){

    socket.user = username;
    users[socket.room].push(socket.user);
    io.to(socket.room).emit('getUsers',users[socket.room]);

  });

  socket.on('getUserOnLoad', function(){

    io.to(socket.room).emit('getUsers',users[socket.room]);

  });

  socket.on('merchant-send-message', function(message){

    io.to(socket.room).emit('merchant-response', {mes:message, shop:socket.room});

  });

  socket.on('traveler-send-message', function(message){

    io.to(socket.room).emit('traveler-response', {mes:message, user:socket.user});

  });

  socket.on('disconnect',function(){

    if(users[socket.room]!= null){
      users[socket.room].splice(users[socket.room].indexOf(socket.user), 1);
    }
    socket.leave(socket.room);
    io.to(socket.room).emit('getUsers',users[socket.room]);

  });

});
