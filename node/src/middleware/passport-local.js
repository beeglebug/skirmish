var LocalStrategy = require('passport-local').Strategy;
var users = require('../../data/users.js');

module.exports = new LocalStrategy(function(username, password, done) {

  var user = users.findByUsername(username, function(err, user) {
    if (!user) {
      return done(null, false, { message: 'no such user' });
    }

    if (user.password !== password) {
      return done(null, false, { message: 'bad password' });
    }

    return done(null, user);
  });
});