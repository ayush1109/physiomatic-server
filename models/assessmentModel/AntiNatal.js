const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const antiNatalSchema = new Schema({
  dateofassessment: {
    type: Date,
    required: false,
  },
  patientID: {
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
  marrital: {
    type: String,
    required: false,
  },
  occupation: {
    type: String,
    required: false,
  },
  height: {
    type: Number,
    required: false,
  },
  weight: {
    type: Number,
    required: false,
  },
  bmi: {
    type: Number,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  nausea: {
    type: String,
    required: false,
  },
  headache: {
    type: String,
    required: false,
  },
  discomfort: {
    type: String,
    required: false,
  },
  periodofamenorrhoea: {
    type: String,
    required: false,
  },
  swelling: {
    type: String,
    required: false,
  },
  musculoskeletal: {
    type: String,
    required: false,
  },
  cramps: {
    type: String,
  },
  frequencyofmicturition: {
    type: String,
    required: false,
  },
  lossofappetite: {
    type: String,
    required: false,
  },
  constipation: {
    type: String,
    required: false,
  },
  lossofweight: {
    type: String,
    required: false,
  },
  incontinence: {
    type: String,
    required: false,
  },
  polyuria: {
    type: String,
    required: false,
  },
  prolapse: {
    type: String,
    required: false,
  },
  burningmicturition: {
    type: String,
    required: false,
  },
  cardiacproblem: {
    type: String,
    required: false,
  },
  historyoftb: {
    type: String,
    required: false,
  },
  seizures: {
    type: String,
    required: false,
  },
  anaemia: {
    type: String,
    required: false,
  },
  bludpressure: {
    type: String,
    required: false,
  },
  rhcompatibility: {
    type: String,
    required: false,
  },
  historyofmusculoskeletal: {
    type: String,
    required: false,
  },
  surgicalhistory: {
    type: String,
    required: false,
  },
  drughistory: {
    type: String,
    required: false,
  },
  depression: {
    type: String,
    required: false,
  },
  familyhistory: {
    type: String,
    required: false,
  },
  smokingalcohol: {
    type: String,
    required: false,
  },
  anxiety: {
    type: String,
    required: false,
  },
  twins: {
    type: String,
    required: false,
  },
  sleepinghabit: {
    type: String,
    required: false,
  },
  emotionaldisturbance: {
    type: String,
    required: false,
  },
  bodychart: {
    Type: String,
    required: false,
  },

  noofdeliveries: {
    type: Number,
    required: false,
  },
  modeofdeliveries: {
    type: String,
    required: false,
  },
  complication: {
    type: String,
    required: false,
  },
  firstststagelabour: {
    type: String,
    required: false,
  },
  secondstagelabour: {
    type: String,
    required: false,
  },
  babysex: {
    type: String,
    required: false,
  },
  babyweight: {
    type: String,
    required: false,
  },

  noofdeliveries1: {
    type: Number,
    required: false,
  },
  modeofdeliveries1: {
    type: String,
    required: false,
  },
  complication1: {
    type: String,
    required: false,
  },
  firstststagelabour1: {
    type: String,
    required: false,
  },
  secondstagelabour1: {
    type: String,
    required: false,
  },
  babysex1: {
    type: String,
    required: false,
  },
  babyweight1: {
    type: String,
    required: false,
  },

  noofdeliveries2: {
    type: Number,
    required: false,
  },
  modeofdeliveries2: {
    type: String,
    required: false,
  },
  complication2: {
    type: String,
    required: false,
  },
  firstststagelabour2: {
    type: String,
    required: false,
  },
  secondstagelabour2: {
    type: String,
    required: false,
  },
  babysex2: {
    type: String,
    required: false,
  },
  babyweight2: {
    type: String,
    required: false,
  },

  noofdeliveries3: {
    type: Number,
    required: false,
  },
  modeofdeliveries3: {
    type: String,
    required: false,
  },
  complication3: {
    type: String,
    required: false,
  },
  firstststagelabour3: {
    type: String,
    required: false,
  },
  secondstagelabour3: {
    type: String,
    required: false,
  },
  babysex3: {
    type: String,
    required: false,
  },
  babyweight3: {
    type: String,
    required: false,
  },

  noofdeliveries4: {
    type: Number,
    required: false,
  },
  modeofdeliveries4: {
    type: String,
    required: false,
  },
  complication4: {
    type: String,
    required: false,
  },
  firstststagelabour4: {
    type: String,
    required: false,
  },
  secondstagelabour4: {
    type: String,
    required: false,
  },
  babysex4: {
    type: String,
    required: false,
  },
  babyweight4: {
    type: String,
    required: false,
  },

  noofdeliveries5: {
    type: Number,
    required: false,
  },
  modeofdeliveries5: {
    type: String,
    required: false,
  },
  complication5: {
    type: String,
    required: false,
  },
  firstststagelabour5: {
    type: String,
    required: false,
  },
  secondstagelabour5: {
    type: String,
    required: false,
  },
  babysex5: {
    type: String,
    required: false,
  },
  babyweight5: {
    type: String,
    required: false,
  },

  noofdeliveries6: {
    type: Number,
    required: false,
  },
  modeofdeliveries6: {
    type: String,
    required: false,
  },
  complication6: {
    type: String,
    required: false,
  },
  firstststagelabour6: {
    type: String,
    required: false,
  },
  secondstagelabour6: {
    type: String,
    required: false,
  },
  babysex6: {
    type: String,
    required: false,
  },
  babyweight6: {
    type: String,
    required: false,
  },

  noofdeliveries7: {
    type: Number,
    required: false,
  },
  modeofdeliveries7: {
    type: String,
    required: false,
  },
  complication7: {
    type: String,
    required: false,
  },
  firstststagelabour7: {
    type: String,
    required: false,
  },
  secondstagelabour7: {
    type: String,
    required: false,
  },
  babysex7: {
    type: String,
    required: false,
  },
  babyweight7: {
    type: String,
    required: false,
  },
  menstrualhistory: {
    type: String,
    required: false,
  },
  painonset: {
    type: String,
    required: false,
  },
  siteofpain: {
    type: String,
    required: false,
  },
  duration: {
    type: String,
    required: false,
  },
  aggravatingfactors: {
    type: String,
    required: false,
  },
  paintype: {
    type: String,
    required: false,
  },
  relievingfactor: {
    type: String,
    required: false,
  },
  nightpain: {
    type: String,
    required: false,
  },
  irritabilitylevel: {
    type: String,
    required: false,
  },
  edema: {
    type: String,
    required: false,
  },
  linearnigra: {
    type: String,
    required: false,
  },
  conjuctiontongue: {
    type: String,
    required: false,
  },
  trophicchange: {
    type: String,
    required: false,
  },
  straiegravidarum: {
    type: String,
    required: false,
  },
  posture: {
    type: String,
    required: false,
  },
  chloasma: {
    type: String,
    required: false,
  },
  nailbed: {
    type: String,
    required: false,
  },
  gait: {
    type: String,
    required: false,
  },
  tenderness: {
    type: String,
    required: false,
  },
  tenderness: {
    type: String,
    required: false,
  },
  temperatures: {
    type: Number,
    required: false,
  },
  respiratoryrates: {
    type: Number,
    required: false,
  },
  bp: {
    type: Number,
    required: false,
  },
  pulse: {
    type: Number,
    required: false,
  },
  abdominalgirth: {
    type: String,
    required: false,
  },
  girth: {
    type: String,
    required: false,
  },
  volumetrics: {
    type: String,
    required: false,
  },
  pittting: {
    type: String,
    required: false,
  },
  rangeofmotion: {
    type: String,
    required: false,
  },
  musclestrengths: {
    type: String,
    required: false,
  },
  deeptendonreflex: {
    type: String,
    required: false,
  },
  diastasisrecti: {
    type: String,
    required: false,
  },
  sizes: {
    type: Number,
    required: false,
  },
  nipple: {
    type: String,
    required: false,
  },
  areola: {
    type: String,
    required: false,
  },
  varicose: {
    type: String,
    required: false,
  },
  dvt: {
    type: String,
    required: false,
  },
  incontineneceassessment: {
    type: String,
    required: false,
  },
  walktest: {
    type: String,
    required: false,
  },
  steptest: {
    type: String,
    required: false,
  },
  specialtest: {
    type: String,
    required: false,
  },
  functionalassessment: {
    type: String,
    required: false,
  },
  fundalheight: {
    type: String,
    required: false,
  },
  liepresentation: {
    type: String,
    required: false,
  },
  diagnosis: {
    type: String,
    required: false,
  },
  treatmentgols: {
    type: String,
    required: false,
  },
  treatmentplans: {
    type: String,
    required: false,
  },
});
module.exports = new mongoose.model("AntiNatal", antiNatalSchema);
