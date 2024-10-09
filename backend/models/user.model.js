import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [3, "Name must contain at least 3 Charcater"],
      maxLength: [30, "Name cannot exceed 30 Charcater"],
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: [8, "Password must contain at least 8 characters."],
      maxLength: [32, "Password cannot exceed 32 characters."],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
