import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
      unique: true,
    },
    role: {
      type: String,
      trim: true,
      maxlength: [100, "Role cannot exceed 100 characters"],
      default: "",
    },
    experience: {
      type: Number,
      min: [0, "Experience cannot be negative"],
      max: [50, "Experience cannot exceed 50 years"],
      default: 0,
    },
    skills: {
      type: [String],
      default: [],
      validate: {
        validator: (v) => v.length <= 50,
        message: "Cannot have more than 50 skills",
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// Index for faster user lookups - REMOVED DUPLICATE
// userId is already indexed via unique: true

// Trim and lowercase skills before saving
userProfileSchema.pre("save", function (next) {
  if (this.isModified("skills")) {
    this.skills = this.skills
      .map((skill) => skill.trim())
      .filter((skill) => skill.length > 0);
  }
  next();
});

const UserProfile = mongoose.model("UserProfile", userProfileSchema);

export default UserProfile;
