import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import  authRoute from "./routes/auth.route.js"
import { connectDB } from "./lib/dbConnect.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
