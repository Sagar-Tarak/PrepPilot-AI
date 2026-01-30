import mongoose from 'mongoose';

const questionAttemptSchema = new mongoose.Schema(
  {
    sessionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'InterviewSession',
      required: [true, 'Session ID is required'],
      index: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required'],
      index: true,
    },
    topic: {
      type: String,
      required: [true, 'Topic is required'],
      trim: true,
      maxlength: [100, 'Topic cannot exceed 100 characters'],
      index: true,
    },
    difficulty: {
      type: String,
      required: [true, 'Difficulty is required'],
      enum: ['easy', 'medium', 'hard'],
      default: 'medium',
    },
    questionText: {
      type: String,
      required: [true, 'Question text is required'],
      trim: true,
    },
    userAnswer: {
      type: String,
      trim: true,
      default: '',
    },
    score: {
      type: Number,
      min: [0, 'Score cannot be negative'],
      max: [10, 'Score cannot exceed 10'],
      default: 0,
    },
    feedback: {
      type: String,
      trim: true,
      default: '',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Compound indexes for common queries
questionAttemptSchema.index({ userId: 1, createdAt: -1 });
questionAttemptSchema.index({ sessionId: 1, createdAt: -1 });
questionAttemptSchema.index({ topic: 1, difficulty: 1 });

// Virtual field for performance level
questionAttemptSchema.virtual('performanceLevel').get(function () {
  if (this.score >= 8) return 'excellent';
  if (this.score >= 6) return 'good';
  if (this.score >= 4) return 'fair';
  return 'needs improvement';
});

// Include virtuals in JSON responses
questionAttemptSchema.set('toJSON', { virtuals: true });
questionAttemptSchema.set('toObject', { virtuals: true });

const QuestionAttempt = mongoose.model('QuestionAttempt', questionAttemptSchema);

export default QuestionAttempt;
