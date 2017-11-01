const mongoose = require('mongoose');
// const bcrypt = require('bcrypt-nodejs');

// userSchema.methods.generateHash = phone => bcrypt.hashSync(phone, bcrypt.genSaltSync(8), null);

// userSchema.methods.comparePassword = function (phone) {
//   return bcrypt.compareSync(phone, this.phone);
// };

const user_schema = mongoose.Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  current_page: {type: Number, required: true}
});

const User = mongoose.model('User', user_schema);

module.exports = User