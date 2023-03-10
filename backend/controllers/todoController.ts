import Todo from "../models/TodoModel";
import { Request, Response } from "express";

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, body, authorId } = req.body;
    const todo = await Todo.create({ title, body, authorId });
    res.status(201).json(todo);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
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
    res.status(500).json({ error: (error as Error).message });
  }
};

