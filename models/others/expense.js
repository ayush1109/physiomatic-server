const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var d = new Date();
var month = d.getMonth() + 1;

const Expense = new Schema({
  date: {
    type: String,
    default: d.getDate() + '/' + month + '/' + d.getFullYear()
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

module.exports = new mongoose.model("Expense", Expense);
