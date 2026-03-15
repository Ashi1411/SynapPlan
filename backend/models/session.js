const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },

    subjectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subject",
        required: true
    },

    date: {
        type: Date,
        required: true,
    },

    topics: [String],

    duration: {
        type: Number,
        required: true
    },

    durationCompleted: {
        type: Number,
        default: 0
    },

    breakDuration: {
        type: Number,
        default: 0
    },

    breakCount: {
        type: Number,
        default: 0
    },

    completed: {
        type: Boolean,
        default: false
    },

    startTime: Date,
    endTime: Date,

    status: {
        type: String,
        enum: ["pending", "active", "completed", "missed"],
        default: "pending"
    }
    
}, {timestamps: true});

const Session = mongoose.model("session", sessionSchema);

module.exports = Session;