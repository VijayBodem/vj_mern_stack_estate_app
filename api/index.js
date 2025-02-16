import express from "express";

const app = express();

console.log("first");

app.use("/api/test", (req, res) => {
  res.send("Its working ");
});

app.listen(2001, () => {
  console.log("Server is running...");
});
