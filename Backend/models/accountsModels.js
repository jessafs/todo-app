const mongoose = require("mongoose");
const { Schema } = mongoose;

const loginModel = new Schema({
  username: { type: String, required: true,unique:true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  fullName: { type: String, required: true },
  // date: { type: Date, default: Date.now },
});

const Account = mongoose.model("Account", loginModel);
module.exports = Account;
