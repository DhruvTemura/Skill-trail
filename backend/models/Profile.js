const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  // Personal Info
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: String,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  cgpa: {
    type: String,
    required: true
  },
  currentStatus: {
    type: String,
    required: true
  },
  
  // Interests
  interests: [{
    type: String
  }],
  
  // Skills
  technicalSkills: [{
    type: String
  }],
  softSkills: [{
    type: String
  }],
  
  // Work Preferences
  workStyle: {
    type: String,
    required: true
  },
  workLocation: {
    type: String,
    required: true
  },
  teamSize: String,
  workEnvironment: String,
  
  // Career Goals
  careerGoals: [{
    type: String
  }],
  timeCommitment: {
    type: String,
    required: true
  },
  preferredIndustries: [{
    type: String
  }],
  
  // Metadata
  userId: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
ProfileSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Profile', ProfileSchema);