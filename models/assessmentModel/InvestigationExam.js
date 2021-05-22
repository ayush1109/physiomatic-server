const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const investigationExamSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
    required: false,
  },
  select: {
    type: String,
  },
  document: {
    type: Buffer,
    required: false,
  },
  findings: {
    type: String,
    required: false,
  },
});

module.exports = new mongoose.model(
  "InvestigationExam",
  investigationExamSchema
);
