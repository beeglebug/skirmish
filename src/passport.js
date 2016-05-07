var passport = require('passport');
var passportLocal = require('./middleware/passport-local');
var users = require('./users.js');

passport.use(passportLocal);

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

module.exports = passport;