import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
      maxlength: [50, "Maximum title length is 50"],
    },
    description: {
      type: String,
      maxlength: [200, "Maximum description length is 200"],
      default: "Write you tasks",
    },
    category: {
      type: String,
      enum: ["to-do", "in-progress", "done"],
      required: true,
    },
    authorUID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const TaskModel = mongoose.model("Task", TaskSchema);

export default TaskModel;
