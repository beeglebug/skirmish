  var users = [
    {
      username: 'test1',
      password: 'password1',
      squadrons: [
        {
          name: 'My Squadron',
          ships: [

          ]
        }
      ]
    },
    {
      username: 'test1',
      password: 'password1',
      squadrons: [
        {
          name: 'My Squadron',
          ships: [

          ]
        }
      ]
    }
  ];

module.exports = {

  findByUsername: function(username, cb) {
    var user = users.find(function(user) {
      return user.username === username;
    });
    if(!user) {
      return cb(new Error('no user found'));
    }
    return cb(null, user);
  },

  findById: function(id, cb) {
    var user = users.find(function(user) {
      return user.id === id;
    });
    if(!user) {
      return cb(new Error('no user found'));
    }
    return cb(null, user);
  }
};