var io = require('socket.io')(http);

io.use(function(socket, next) {
  session(socket.handshake, {}, next);
});

var users = {};

io.on('connection', function(socket) {

  var user = {
    id : socket.handshake.sessionID,
    name : 'a user'
  };

  users[user.id] = user;

  io.emit('data:users', users);

  socket.broadcast.emit('user:connect', user);

  console.log('user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
    delete users[user.id];
    io.emit('user:disconnect', user);
  });

});