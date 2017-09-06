const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String},
  weight: {type: Number},
  age: {type: Number},
  gender: {type: String},
  activityLevel: {type: String},
  goal: {type: String}
})

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
