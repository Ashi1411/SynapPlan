const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  completed: {
    type: Boolean,
    default: false,
  },
});

const subjectSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    subjectName: {
      type: String,
      required: true,
    },

    examDate: {
      type: Date,
      required: true,
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    intensity: {
      type: String,
      enum: ["High", "Medium", "Low"],
      default: "Medium",
    },

    topics: [topicSchema],

    dailyStudyHours: {
      type: Number, // stored in hours
      default: 2,
    },
  },
  { timestamps: true },
);

const Subject = mongoose.model("subject", subjectSchema);

module.exports = Subject;
