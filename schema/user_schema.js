const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// userSchema.methods.generateHash = phone => bcrypt.hashSync(phone, bcrypt.genSaltSync(8), null);

let user_schema = mongoose.Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  current_page: {type: Number, required: true},
  preSurveyData: {type: Array},
  postSurveyData: {type: Array}
});

user_schema.methods.comparePassword = function (comparePassword) {
  return bcrypt.compareSync(comparePassword, this.password);
};

const User = mongoose.model('User', user_schema);

module.exports = User