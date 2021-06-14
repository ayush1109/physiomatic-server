const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kneeEvaluationSchema = new Schema({
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
    skinChanges: {
        type: String,
        required: false
    },
    stiffness: {
        type: String,
        required: false
    },
    crepitus: {
        type: String,
        required: false
    },
    locking: {
        type: String,
        required: false
    },
    givingAway: {
        type: String,
        required: false
    },
    tenderness: {
        type: String,
        required: false
    },
    muscleAtrophy: {
        type: String,
        required: false
    },
    muscleTightness: {
        type: String,
        required: false
    },
    patellarTracking: {
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
    aggravatingFactors: {
        type: String,
        required: false
    },
    relievingFactors: {
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
    hip: {
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

    ankle: {
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



    anteriosDrawerTest: {
        left: {
            type: String,
            required: false
        },
        right: {
            type: String,
            required: false
        }
    },


    posteriorDrawerTest: {
        left: {
            type: String,
            required: false
        },
        right: {
            type: String,
            required: false
        }
    },


    mcMurraysTest: {
        left: {
            type: String,
            required: false
        },
        right: {
            type: String,
            required: false
        }
    },

    varusStressTest: {
        left: {
            type: String,
            required: false
        },
        right: {
            type: String,
            required: false
        }
    },

    valgusStressTest: {
        left: {
            type: String,
            required: false
        },
        right: {
            type: String,
            required: false
        }
    },

    lachmanTest: {
        left: {
            type: String,
            required: false
        },
        right: {
            type: String,
            required: false
        }
    },

    pivotShift: {
        left: {
            type: String,
            required: false
        },
        right: {
            type: String,
            required: false
        }
    },

    poplitealTest: {
        left: {
            type: String,
            required: false
        },
        right: {
            type: String,
            required: false
        }
    },

    patellarGlide: {
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

module.exports = new mongoose.model("KneeEvaluation", kneeEvaluationSchema);
