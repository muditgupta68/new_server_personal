const mongoose = require('mongoose');

// Define the schema
const resumeSchema = new mongoose.Schema({
  Subject: {
    type: String,
    required: true,
  },
  Completion: {
    type: String,
    required: true,
  },
  From: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  tag: {
    type: String,
    required: true,
    enum: ["Education", "Award", "Certification"],
  },
});

// Create and export the model
const AboutModel = mongoose.model('About', resumeSchema);
module.exports = AboutModel;
