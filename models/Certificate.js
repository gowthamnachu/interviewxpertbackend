const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  certificateId: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  fullName: String,
  domain: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  grade: {
    type: String,
    enum: ['A+', 'A', 'B', 'C', 'D'],
    required: true
  },
  badgeLevel: {
    type: String,
    enum: ['Gold', 'Silver', 'Bronze'],
    required: true
  },
  issueDate: {
    type: Date,
    default: Date.now
  },
  expiryDate: {
    type: Date,
    required: true
  },
  verificationUrl: String
}, {
  timestamps: true
});

// Add indexes for better query performance
certificateSchema.index({ certificateId: 1 }, { unique: true });
certificateSchema.index({ userId: 1 });

module.exports = mongoose.model('Certificate', certificateSchema);