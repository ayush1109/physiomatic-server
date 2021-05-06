const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  patientName: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },

  recommend: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("feedback", feedbackSchema);
