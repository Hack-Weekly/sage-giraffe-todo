import { Router } from "express";
import { API } from "./api";
export const router = Router();
router.use("/api", API);
