import { Router } from "express";
import UserController from "../controllers/user";
import { createTodo, getTodos, updateTodo, deleteTodo, deleteAllTodos } from "../controllers/todoController";

export const API = Router();
// Generating session id for the users
API.get("/id", UserController.GenerateUserId);

API.post('/todo', createTodo);
API.post('/todo/all', getTodos);

API.put('/todo/:id', updateTodo);

API.delete('/todo/:id', deleteTodo);
API.delete('/delete-all-todos', deleteAllTodos);
