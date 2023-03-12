import { NextFunction, Request, Response } from "express";
import { getResponse } from "../utils/normalizeResponse";
import { Result, ValidationError, ValidationErrort } from "express-validator";
const errorHandling = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof Result<ValidationError>) {
    res.status(400).json({
      code: 400,
      errorType: "Validation",
      msg: err.errors.map(errorFormatter),
    });
  } else {
    res.status(500).json({
      code: 500,
      errorType: "Error",
      message: err.message,
    });
  }
};

const errorFormatter = ({
  location,
  msg,
  param,
  value,
  nestedErrors,
}: ValidationError) => {
  // Build your resulting errors however you want! String, object, whatever - it works!
  return `${location}[${param}]: ${msg}`;
};

export default errorHandling;
