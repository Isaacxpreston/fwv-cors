const express = require('express');
const router = express.Router()
const User = require('../schema/user_schema.js')

const user_query = (q) => {
  return User.findOne({
    email: q.email
  })
}

// should have register, login, logout, check, and update
// params so far are school/email/password, survey answers, and last page visited

// sign up or update information
router.post('/register', (req, res) => {
  var temp = new User({
    name: req.body.name,
    email: req.body.email,
    school: req.body.school,
    password: req.body.password,
    current_page: 1
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
        res.send(`Added new user with email '` + req.body.email + `' to mLab database`)
      })
    } else {
      // update user here
      // todo -> if found, just log them in. update should be a separate route.
      User.update(
      {
        email: req.body.email
      },
      {
        name: req.body.name,
        school: req.body.school,
        password: req.body.password
      }, function (err) {
        if (err) {
          throw err;
        }
        res.send(`Updated user with email '` + req.body.email + `' in mLab database`)
      })
    }
  })
})

router.post('/update', (req, res) => {
  console.log('updating')
  console.log(req.body)
  if (req.session && req.session.user) { // Check if session exists
    User.findOne({ email: req.session.user.email }, function (err, user) {
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
  User.findOne({ email: req.body.email }, function(err, user) {
    if (!user) { // if no user
      res.send({authorized: false})
    } else { // if user
      if (req.body.password === user.password) { // if password match
        req.session.login(user) // call login method
        req.session.save((err) => {
          console.log('from login')
          console.log(req.session)
          res.send({
            authorized: true,
            user: user
          })
        })
      } else { // passwords do not match
        // req.session.reset()
        res.send({authorized: false})
      }
    }
  })
})

// check if user is authenticated
router.get('/authenticate', function(req, res) {
  console.log('from authenticate')
  console.log(req.session)
  if (req.session && req.session.user) { // Check if session exists
    // lookup the user in the DB by pulling their email from the session
    User.findOne({ email: req.session.user.email }, function (err, user) {
      if (!user) {
        // reset session if user not found
        req.session.destroy()
        res.send({authorized: false})
      } else {
        res.send({
          authorized: true,
          user: user // eventually will include 'last page' and other client side render information
        })
      }
    });
  } else {
    // fired if no session present
    res.send({authorized: false})
  }
});

router.get('/logout', function(req, res) {
  req.session.destroy()
  res.send({authorized: false})
});

module.exports = router