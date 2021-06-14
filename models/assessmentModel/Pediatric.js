const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pediatricEvaluationSchema = new Schema({ 
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
    dob: {
        type: Date,
        required: false
    },
    birthWeight: {
        type: String,
        required: false
    },
    headCircumference: {
        type: Date,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    chiefComplaints: {
        type: String,
        required: false
    },
    prenatal: {
        type: String,
        required: false
    },
    natal: {
        type: String,
        required: false
    },
    postnatal: {
        type: String,
        required: false
    },
    familyHistory: {
        type: String,
        required: false
    },

    supine: {
        type: String,
        required: false
    },
    prone: {
        type: String,
        required: false
    },
    sitting: {
        type: String,
        required: false
    },

    socialSmile: {
        type: String,
        required: false
    },
    followWithEyes: {
        type: String,
        required: false
    },
    headHolding: {
        type: String,
        required: false
    },
    rollOver: {
        type: String,
        required: false
    },
    sittingWithSupport: {
        type: String,
        required: false
    },
    sittingWithoutSupport: {
        type: String,
        required: false
    },
    crawling: {
        type: String,
        required: false
    },
    standing: {
        type: String,
        required: false
    },
    walkingWithSupport: {
        type: String,
        required: false
    },
    walkingWithoutSupport: {
        type: Number,
        required: false
    },
    sucking: {
        type: String,
        required: false
    },
    rooting: {
        type: String,
        required: false
    },
    swallowing: {
        type: String,
        required: false
    },
    upperLimbPlacing: {
        type: String,
        required: false
    },



    //start
    primitveReflexes: {
        sucking: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        },
        rooting: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        },
        grasp: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        },
        footGrasp: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        },
        placing: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        },
        startle: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        },
        handOpening: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        },
    },



    //end




    //start
    spinalReflexes: {
        flexorWithdrawal: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        },
        extensorWithdrawal: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        },
        crossedExtension: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        }
    },



    //end



    //start
    tiltReactions: {
        supineAndProne: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        },
        fourPointKneeling: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        },
        sitting: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        },
        kneelStanding: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        },
        standing: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        },
        staggeringReaction: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        },
        savingFromFall: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        },
    },



    //end


    
    higherCorticalFunction: {
        type: String,
        required: false
    },
    intergrationWithSurroundings: {
        type: String,
        required: false
    },
    speech: {
        type: String,
        required: false
    },
    vision: {
        type: String,
        required: false
    },
    hearing: {
        type: String,
        required: false
    },
    orientation: {
        type: String,
        required: false
    },
    cognitiveFunction: {
        type: String,
        required: false
    },
    overallActivity: {
        type: String,
        required: false
    },
    handedness: {
        type: String,
        required: false
    },
    carnialNerveExamination: {
        type: String,
        required: false
    },


    height: {
        type: String,
        required: false
    },
    weight: {
        type: String,
        required: false
    },
    chestCircumference: {
        type: String,
        required: false
    },
    headCircumference: {
        type: String,
        required: false
    },


    //start
    brainStemReflexes: {
        atnr: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        },
        stnr: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        },
        tonicProne: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        },
        tonicSupine: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        },
        positiveSupporting: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        },
        negativeSupposting: {
            present: {
                type: String,
        required: false
            },
            integrated: {
                type: String,
                required: false
            }
        }
    },



    //end





    //start
    corticalReactions: {
        neekRighting: {
            achieved: {
                type: String,
        required: false
            },
            notAchieved: {
                type: String,
                required: false
            }
        },
        associatedReactions: {
            achieved: {
                type: String,
        required: false
            },
            notAchieved: {
                type: String,
                required: false
            }
        },
        rising: {
            achieved: {
                type: String,
        required: false
            },
            notAchieved: {
                type: String,
                required: false
            }
        },
        bodyRighting: {
            achieved: {
                type: String,
        required: false
            },
            notAchieved: {
                type: String,
                required: false
            }
        },
        amphibian: {
            achieved: {
                type: String,
        required: false
            },
            notAchieved: {
                type: String,
                required: false
            }
        },
        rotation: {
            achieved: {
                type: String,
        required: false
            },
            notAchieved: {
                type: String,
                required: false
            }
        }
    },



    //end




    //start
    midbrainReflexes: {
        optical: {
            achieved: {
                type: String,
                required: false    
            },
            notAchieved: {
                type: String,
                required: false
            }
        },
        labrynthine: {
            achieved: {
                type: String,
                required: false    
            },
            notAchieved: {
                type: String,
                required: false
            }
        }
    },



    //end



    //start

    limbLengthDiscrepancy: {
        trueLength: {
            right: {
                type: String,
                required: false
            },
            left: {
                type: String,
                required: false
            }
        },
        apparantLength: {
            right: {
                type: String,
                required: false
            },
            left: {
                type: String,
                required: false
            }
        }
    },



    //end




    //start
    muscleGirth: {
        midThigh: {
            right: {
                type: String,
                required: false
            },
            left: {
                type: String,
                required: false
            }
        },
        midCalf: {
            right: {
                type: String,
                required: false
            },
            left: {
                type: String,
                required: false
            }
        },
        midArm: {
            right: {
                type: String,
                required: false
            },
            left: {
                type: String,
                required: false
            }
        },
        midForeArm: {
            right: {
                type: String,
                required: false
            },
            left: {
                type: String,
                required: false
            }
        }
    },



    //end




    biceps: {
        type: String,
        required: false
    },

    triceps: {
        type: String,
        required: false
    },

    knee: {
        type: String,
        required: false
    },
    
    ankle: {
        type: String,
        required: false
    },


    breathingPattern: {
        type: String,
        required: false
    },
    
    endurance: {
        type: String,
        required: false
    },


    deep: {
        type: String,
        required: false
    },
    
    superficial: {
        type: String,
        required: false
    },

    combinedCorticalSensation: {
        type: String,
        required: false
    },
    activeROM: {
        type: String,
        required: false
    },
    passiveROM: {
        type: String,
        required: false
    },

    musclePower: {
        type: String,
        required: false
    },
    muscleTone: {
        type: String,
        required: false
    },
    deformity: {
        type: String,
        required: false
    },
    contracture: {
        type: String,
        required: false
    },

    posture: {
        type: String,
        required: false
    },
    coordination: {
        type: String,
        required: false
    },
    gait: {
        type: String,
        required: false
    },
    balance: {
        type: String,
        required: false
    },
    static: {
        type: String,
        required: false
    },
    dynamic: {
        type: String,
        required: false
    },
    standingBalance: {
        type: String,
        required: false
    },
    bladderControl: {
        type: String,
        required: false
    },
    bladderManagement: {
        type: String,
        required: false
    },

    bowelManagement: {
        type: String,
        required: false
    },
    eating: {
        type: String,
        required: false
    },
    bathing: {
        type: String,
        required: false
    },

    grooming: {
        type: String,
        required: false
    },
    toileting: {
        type: String,
        required: false
    },
    dressingUpperBody: {
        type: String,
        required: false
    },

    dressingLowerBody: {
        type: String,
        required: false
    },
    expression: {
        type: String,
        required: false
    },
    comprehension: {
        type: String,
        required: false
    },


    transfersChair: {
        type: String,
        required: false
    },
    transfersToilet: {
        type: String,
        required: false
    },
    transfersTab: {
        type: String,
        required: false
    },

    crawls: {
        type: String,
        required: false
    },
    stairs: {
        type: String,
        required: false
    },
    socialInteraction: {
        type: String,
        required: false
    },


    problemSolving: {
        type: String,
        required: false
    },
    memory: {
        type: String,
        required: false
    },

    investigation: {
        type: String,
        required: false
    },

    diagnosis: {
        type: String,
        required: false
    },

    clinicalImpression: {
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

module.exports = new mongoose.model("PediatricEvaluation", pediatricEvaluationSchema);
