const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var d = new Date();
var month = d.getMonth() + 1;
var day = d.getDate();

const Income = new Schema({
  date: {
    type: String,
    default: day + '/' + month + '/' + d.getFullYear()
  },
  itemName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  }

});

module.exports = new mongoose.model("Income", Income);
