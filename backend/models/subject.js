const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    completed: {
        type: Boolean,
        default: false
    }
});


const subjectSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    subjectName: {
        type: String,
        required: true,
    },

    examDate: {
        type: Date,
        required: true
    },

    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "medium"
    },

    topics: [topicSchema],

    dailyStudyHours: {
        type: Number,
        default: 2
    }
}, {timestamps: true});

const Subject = mongoose.model("subject", subjectSchema);

module.exports = Subject;