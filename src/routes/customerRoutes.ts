import express from "express";

const router = express.Router();

import { getCustomers, createCustomer } from "../controllers/customerController";

// Define the routes for user operations
router.get("/customer", getCustomers); // Get all customers
router.post("/customer", createCustomer); // Create a new customer

export default router;
