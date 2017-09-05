// dependencies
const express = require('express')
const path = require('path')
var session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const keys = require('./keys.js')
const app = express()

const auth_route = require('./routes/auth.js')

// connect to mLab
// mongoose.connect(keys.mlab)
mongoose.connect(process.env.MLAB)

// set up sessions
// const mongo_store = new MongoStore({
//   url: keys.mlab,
//   ttl: 14 * 24 * 60 * 60
// })
const mongo_store = new MongoStore({
  url: process.env.MLAB,
  ttl: 14 * 24 * 60 * 60
})

app.use(session({
  store: mongo_store,
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false, httpOnly: false}
}))

// set login method on session
session.Session.prototype.login = function(user) {
  this.user = user;
};

app.use(express.static(path.join(__dirname, './dist')))
app.use(bodyParser.json())

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header('Access-Control-Allow-Credentials', 'true');
  next()
})

app.use('/auth', auth_route)

// send index.html to client
app.get("*", (req, res) => (
  res.end()
));

const PORT = process.env.PORT || 4000

app.listen(PORT, () => (
  console.log("Server running on port ", PORT)
))