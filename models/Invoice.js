const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
  date: [
    {
      type: Date,
      required: true,
    },
  ],

  treatment: {
    type: String,
    required: true,
  },
  consulant: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: "patient",
  },
});

module.exports = new mongoose.model("invoice", invoiceSchema);
