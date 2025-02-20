import express from "express";
import { createAccesToken } from "../controllers/Auth/createToken.js";
import { createNewTask } from "../controllers/Task/createNewTask.js";

const router = express.Router();

// Authentication
router.post(`/auth/token/new`, createAccesToken);

//  Task Managment
router.post(`/task/new`, createNewTask);

// Default
router.get("*", (req, res) => {
  res.json("Hi");
});

export default router;
