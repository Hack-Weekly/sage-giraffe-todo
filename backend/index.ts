import dotenv from "dotenv";
dotenv.config();
console.log("PORT IS : ", process.env.PORT);
// Making sure ENV Variables is loaded
import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { router } from "./routes";
import { connect } from "./database";
import cookieParser from "cookie-parser";
import morgan from "morgan";
const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: "*", credentials: true }));
app.use(helmet());
app.use(cookieParser("ThisIsOurApiSecret"));
app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ");
  })
);
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server hello world");
});

app.use(express.json());

app.use(router);

//connect to Db If connect to DB success start Server Else console log the error
connect(app, port);
