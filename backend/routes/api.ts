import { Router } from "express";
import UserController from "../controllers/user";
import TodoController from "../controllers/todoController";
import { createTodoValidation } from "../validation/createTodo";
import errorHandling from "../middleware/errorHandling";
import { isAuthorIdentified } from "../middleware/isUserIdentified";
export const API = Router();
// Generating session id for the users
API.get("/id", UserController.GenerateUserId);

API.get("/todo/all", isAuthorIdentified, TodoController.getAllTodos);
API.get("/todo/:id", isAuthorIdentified, TodoController.getTodoById);
API.post(
  "/todo",
  isAuthorIdentified,
  createTodoValidation,
  TodoController.createTodo
);

API.put("/todo/:id", isAuthorIdentified, TodoController.updateTodo);

API.delete("/todo/:id", isAuthorIdentified, TodoController.deleteTodo);
API.delete(
  "/delete-all-todos",
  isAuthorIdentified,
  TodoController.deleteAllTodos
);

API.use("*", errorHandling);
