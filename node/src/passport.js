var passport = require('passport');
var passportLocal = require('./middleware/passport-local');
var users = require('../data/users.js');

passport.use(passportLocal);

passport.serializeUser(function(user, cb) {
  cb(null, user.username);
});

passport.deserializeUser(function(username, cb) {
  users.findByUsername(username, cb);
});

module.exports = passport;