import express from "express";
import {
  createUser,
  getUserId,
  deleteUser,
  updateUser,
  getAlluser,
} from "../controllers/users.js";
const router = express.Router();

//all routes start with users
router.get("/", getAlluser);

router.post("/", createUser);

router.get("/:id", getUserId);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
