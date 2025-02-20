import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/router.js";
import { connectToDB } from "./db/dbConnect.js";

dotenv.config();

// App Configs
const app = express();
const port = process.env.PORT;

// Middlewares
app.use(
  cors({
    origin: process.env.CORD_ORIGIN?.split(" "),
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/apis", router);

await connectToDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on ${port}`);
  });
});
