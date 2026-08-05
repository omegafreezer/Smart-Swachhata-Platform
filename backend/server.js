const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const complaintRoutes = require("./routes/complaintRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/complaints", complaintRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Smart Swachhata Backend is Running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});