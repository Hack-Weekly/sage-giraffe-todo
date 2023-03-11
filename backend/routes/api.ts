import { Router } from "express";
import UserController from "../controllers/user";
import { createTodo, getTodos, updateTodo } from "../controllers/todoController";

export const API = Router();
// Generating session id for the users
API.get("/id", UserController.GenerateUserId);

API.post('/create-todo', createTodo);
API.post('/get-todos', getTodos);

API.put('/edit-todo/:id', updateTodo);
