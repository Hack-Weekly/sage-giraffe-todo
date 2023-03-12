import { Router } from "express";
import UserController from "../controllers/user";
import TodoController from "../controllers/todoController";
import { createTodoValidation } from "../validation/createTodo";
import errorHandling from "../middlewares/errorHandling";

export const API = Router();
// Generating session id for the users
API.get("/id", UserController.GenerateUserId);

API.get("/todo/all", TodoController.getAllTodos);
API.get("/todo/:id", TodoController.getTodoById);
API.post("/todo", createTodoValidation, TodoController.createTodo);

API.put("/todo/:id", TodoController.updateTodo);

API.delete("/todo/:id", TodoController.deleteTodo);
API.delete("/delete-all-todos", TodoController.deleteAllTodos);

API.use("*", errorHandling);
