var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn('/login');
var ensureLoggedOut = require('connect-ensure-login').ensureLoggedOut('/');

module.exports = function(app, passport) {

  app.use(function(req, res, next) {
    res.locals.user = req.user;
    next();
  });

  app.get('/', function(req, res) {
    res.render('index');
  });

  app.get('/game',
    ensureLoggedIn,
    function(req, res) {
      res.render('game/index');
    }
  );

  app.get('/login',
    ensureLoggedOut,
    function(req, res) {
      res.render('login', {
        error: req.flash('error')
      });
    }
  );

  app.post('/login',
    ensureLoggedOut,
    passport.authenticate('local', {
      badRequestMessage: 'missing',
      successReturnToOrRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true
    })
  );

  app.get('/logout',
    function(req, res) {
      req.logout();
      res.redirect('/');
    }
  );

  app.use(function(req, res){
    res.render('404', { status: 404 });
  });

};