import express from "express";
import postRoute from "./routes/postRoute.js";

const app = express();

app.use("/api/post", postRoute);

app.listen(2001, () => {
  console.log("Server is running...");
});
