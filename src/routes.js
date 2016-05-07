var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn('/login');
var ensureLoggedOut = require('connect-ensure-login').ensureLoggedOut('/secure');

module.exports = function(app, passport) {

  app.get('/', function(req, res) {
    res.render('home.ejs', {
      request: req
    });
  });

  app.get('/secure',
    ensureLoggedIn,
    function(req, res) {
      res.render('secure.ejs', {
        request: req
      });
    }
  );

  app.get('/login',
    ensureLoggedOut,
    function(req, res) {
      res.render('login.ejs', {
        error: req.flash('error'),
        request: req
      });
    }
  );

  app.post('/login',
    ensureLoggedOut,
    passport.authenticate('local', {
      badRequestMessage: 'missing',
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true
    })
  );

  app.get('/logout',
    ensureLoggedIn,
    function(req, res) {
      req.logout();
      res.redirect('/');
    }
  );
};