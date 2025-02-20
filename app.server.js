import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/router.js";

dotenv.config();

// App Configs
const app = express();
const port = process.env.PORT;

// Middlewares
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/apis", router);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
