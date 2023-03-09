import { Router } from "express";
import UserController from "../controllers/user";

export const API = Router();
// Generating session id for the users
API.get("/id", UserController.GenerateUserId);
