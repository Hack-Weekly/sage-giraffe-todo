import { Request, Response } from "express";
import { v1 } from "uuid";
import { getResponse } from "../utils/normalizeResponse";
const GenerateUserId = (req: Request, res: Response) => {
  let id: string;
  if (!Boolean(req.cookies.id)) {
    id = v1();
  } else {
    id = req.cookies.id;
  }
  res.cookie("id", id, {
    maxAge: 900000,
    httpOnly: true,
    signed: true,
    secure: true,
    sameSite: true,
  });
  res.json(
    getResponse({
      code: 200,
      success: true,
      data: { id },
      message: "user Id",
    })
  );
};
export default { GenerateUserId };
