const router = require("express").Router();
const patientController = require("../controllers/patientController.js");
const { authMiddleware } = require("../middlewares/authMiddleware.js");

// Authenticated profile routes
router.get("/profile", authMiddleware, patientController.getProfile);
router.post("/profile", authMiddleware, patientController.createProfile);
router.put("/profile", authMiddleware, patientController.updateProfile);

module.exports = router;
