import mongoose, { Schema, model } from "mongoose";

export const TodoSchema = new Schema(
  {
    title: { type: String, require: true, trim: true },
    body: { type: String, require: true, trim: true },
    authorId: { type: String, require: true },
    isDone: { type: Boolean, default: false },
    _id: {
      type: mongoose.Types.ObjectId,
      alias: "id",
      required: true,
      auto: true,
    },
  },
  {
    timestamps: true,
    validateBeforeSave: true,
  }
);
const Todo = model("todo", TodoSchema);
export default Todo;
