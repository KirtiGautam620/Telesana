const router = require("express").Router();
const appointmentController = require("../controllers/appointmentController.js");
const { authMiddleware } = require("../middlewares/authMiddleware.js");

// Get appointments for authenticated user
router.get("/", authMiddleware, appointmentController.getMyAppointments);

// Book appointment (requires authentication)
router.post("/", authMiddleware, appointmentController.bookAppointment);

// Get appointments by userId (for admin/doctor use)
router.get("/:userId", appointmentController.getAppointments);

module.exports = router;
