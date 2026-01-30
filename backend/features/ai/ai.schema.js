import mongoose from "mongoose";

const aiCacheSchema = new mongoose.Schema(
  {
    cacheKey: {
      type: String,
      required: [true, "Cache key is required"],
      unique: true,
      index: true,
    },
    promptType: {
      type: String,
      required: [true, "Prompt type is required"],
      enum: ["question", "feedback", "hint", "evaluation", "other"],
      index: true,
    },
    role: {
      type: String,
      trim: true,
      maxlength: [100, "Role cannot exceed 100 characters"],
    },
    topic: {
      type: String,
      trim: true,
      maxlength: [100, "Topic cannot exceed 100 characters"],
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard", ""],
      default: "",
    },
    experience: {
      type: Number,
      min: [0, "Experience cannot be negative"],
      max: [50, "Experience cannot exceed 50 years"],
    },
    model: {
      type: String,
      required: [true, "Model is required"],
      default: "gemini-2.5-flash-lite",
    },
    responseText: {
      type: String,
      required: [true, "Response text is required"],
    },
    expiresAt: {
      type: Date,
      required: [true, "Expiration time is required"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// TTL index - MongoDB will automatically delete documents when expiresAt is reached
aiCacheSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// Compound index for common query patterns
aiCacheSchema.index({ promptType: 1, role: 1, topic: 1 });

const AiCache = mongoose.model("AiCache", aiCacheSchema);

export default AiCache;
