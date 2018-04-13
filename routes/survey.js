const express = require('express');
const router = express.Router()
const bcrypt = require('bcryptjs');
const User = require('../schema/user_schema.js')

router.post('/presurvey', (req, res) => { // to update pages and info

  console.log('from pre survey')
  console.log(req.body)
  console.log('session')
  console.log(req.session.user)
  
  if (req.session && req.session.user) { // Check if session exists
    User.findOne({ email: req.session.user.email }, function (err, user) {
      console.log('searching')
      if (!user) {
        console.log('not found')
        req.session.reset()
        res.send({ authorized: false })
      } else {
        console.log('found, updating...')

        user.preSurveyData = req.body

        user.save((err, success) => {
          if (err) throw err
          console.log('success. check mlab and cross your fingers.')
          res.end()
        })
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
    console.log('searching for user')
    User.findOne({ email: req.session.user.email }, function (err, user) {
      if (!user) {
        console.log('user not found')
        req.session.reset()
        res.send({ authorized: false })
      } else {
        // console.log('user found. updating...')
        // User.update(
        //   // update survey responses
        //   {postSurveyData: req.body},
        //   (err) => {
        //     if (err) {
        //       throw err;
        //     }
        //     console.log('updated. ending res.')
        //     res.end()
        //   }
        // )
        console.log('found, updating...')
        
        user.postSurveyData = req.body

        user.save((err, success) => {
          if (err) throw err
          console.log('success. check mlab and cross your fingers.')
          res.end()
        })
      }
    });
  } else {
    res.send({ authorized: false })
  }

})

module.exports = router