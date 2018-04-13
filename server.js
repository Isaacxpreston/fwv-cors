// dependencies
const express = require('express')
const cors = require('cors')
const path = require('path')
var session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//
// const keys = require('./keys.js') // development
//

const app = express()

// reference: https://medium.com/trisfera/using-cors-in-express-cac7e29b005b
var allowedOrigins = [
  'https://futures-test-cors.herokuapp.com',
  'https://futures-without-violence-vpv.herokuapp.com',
  'https://changingmindsnow.org'
];
app.use(cors({
  credentials: true,
  origin: function (origin, callback) {
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

const auth_route = require('./routes/auth.js')
const surveyRoute = require('./routes/survey.js')

// connect to mLab
// mongoose.connect(keys.mlab) // development
mongoose.connect(process.env.MLAB) // production

// set up sessions
// const mongo_store = new MongoStore({ // development
//   url: keys.mlab,
//   ttl: 14 * 24 * 60 * 60
// })

const mongo_store = new MongoStore({ // production
  url: process.env.MLAB,
  ttl: 14 * 24 * 60 * 60
})

app.use(session({
  store: mongo_store,
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: {
    domain: '.changingmindsnow.org',
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

// CORS
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//   res.header('Access-Control-Allow-Credentials', 'true');
//   next()
// })

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