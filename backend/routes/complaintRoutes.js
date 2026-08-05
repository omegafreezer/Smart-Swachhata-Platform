const express = require("express");
const router = express.Router();

const {
  createComplaint,
  getComplaints,
  getComplaint,
  updateComplaint,
  deleteComplaint,
  getDashboardStats,
  getCategoryStats,
} = require("../controllers/complaintController");

// CRUD Routes
router
  .route("/")
  .get(getComplaints)
  .post(createComplaint);

// Analytics Routes (must come BEFORE /:id)
router.get("/analytics/dashboard", getDashboardStats);
router.get("/analytics/category", getCategoryStats);

// Single Complaint Routes
router
  .route("/:id")
  .get(getComplaint)
  .put(updateComplaint)
  .delete(deleteComplaint);

module.exports = router;