import { NextFunction, Request, Response } from "express";

const errorHandling = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {};
export default errorHandling;
