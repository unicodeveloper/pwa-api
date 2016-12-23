module.exports = {

  db: process.env.MONGODB || process.env.MONGOHQ_URL,

  sessionSecret: process.env.SESSION_SECRET,

  fcm: process.env.FCM_API_KEY
  
};
