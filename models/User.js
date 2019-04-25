const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

//Create user Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password_hash: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  google: {
    googleId: { type: String, required: false }
  },
  user_type: {
    type: String
    //required: true
  },
  programs_managed: [
    {
      name: String,
      task: String,
      isCompleted: Boolean
    }
  ],
  subscription: [
    {
      id : String,
      name: String,
      startTime: String,
      // endTime: String,
      venue: String,
      // notifications: Number,
      announcements: []
    }
  ]
});

// Define schema methods
UserSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.local.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

//Define hooks for pre-saving
UserSchema.pre("save", function(next) {
  if (!this.password_hash) {
    console.log("=======NO PASSWORD PROVIDED=======");
    next();
  } else {
    this.password_hash = this.hashPassword(this.password_hash);
    next();
  }
});

module.exports = User = mongoose.model("users", UserSchema);
