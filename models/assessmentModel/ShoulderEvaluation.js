const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoulderEvaluationSchema = new Schema({
    assessmentDate: {
        type: Date,
        required: false
    },
    patientId: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    occupation: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    admissionDate: {
        type: Date,
        required: false
    },
    surgeryDate: {
        type: Date,
        required: false
    },
    ward: {
        type: String,
        required: false
    },
    chiefComplaints: {
        type: String,
        required: false
    },
    procedure: {
        type: String,
        required: false
    },
    painOnset: {
        type: String,
        required: false
    },
    injury: {
        type: String,
        required: false
    },
    adlLimitation: {
        type: String,
        required: false
    },


    //body chart to be discussed



    warmth: {
        type: String,
        required: false
    },
    swelling: {
        type: String,
        required: false
    },
    stiffness: {
        type: String,
        required: false
    },
    clickingSound: {
        type: String,
        required: false
    },
    alignment: {
        type: String,
        required: false
    },
    winging: {
        type: String,
        required: false
    },
    muscleAtophy: {
        type: String,
        required: false
    },
    muscleTightness: {
        type: String,
        required: false
    },
    contracture: {
        type: String,
        required: false
    },
    painIntensity: {
        type: Number,
        required: false
    },
    painDuration: {
        type: String,
        required: false
    },
    painSite: {
        type: String,
        required: false
    },
    painType: {
        type: String,
        required: false
    },
    painNature: {
        type: String,
        required: false
    },
    neckStiffness: {
        type: String,
        required: false
    },
    neckPain: {
        type: String,
        required: false
    },
    neckRadiation: {
        type: String,
        required: false
    },
    neckAggrevatingFactors: {
        type: String,
        required: false
    },
    neckRelievingFactor: {
        type: String,
        required: false
    },

    //till here


    flexion: {
        left: {
            mmt: {
                type: String,
                required: false
            },
            active: {
                type: String,
                required: false
            },
            passive: {
                type: String,
                required: false
            }

        },
        right: {
            mmt: {
                type: String,
                required: false
            },
            active: {
                type: String,
                required: false
            },
            passive: {
                type: String,
                required: false
            }

        }
    },


    extension: {
        left: {
            mmt: {
                type: String,
                required: false
            },
            active: {
                type: String,
                required: false
            },
            passive: {
                type: String,
                required: false
            }

        },
        right: {
            mmt: {
                type: String,
                required: false
            },
            active: {
                type: String,
                required: false
            },
            passive: {
                type: String,
                required: false
            }

        }
    },
    adduction: {
        left: {
            mmt: {
                type: String,
                required: false
            },
            active: {
                type: String,
                required: false
            },
            passive: {
                type: String,
                required: false
            }

        },
        right: {
            mmt: {
                type: String,
                required: false
            },
            active: {
                type: String,
                required: false
            },
            passive: {
                type: String,
                required: false
            }

        }
    },

    abduction: {
        left: {
            mmt: {
                type: String,
                required: false
            },
            active: {
                type: String,
                required: false
            },
            passive: {
                type: String,
                required: false
            },

        },
        right: {
            mmt: {
                type: String,
                required: false
            },
            active: {
                type: String,
                required: false
            },
            passive: {
                type: String,
                required: false
            }

        }
    },



    extRotation: {
        left: {
            mmt: {
                type: String,
                required: false
            },
            active: {
                type: String,
                required: false
            },
            passive: {
                type: String,
                required: false
            },

        },
        right: {
            mmt: {
                type: String,
                required: false
            },
            active: {
                type: String,
                required: false
            },
            passive: {
                type: String,
                required: false
            }

        }
    },


    intRotation: {
        left: {
            mmt: {
                type: String,
                required: false
            },
            active: {
                type: String,
                required: false
            },
            passive: {
                type: String,
                required: false
            },

        },
        right: {
            mmt: {
                type: String,
                required: false
            },
            active: {
                type: String,
                required: false
            },
            passive: {
                type: String,
                required: false
            }

        }
    },


    supraTest: {
        left: {
            type: String,
            required: false
        },
        right: {
            type: String,
            required: false
        }
    },


    infraTest: {
        left: {
            type: String,
            required: false
        },
        right: {
            type: String,
            required: false
        }
    },


    dropArmTest: {
        left: {
            type: String,
            required: false
        },
        right: {
            type: String,
            required: false
        }
    },

    subscapularisTest: {
        left: {
            type: String,
            required: false
        },
        right: {
            type: String,
            required: false
        }
    },

    hawkinsTest: {
        left: {
            type: String,
            required: false
        },
        right: {
            type: String,
            required: false
        }
    },

    painfulArc: {
        left: {
            type: String,
            required: false
        },
        right: {
            type: String,
            required: false
        }
    },

    sulcusSign: {
        left: {
            type: String,
            required: false
        },
        right: {
            type: String,
            required: false
        }
    },

    apprehensionTest: {
        left: {
            type: String,
            required: false
        },
        right: {
            type: String,
            required: false
        }
    },


    investigation: {
        type: String,
        required: false
    },

    diagnosis: {
        type: String,
        required: false
    },

    treatmentGoal: {
        type: String,
        required: false
    },
    
    treatmentPlan: {
        type: String,
        required: false
    }


});

module.exports = new mongoose.model("ShoulderEvaluation", shoulderEvaluationSchema);
