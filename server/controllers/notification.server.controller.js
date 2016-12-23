 var User       = require('../models/user.server.model'),
    jwt         = require('jsonwebtoken'),
    bluebird    = require('bluebird'),
    Q           = require('q'),
    fs          = bluebird.promisifyAll(require('fs')),
    multiparty  = require('multiparty'),
    uuid        = require('node-uuid'),
    gravatar    = require('gravatar'),
    _           = require('lodash'),
    gcm         = require('node-gcm'),
    secrets     = require('../../config/secrets');

module.exports = {


  /**
   * Send Notification to Users
   * @param  req
   * @param  res
   * @return json
   */
  notifyUsers: function(req, res){

    var sender = new gcm.Sender(secrets.fcm);

    // Prepare a message to be sent
    var message = new gcm.Message({
        notification: {
          title: "Hello, World",
          icon: "ic_launcher",
          body: "Click to see the latest commit"
        }
    });

    User.find({}, function(err, users) {

      // user subscription ids to deliver message to
      var user_ids = _.map(users, 'user_id');

      console.log("User Ids", user_ids);

      console.log(sender);

      // Actually send the message
      sender.send(message, { registrationTokens: user_ids }, function (err, response) {
        if (err) {
            console.error(err);
        } else {
          return res.json(response);
        } 
      });
    });
   
  }
};