import mongoose from 'mongoose';

const interviewSessionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required'],
      index: true,
    },
    startTime: {
      type: Date,
      required: [true, 'Start time is required'],
      default: Date.now,
    },
    endTime: {
      type: Date,
      validate: {
        validator: function (value) {
          return !value || value >= this.startTime;
        },
        message: 'End time must be after start time',
      },
    },
    avgScore: {
      type: Number,
      min: [0, 'Average score cannot be negative'],
      max: [100, 'Average score cannot exceed 100'],
      default: 0,
    },
    topicsCovered: {
      type: [String],
      default: [],
      validate: {
        validator: (v) => v.length <= 100,
        message: 'Cannot have more than 100 topics',
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Compound index for user sessions sorted by start time
interviewSessionSchema.index({ userId: 1, startTime: -1 });

// Virtual field for session duration in minutes
interviewSessionSchema.virtual('durationMinutes').get(function () {
  if (this.endTime) {
    return Math.round((this.endTime - this.startTime) / (1000 * 60));
  }
  return null;
});

// Include virtuals in JSON responses
interviewSessionSchema.set('toJSON', { virtuals: true });
interviewSessionSchema.set('toObject', { virtuals: true });

// Trim topics before saving
interviewSessionSchema.pre('save', function (next) {
  if (this.isModified('topicsCovered')) {
    this.topicsCovered = this.topicsCovered
      .map((topic) => topic.trim())
      .filter((topic) => topic.length > 0);
  }
  next();
});

const InterviewSession = mongoose.model('InterviewSession', interviewSessionSchema);

export default InterviewSession;
