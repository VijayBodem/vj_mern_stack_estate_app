import express from "express";
import {
  shouldBeAdmin,
  shouldBeLoggedIn,
} from "../controllers/testController.js";
import { verifyToken } from "../midddleware/verifyToken.js";

const router = express.Router();

router.get("/shouldBeLoggedIn", verifyToken, shouldBeLoggedIn);

router.get("/shouldBeAdmin", shouldBeAdmin);

export default router;
