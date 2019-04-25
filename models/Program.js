const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

//Create Program Schema

const ProgramSchema = new Schema({
  name: String,
  description: String,
  startTime: String,
  endTime: String,
  managers: [String],
  announcements: [String],
  overall_rating: Number,
  feedback: [
    {
      username: String,
      rating: Number,
      feedback: String
    }
  ],
  venue: String,
  notifications: Number
});

module.exports = Program = mongoose.model("programs", ProgramSchema);
