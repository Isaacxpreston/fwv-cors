// dependencies
const express = require('express')
const path = require('path')
var session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//
const keys =  {
  mlab: 'mongodb://chgmindsmdbuser:UFuZDy8Ul3g9LFB@ds123906-a0.mlab.com:23906,ds123906-a1.mlab.com:23906/changingminds?replicaSet=rs-ds123906'
}
//

const app = express()


// CORS
// reference: https://stackoverflow.com/questions/32424699/passport-express-session-auth-breaking-when-moving-server-to-a-cors-location
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  if ('OPTIONS' == req.method) {
      res.send(200);
   } else {
      next();
   }
});

const auth_route = require('./routes/auth.js')
const surveyRoute = require('./routes/survey.js')

// connect to mLab
mongoose.connect(keys.mlab)
// mongoose.connect(process.env.MLAB)

// set up sessions
const mongo_store = new MongoStore({ 
  url: keys.mlab,
  // url: process.env.MLAB,
  ttl: 14 * 24 * 60 * 60
})

app.use(session({
  store: mongo_store,
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false,
    httpOnly: false
  }
}))

// set login method on session
session.Session.prototype.login = function (user) {
  this.user = user;
};

app.use(express.static(path.join(__dirname, './dist')))
app.use(bodyParser.json())


app.use('/auth', auth_route)
app.use('/survey', surveyRoute)

// send index.html to client
app.get("*", (req, res) => (
  res.end()
));

const PORT = process.env.PORT || 4000

app.listen(PORT, () => (
  console.log("Server running on port ", PORT)
))