import express from "express";
import cors from "cors";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";

// Import backend routes
import connectDB from "./backend/config/mongodb.js";
import connectCloudinary from "./backend/config/cloudinary.js";
import adminRouter from "./backend/routes/adminRoute.js";
import doctorRouter from "./backend/routes/doctorRoute.js";
import userRouter from "./backend/routes/userRoute.js";

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// App config
const app = express();
const port = process.env.PORT || 3000;

// Connect to database and cloudinary
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API routes
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

// Serve static files for admin panel
app.use("/admin", express.static(path.join(__dirname, "dist/admin")));

// Serve static files for frontend
app.use("/", express.static(path.join(__dirname, "dist/frontend")));

// Handle admin panel routing (SPA)
app.get("/admin/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/admin/index.html"));
});

// Handle frontend routing (SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/frontend/index.html"));
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "HealthX Server is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

app.listen(port, () => {
  console.log(`🚀 HealthX Server started on port ${port}`);
  console.log(
    `📱 Frontend: ${
      process.env.NODE_ENV === "production"
        ? "https://healthx-2675.onrender.com"
        : `http://localhost:${port}`
    }`
  );
  console.log(
    `🔧 Admin Panel: ${
      process.env.NODE_ENV === "production"
        ? "https://healthx-2675.onrender.com/admin"
        : `http://localhost:${port}/admin`
    }`
  );
  console.log(
    `🔗 API: ${
      process.env.NODE_ENV === "production"
        ? "https://healthx-2675.onrender.com/api"
        : `http://localhost:${port}/api`
    }`
  );
  console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
});
