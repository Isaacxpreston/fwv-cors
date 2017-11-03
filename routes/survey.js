const express = require('express');
const router = express.Router()
const User = require('../schema/user_schema.js')

router.post('/presurvey', (req, res) => { // to update pages and info
  
  if (req.session && req.session.user) { // Check if session exists
    User.findOne({ email: req.session.user.email }, function (err, user) {
      if (!user) {
        req.session.reset()
        res.send({ authorized: false })
      } else {
        User.update(
          // update survey responses
          {preSurveyData: req.body},
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
    res.send({ authorized: false })
  }

})

// duplicate of above. todo: refactor

router.post('/postsurvey', (req, res) => { // to update pages and info

  console.log('from postsurvey')
  console.log(req.body)
  
  if (req.session && req.session.user) { // Check if session exists
    User.findOne({ email: req.session.user.email }, function (err, user) {
      if (!user) {
        req.session.reset()
        res.send({ authorized: false })
      } else {
        User.update(
          // update survey responses
          {postSurveyData: req.body},
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
    res.send({ authorized: false })
  }

})

module.exports = router