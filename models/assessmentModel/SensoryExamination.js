const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sensoryExaminationSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    c2: {
        occipitalProtuberance: {
            type: String,
            required: true
        },
        neckMuscles: {
            type: String,
            required: true
        }
    },
    c3: {
        supraclavicularFossa: {
            type: String,
            required: true
        },
        neckLateralFlexionlarJoint: {
            type: String,
            required: true
        }
    },
    c4: {
        acromioclavicularJoint: {
            type: String,
            required: true
        },
        shoulderElevation: {
            type: String,
            required: true
        }
    },
    c5: {
        antecubitalFossa: {
            type: String,
            required: true
        },
        shoulderAbduction: {
            type: String,
            required: true
        },
        bb: {
            type: String,
            required: true
        }
    },
    c6: {
        thumb: {
            type: String,
            required: true
        },
        bsw: {
            type: String,
            required: true
        },
        bb: {
            type: String,
            required: true
        }
    },
    c7: {
        middleFinger: {
            type: String,
            required: true
        },
        wt: {
            type: String,
            required: true
        },
        triceps: {
            type: String,
            required: true
        }
    },
    c8: {
        littleFinger: {
            type: String,
            required: true
        },
        tu: {
            type: String,
            required: true
        },
        triceps: {
            type: String,
            required: true
        }
    },
    t1: {
        medialSideAntecubitalFossa: {
            type: String,
            required: true
        }
    },
    t2: {
        apexOfAxilla: {
            type: String,
            required: true
        }
    },
    t4: {
        nipples: {
            type: String,
            required: true
        }
    },
    t6: {
        xiphisternum: {
            type: String,
            required: true
        }
    },
    t10: {
        umbilicus: {
            type: String,
            required: true
        }
    },
    t12: {
        midpointOfTheInguinalLigament: {
            type: String,
            required: true
        }
    },
    l2: {
        midAnteriorThigh: {
            type: String,
            required: true
        },
        hipFlexion: {
            type: String,
            required: true
        },
        patellar: {
            type: String,
            required: true
        }
    },
    //         ^^^^
    //till here||||
    l3: {
        medialEpicondyleOfTheFemur: {
            type: String,
            required: true
        },
        kneeExtension: {
            type: String,
            required: true
        },
        painWithSLR: {
            type: String,
            required: true
        }
    },
    l4: {
        medialMalleolus: {
            type: String,
            required: true
        },
        ankleDorsiFlexion: {
            type: String,
            required: true
        }
    },
    l5: {
        dorsumOfFoot: {
            type: String,
            required: true
        },
        EPGDHC: {
            type: String,
            required: true
        }
    },
    s1: {
        lateralHeel: {
            type: String,
            required: true
        },
        anklePlantarFlexion: {
            type: String,
            required: true
        },
        LA: {
            type: String,
            required: true
        }
    },
    s1: {
        lateralHeel: {
            type: String,
            required: true
        },
        anklePlantarFlexion: {
            type: String,
            required: true
        },
        LA: {
            type: String,
            required: true
        }
    },
    s2: {
        poplitealFossa: {
            type: String,
            required: true
        },
        kneeFlexion: {
            type: String,
            required: true
        },
        LA: {
            type: String,
            required: true
        }
    },
    s5: {
        perianal: {
            type: String,
            required: true
        },
        BR: {
            type: String,
            required: true
        }
    },

});

module.exports = new mongoose.model("SensoryExamination", sensoryExaminationSchema);
