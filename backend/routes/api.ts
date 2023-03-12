import { Router } from "express";
import UserController from "../controllers/user";
import TodoController from "../controllers/todoController";
import { createTodoValidation } from "../validation/createTodo";

export const API = Router();
// Generating session id for the users
API.get("/id", UserController.GenerateUserId);

API.post("/todo", createTodoValidation, TodoController.createTodo);
API.post("/todo/all", TodoController.getAllTodos);

API.put("/todo/:id", TodoController.updateTodo);

API.delete("/todo/:id", TodoController.deleteTodo);
API.delete("/delete-all-todos", TodoController.deleteAllTodos);
