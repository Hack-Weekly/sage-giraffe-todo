import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { router } from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server hello world");
});
app.use(router);
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
