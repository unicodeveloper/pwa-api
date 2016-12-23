var User          = require('./controllers/user.server.controller'),
    Notification  = require('./controllers/notification.server.controller');

module.exports = function(app) {

  app.get('/api',  User.welcome);

  app.post('/api/users',           User.createNewUser);
  app.delete('/api/user/:user_id', User.deleteOneUser);

  app.post('/api/notify', Notification.notifyUsers);
};
