module.exports = {

  db: process.env.MONGODB || process.env.MONGOHQ_URL,

  prerenderToken: process.env.PRERENDERTOKEN,

  sessionSecret: process.env.SESSION_SECRET,

  fcm: process.env.FCM_API_KEY,

  mailChimp: {
    listID: process.env.LISTID,
    apiKey: process.env.MAILCHIMP_KEY
  },

  mailOptions: {
    service: 'Gmail',
    port: 465,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  },

  trello: {
    key: process.env.TRELLO_KEY,
    secret: process.env.TRELLO_SECRET
  },

  blogger: {
    key: process.env.BLOGGER_KEY
  },

  slack: {
    key: process.env.SLACK_KEY
  },

  mandrill: {
    user: process.env.MANDRILL_USER,
    password: process.env.MANDRILL_PASSWORD
  },

  facebook: {
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: '/auth/facebook/callback',
    passReqToCallback: true
  },

  github: {
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: '/auth/github/callback',
    passReqToCallback: true
  },

  twitter: {
    consumerKey:      process.env.TWITTER_KEY,
    consumerSecret:   process.env.TWITTER_SECRET,
    token:            process.env.TWITTER_TOKEN,
    tokenSecret:      process.env.TWITTER_TOKEN_SECRET,
    callbackURL: '/auth/twitter/callback',
    passReqToCallback: true
  },

  google: {
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: '/auth/google/callback',
    passReqToCallback: true
  },

  linkedin: {
    clientID: process.env.LINKEDIN_ID,
    clientSecret: process.env.LINKEDIN_SECRET,
    callbackURL: '/auth/linkedin/callback',
    scope: ['r_basicprofile', 'r_emailaddress'],
    passReqToCallback: true
  }
};
