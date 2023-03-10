import Todo from "../models/TodoModel";
import { Request, Response } from "express";

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, body, authorId } = req.body;
    const todo = await Todo.create({ title, body, authorId });
    res.status(201).json(todo);
    res.json(todo);
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
};

