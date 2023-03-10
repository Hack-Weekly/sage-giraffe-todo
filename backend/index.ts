import dotenv from "dotenv";
dotenv.config();
console.log("PORT IS : ", process.env.PORT);
// Making sure ENV Variables is loaded
import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { router } from "./routes";
import { connect } from "./database";
import { createTodo } from "./controllers/todoController";

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server hello world");
});
app.use(router);
//connect to Db If connect to DB success start Server Else console log the error
connect(app, port);

app.use(express.json());

app.post('/api/todos', createTodo);
