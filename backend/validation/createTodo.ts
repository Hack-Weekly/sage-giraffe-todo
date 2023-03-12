import { check } from "express-validator";
export const createTodoValidation = [
  check("title").notEmpty().isString().escape().trim(),
  check("body").optional().isString().escape().trim(),
  check("isDone").optional().isBoolean().default(false),
];
