import Todo from "../models/TodoModel";
import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { getResponse } from "../utils/normalizeResponse";

const createTodo = async (req: Request, res: Response, next: NextFunction) => {
  // Check that body is valid else return requirements of valid body
  const errors = validationResult(req);
  if (!errors.isEmpty()) return next(errors);
  try {
    const { title, body, authorId } = req.body;
    const todo = await Todo.create({ title, body, authorId });
    return res.json(
      getResponse({
        code: 200,
        message: "All todo's",
        success: true,
        data: todo,
      })
    );
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

const getAllTodos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allTodo = await Todo.find();
    res.json();
  } catch (error) {
    res.status(404).json({ error: (error as Error).message });
  }
};

const updateTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, body, authorId, isDone } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, body, authorId, isDone },
      { new: true }
    );
    if (!todo) throw new Error("Todo not found");
    res.json(todo);
  } catch (error) {
    res.status(404).json({ error: (error as Error).message });
  }
};

const deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) throw new Error("Todo not found");
    res.json(todo);
  } catch (error) {
    res.status(404).json({ error: (error as Error).message });
  }
};

const deleteAllTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await Todo.deleteMany({});
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

const getTodoById = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params["id"];
  console.log("-------Befor--------");
  const todo = await Todo.findById(id);
  console.log("---------After------");
  if (!todo) next(new Error("invalid todo id."));
  else {
    res.json(
      getResponse({
        code: 200,
        message: "todo of id : " + id,
        success: true,
        data: todo,
      })
    );
  }
};

export default {
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
  deleteAllTodos,
  getTodoById,
};
