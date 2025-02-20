import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
      maxlength: [50, "Maximum lenth of the title is 50"],
    },
  },
  { timestamps: true }
);
