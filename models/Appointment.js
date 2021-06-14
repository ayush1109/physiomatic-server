const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var d = new Date();
var month = d.getMonth() + 1;

const appointmentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: "patient",
  },
  treatment: {
    type: Schema.Types.ObjectId,
    ref: "treatment",
  },
  title: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    default: 0,
  },
  date: {
    type: String,
    default: d.getDate() + '/' + month + '/' + d.getFullYear()
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  allDay: {
    type: Boolean,
    required: true,
  },
  formData: {
    type: Object,
    // required:true
  },
});
module.exports = new mongoose.model("appointment", appointmentSchema);
