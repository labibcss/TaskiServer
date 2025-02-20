import express from "express";
import { createAccesToken } from "../controllers/Auth/createToken.js";

const router = express.Router();

// Authentication
router.post(`/auth/token/new`, createAccesToken);

// Default
router.get("*", (req, res) => {
  res.json("Hi");
});

export default router;
