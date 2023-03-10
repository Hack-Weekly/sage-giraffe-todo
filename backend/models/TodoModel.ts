import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const TodoSchema = new Schema(
  {
    title: { type: String, require: true, trim: true },
    body: { type: String, require: true, trim: true },
    authorId: { type: String, require: true },
    isDone: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    validateBeforeSave: true,
  }
);
const Todo = model("todo", TodoSchema);
export default Todo;
