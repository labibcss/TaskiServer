import express from "express";
import { createAccesToken } from "../controllers/Auth/createToken.js";
import { createNewTask } from "../controllers/Task/createNewTask.js";
import { verifyAccessToken } from "../middlewares/verifyAccessToke.js";
import getTaskById from "../controllers/Task/getTaskById.js";
import { updateTask } from "../controllers/Task/updateTask.js";

const router = express.Router();

// Authentication
router.post(`/auth/token/new`, createAccesToken);

//  Task Managment
router.post(`/task/new`, verifyAccessToken, createNewTask); // Create a new Task
router.get(`/task/get/:id`, verifyAccessToken, getTaskById); // Get Task Data
router.put(`/task/update/:id`, verifyAccessToken, updateTask); // Update task data

// Default
router.get("*", (req, res) => {
  res.json("Hi");
});

export default router;
