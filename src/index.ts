import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import customerRoutes from "./routes/customerRoutes";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", customerRoutes);
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
