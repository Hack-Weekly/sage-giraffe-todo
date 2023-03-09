import { Request, Response } from "express";
import { v1 } from "uuid";
const GenerateUserId = (req: Request, res: Response) => {
  const id = v1();
  res.json({
    code: 200,
    success: true,
    data: { id },
  });
};
export default { GenerateUserId };
