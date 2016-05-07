var users = [
  {
    id: 1,
    username: 'slee',
    password: 'password'
  }
];

module.exports = {

  findByUsername: function(username, cb) {
    var user = users.find(function(user) {
      return user.username === username;
    });
    if(!user) {
      return cb('error');
    }
    return cb(null, user);
  },

  findById: function(id, cb) {
    var user = users.find(function(user) {
      return user.id === id;
    });
    if(!user) {
      return cb('error');
    }
    return cb(null, user);
  }
};