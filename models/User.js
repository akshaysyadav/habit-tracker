const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
  email: String
});

UserSchema.plugin(passportLocalMongoose); // adds username, hash, salt

module.exports = mongoose.model('User', UserSchema);
