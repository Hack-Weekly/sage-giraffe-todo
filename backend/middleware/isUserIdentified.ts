import { NextFunction, Request, Response } from "express";

export const isAuthorIdentified = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.cookies.id;

  console.log("id is ", JSON.parse(req.cookies));
  if (id) {
    // @ts-ignore: Unreachable code error
    req["id"] = id;
    return next();
  } else {
    return res.status(401).json({
      code: 401,
      success: false,
      message: "user has no id",
      error: "User has no ID.",
    });
  }
};
