const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Pain = new Schema({
    date: {
        type: Date,
        required: true
    },
    site: {
        type: String,
        required: true
    },
    intensity: {
        type: Number,
        required: true
    },
    onset: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    nature: {
        type: String,
        required: true
    },
    triggerPoint: {
        type: String,
        required: true
    },
    aggravatingFactor: {
        type: String,
        required: true
    },
    relievingFactor: {
        type: String,
        required: true
    },
    ADLsRestricted: {
        type: String,
        required: true
    }

});

module.exports = new mongoose.model("Pain", Pain);
