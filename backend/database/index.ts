import mongoose from "mongoose";
import { DBConfig } from "./config";
import { Express } from "express";
export const connect = (app: Express, port: string | 5000) => {
  const DB = DBConfig.DBUrl.replace("<password>", DBConfig.Password).replace(
    "<username>",
    DBConfig.UserName
  );
  mongoose
    .connect(DB)
    .then(() => {
      console.log("Connected to MongoDB successfully ✔.");
      app.listen(port, () =>
        console.log(`Server is running on 🏃  : http://localhost:${port}`)
      );
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB", err.message);
    });
};
