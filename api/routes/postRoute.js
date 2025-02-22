import express from "express";

const router = express.Router();

router.get("/testing", (req, res) => {
  res.send("Router working****");
});

export default router;
