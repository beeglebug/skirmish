var express = require('express');
var constants = require('./src/constants.js');
var session = require('express-session');
var flash = require('connect-flash');
var bodyParser = require('body-parser');
var passport = require('./src/passport.js');

var port = 8080;
var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: constants.SECRET }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

require('./src/routes.js')(app, passport);

app.listen(port, function(){
  console.log('server started on port ' + port);
});



