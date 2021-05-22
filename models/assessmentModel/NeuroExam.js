const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const neuroExamSchema = new Schema({
  eye1: {
    type: Number,
    // required: true,
  },
  eye2: {
    type: Number,
    // required: true,
  },
  eye3: {
    type: Number,
    // required: true,
  },

  ulnarl: {
    type: String,
    // required: true,
  },
  ulnarR: {
    type: String,
    // required: true,
  },

  Radial: {
    left: {
      type: String,
      // required: true,
    },
    right: {
      type: String,
      // required: true,
    },
  },
  Median: {
    left: {
      type: String,
      // required: true,
    },
    right: {
      type: String,
      // required: true,
    },
  },
  Musculocutaneous: {
    left: {
      type: String,
      // required: true,
    },
    right: {
      type: String,
      // required: true,
    },
  },
  Sciatic: {
    left: {
      type: String,
      // required: true,
    },
    right: {
      type: String,
      // required: true,
    },
  },
  Tibial: {
    left: {
      type: String,
      // required: true,
    },
    right: {
      type: String,
      // required: true,
    },
  },
  CommonPeronial: {
    left: {
      type: String,
      // required: true,
    },
    right: {
      type: String,
      // required: true,
    },
  },
  Femoral: {
    left: {
      type: String,
      // required: true,
    },
    right: {
      type: String,
      // required: true,
    },
  },
  Lateralcutaneous: {
    left: {
      type: String,
      // required: true,
    },
    right: {
      type: String,
      // required: true,
    },
  },
  Obturator: {
    left: {
      type: String,
      // required: true,
    },
    right: {
      type: String,
      // required: true,
    },
  },
  Sural: {
    left: {
      type: String,
      // required: true,
    },
    right: {
      type: String,
      // required: true,
    },
  },
  SpecialTests: {
    type: String,
    // required: true,
  },
  Description: {
    type: String,
    // required: true,
  },
  SpecialTests1: {
    type: String,
    // required: true,
  },
  Description1: {
    type: String,
    // required: true,
  },

  Ulnar1: {
    left: {
      type: String,
      // required: true,
    },
    right: {
      type: String,
      // required: true,
    },
  },
  Radial1: {
    left: {
      type: String,
      // required: true,
    },
    right: {
      type: String,
      // required: true,
    },
  },
  Median1: {
    left: {
      type: String,
      // required: true,
    },
    right: {
      type: String,
      // required: true,
    },
  },

  Sciatic1: {
    left: {
      type: String,
      // required: true,
    },
    right: {
      type: String,
      // required: true,
    },
  },
  Tibial1: {
    left: {
      type: String,
      // required: true,
    },
    right: {
      type: String,
      // required: true,
    },
  },
  CommonPeronial1: {
    left: {
      type: String,
      // required: true,
    },
    right: {
      type: String,
      // required: true,
    },
  },
  Peronial: {
    left: {
      type: String,
      // required: true,
    },
    right: {
      type: String,
      // required: true,
    },
  },
  Femoral1: {
    left: {
      type: String,
      // required: true,
    },
    right: {
      type: String,
      // required: true,
    },
  },
  Lateralcutaneous1: {
    left: {
      type: String,
      // required: true,
    },
    right: {
      type: String,
      // required: true,
    },
  },
  Nose: {
    time: {
      type: Number,
      // required: true,
    },
    speed: {
      type: Number,
      // required: true,
    },
    error: {
      type: Number,
      // required: true,
    },
  },
  Pronationmovement: {
    time1: {
      type: Number,
      // required: true,
    },
    speed1: {
      type: Number,
      // required: true,
    },
    error1: {
      type: Number,
      // required: true,
    },
  },
  Heel: {
    time2: {
      type: Number,
      // required: true,
    },
    speed2: {
      type: Number,
      // required: true,
    },
    error2: {
      type: Number,
      // required: true,
    },
  },
  Gait: {
    type: Number,
    // required: true,
  },
  Change: {
    type: Number,
    // required: true,
  },
  Gait1: {
    type: Number,
    // required: true,
  },
  horizontal: {
    type: Number,
    // required: true,
  },
  vertical: {
    type: Number,
    // required: true,
  },
  pivot: {
    type: Number,
    // required: true,
  },
  over: {
    type: Number,
    // required: true,
  },
  around: {
    type: Number,
    // required: true,
  },
  steps: {
    type: Number,
    // required: true,
  },
  balance: {
    type: String,
    // required: true,
  },
  Bowels: {
    type: Number,
    // required:true,
  },
  bladder: {
    type: Number,
    // required:true,
  },
  grooming: {
    type: Number,
    // required:true,
  },
  toilet: {
    type: Number,
    // required:true,
  },
  feeding: {
    type: Number,
    // required:true,
  },
  bathing: {
    type: Number,
    // required:true,
  },
  transfer: {
    type: Number,
    // required:true,
  },
  mobility: {
    type: Number,
    // required:true,
  },
  dressing: {
    type: Number,
    // required:true,
  },
  stairs: {
    type: Number,
    // required:true,
  },
});

module.exports = new mongoose.model("NeuroExam", neuroExamSchema);