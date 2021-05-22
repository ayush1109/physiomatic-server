const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardioExamSchema = new Schema({
  date: {
    type: Date,
    required: false,
  },
  patientid: {
    type: Number,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  occupation: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  admissiondate: {
    type: Date,
    required: false,
  },
  dateofsurgery: {
    type: Date,
    required: false,
  },
  ward: {
    type: Number,
    required: false,
  },
  chief: {
    type: String,
    required: false,
  },
  presentmedicalhistory: {
    type: String,
    required: false,
  },
  pastmedicalhistory: {
    type: String,
    required: false,
  },
  personalhistory: {
    type: String,
    required: false,
  },
  bodychart: {
    type: String,
    required: false,
  },

  
  heartrate: {
    type: Number,
    required: false,
  },
  spo: {
    type: Number,
    required: false,
  },
  clubbing: {
    type: String,
    required: false,
  },
  cynosis: {
    type: String,
    required: false,
  },
  bodybuilt: {
    type: String,
    required: false,
  },
  bloodpre: {
    type: Number,
    required: false,
  },
  conscounus: {
    type: String,
    required: false,
  },
  coloroflimb: {
    type: String,
    required: false,
  },
  speech: {
    type: String,
    required: false,
  },
  facial: {
    type: String,
    required: false,
  },
  respiratoryrate: {
    type: Number,
    required: false,
  },
  bodytemperature: {
    type: String,
    required: false,
  },
  edema: {
    type: String,
    required: false,
  },
  dyspnoea: {
    type: String,
    required: false,
  },
  external: {
    type: String,
    required: false,
  },


  nasal: {
    type: String,
    required: false,
  },
  cavity: {
    type: String,
    required: false,
  },
  chestde: {
    type: String,
    required: false,
  },
  accessorymus: {
    type: String,
    required: false,
  },
  spacing: {
    type: String,
    required: false,
  },
  breathing: {
    type: String,
    required: false,
  },
  shoulder: {
    type: String,
    required: false,
  },
  trachea: {
    type: String,
    required: false,
  },
  moving: {
    type: String,
    required: false,
  },
  assessment: {
    type: String,
    required: false,
  },
  upperlobe: {
    type: String,
    required: false,
  },
  middlelobe: {
    type: String,
    required: false,
  },
  lowerlobe: {
    type: String,
    required: false,
  },
  aopte: {
    type: String,
    required: false,
  },
  trachialposition: {
    type: String,
    required: false,
  },
  heartposition: {
    type: String,
    required: false,
  },

  mediastinalposition: {
    type: String,
    required: false,
  },
  tenderness: {
    type: String,
    required: false,
  },
  diaphragmatic: {
    type: String,
    required: false,
  },
  fremitus: {
    type: String,
    required: false,
  },
  xiphoid: {
    type: String,
    required: false,
  },
  accessorymuscles: {
    type: String,
    required: false,
  },
  onpercusion: {
    type: String,
    required: false,
  },
  breathsound: {
    type: String,
    required: false,
  },
  abnormalbreath: {
    type: String,
    required: false,
  },
  heartsound: {
    type: String,
    required: false,
  },
  integumentary: {
    type: String,
    required: false,
  },

  posturalassessment: {
    type: String,
    required: false,
  },
  assesscoordinate: {
    type: String,
    required: false,
  },
  sputum: {
    type: String,
    required: false,
  },
  bloodexam: {
    type: String,
    required: false,
  },
  chestxray: {
    type: String,
    required: false,
  },
  stresstest: {
    type: String,
    required: false,
  },
  agiogram: {
    type: String,
    required: false,
  },
  musulo: {
    type: String,
    required: false,
  },
  neurosystem: {
    type: String,
    required: false,
  },
  assessbalance: {
    type: String,
    required: false,
  },
  coughtype: {
    type: String,
    required: false,
  },
  abgreport: {
    type: String,
    required: false,
  },
  pft: {
    type: String,
    required: false,
  },
  echocardiogram: {
    type: String,
    required: false,
  },
  ultrasound: {
    type: String,
    required: false,
  },
  any: {
    Type: String,
    required: false,
  },
  incision: {
    type: String,
    required: false,
  },
  assess: {
    type: String,
    required: false,
  },
  aggravating: {
    type: String,
    required: false,
  },
  ecgreport: {
    type: String,
    required: false,
  },
  ctscan: {
    type: String,
    required: false,
  },
  mriscan: {
    type: String,
    required: false,
  },
  provisional: {
    type: String,
    required: false,
  },
  treatementgoal: {
    type: String,
    required: false,
  },
  treatementplan: {
    type: String,
    required: false,
  },
});

module.exports = new mongoose.model("CardioExam", cardioExamSchema);
