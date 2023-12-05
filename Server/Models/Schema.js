const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Email: String,
  Password: String,
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
