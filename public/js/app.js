var socket = io();

var users = {};

socket.on('data:users', function(userList) {
  users = userList;
  redrawUserList();
});

socket.on('user:connect', function(user) {
  users[user.id] = user;
  redrawUserList();
});

socket.on('user:disconnect', function(user) {
  delete users[user.id];
  redrawUserList();
});

function redrawUserList() {
  ReactDOM.render(
    React.createElement(UserList, { users : users }),
    document.getElementById('user-list')
  );
}