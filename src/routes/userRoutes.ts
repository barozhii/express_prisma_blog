import { Router } from "express";

const router = Router();

import { getUsers, createUser } from "../controllers/userController";

// Define the routes for user operations
router.get("/user", getUsers); // Get all users
router.post("/user", createUser); // Create a new user

export default router;
