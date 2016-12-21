var jwt        = require('jsonwebtoken'),
    secrets    = require('./secrets');

module.exports = function(req, res, next){
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if(token) {
    // verifies secret and checks exp
    jwt.verify(token, secrets.sessionSecret, function(err, decoded) {
      if(err) {
        return res.json({ message: 'Unauthorized Access. Mismatched token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });
  } else {
      // if there is no token return an error
      return res.status(403).json({
          message: 'Unauthorized Access'
      });
    }
};