var express = require('express');
var constants = require('./src/constants.js');
var session = require('express-session');
var passport = require('passport');
var passportLocal = require('./src/middleware/passport-local');
var flash = require('connect-flash');
var bodyParser = require('body-parser');
var users = require('./src/users.js');

var port = 8080;
var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: constants.SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

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

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

require('./src/routes.js')(app, passport);

app.listen(port, function(){
  console.log('listening on port ' + port);
});



