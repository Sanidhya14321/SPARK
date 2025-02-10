import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import ConnectDB from "./Lib/db.js";

//Routes :
import authRoutes from "./Routes/auth.Route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173/",
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT || process.env.PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
  ConnectDB();
});
