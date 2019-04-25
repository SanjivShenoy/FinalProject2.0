const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
  name: String,
  type: Schema.Types.ObjectId,
  startTime: String,
  endTime: String,
  date: String,
  venue: String,
  managers: [String],
  tasks: [
    {
      name: String,
      task: String,
      isCompleted: Boolean
    }
  ],
  description: String,
  announcements: [String],
  overall_rating: Number,
  feedback: [
    {
      username: String,
      rating: Number,
      feedback: String
    }
  ],
  notifications: Number
});

module.exports = Item = mongoose.model("item", ItemSchema);
