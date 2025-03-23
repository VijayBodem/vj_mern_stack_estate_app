import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute.js";
import postRoute from "./routes/postRoute.js";
import testtRoute from "./routes/testRoute.js";

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.use("/api/test", testtRoute);

const port = 2002;

app.listen(port, () => {
  console.log("Server is running...", port);
});
