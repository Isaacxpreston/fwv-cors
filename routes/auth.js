const express = require('express');
const router = express.Router()
const bcrypt = require('bcryptjs');
const User = require('../schema/user_schema.js')

const user_query = (q) => {
  return User.findOne({
    email: q.email.toLowerCase()
  })
}

// should have register, login, logout, check, and update
// params so far are school/email/password, survey answers, and last page visited

// sign up or update information
router.post('/register', (req, res) => {

  let createPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  }

  let temp = new User({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email.toLowerCase(),
    password: createPassword(req.body.password),
    current_page: 0,
    preSurveyData: [],
    postSurveyData: []
  })

  user_query(req.body).exec((err, data) => {
    if (err) {
      throw err
    }
    if (!data) {
      temp.save((err) => {
        if (err) {
          throw err
        }
        res.send({
          authorized: true,
          firstName: req.body.firstName,
          page: 0,
        })
      })
    } else {
      res.send({authorized: false})
    }
  })
})

router.post('/update', (req, res) => { // to update pages and info

  if (req.session && req.session.user) { // Check if session exists
    let queryEmail = req.session.user.email.toLowerCase()
    User.findOne({ email: queryEmail }, function (err, user) {
      if (!user) {
        req.session.reset()
        res.send({authorized: false})
      } else {
        User.update(
          { email: req.session.user.email },
          { current_page: req.body.current_page },
          (err) => {
            if (err) {
              throw err;
            }
            res.end()
          }
        )
      }
    });
  } else {
    res.send({authorized: false})
  }

})

// log user in
router.post('/login', function(req, res) {
  let queryEmail = req.body.email.toLowerCase()
  User.findOne({ email: queryEmail }, function(err, user) {
    if (!user) { // if no user
      res.send({authorized: false})
    } else { // if user
      if (user.comparePassword(req.body.password)) { // if password match
        req.session.login(user) // call login method
        req.session.save((err) => {
          res.send({
            authorized: true,
            firstName: user.first_name,
            page: user.current_page
          })
        })
      } else { // passwords do not match
        res.send({authorized: false})
      }
    }
  })
})

// check if user is authenticated
router.get('/authenticate', function(req, res) {
  console.log('authenticating')
  console.log(req.session)
  if (req.session && req.session.user) { // Check if session exists
    console.log('user found')
    // lookup the user in the DB by pulling their email from the session
    let queryEmail = req.session.user.email.toLowerCase()
    User.findOne({ email: queryEmail }, function (err, user) {
      if (!user) {
        // reset session if user not found
        req.session.destroy()
        res.send({authorized: false})
      } else {
        res.send({
          authorized: true,
          firstName: user.first_name,
          page: user.current_page
        })
      }
    });
  } else {
    console.log('no user found')
    // fired if no session present
    res.send({authorized: false})
  }
});

router.get('/logout', function(req, res) {
  req.session.destroy()
  res.send({authorized: false})
});

module.exports = router