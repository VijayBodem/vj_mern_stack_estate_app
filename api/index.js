import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute.js";
import postRoute from "./routes/postRoute.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

const port = 2002;

app.listen(port, () => {
  console.log("Server is running...", port);
});
