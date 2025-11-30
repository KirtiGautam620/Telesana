const router=require("express").Router();
const appointmentController = require("../controllers/appointmentController.js");


router.post("/",appointmentController.bookAppointment);


router.get("/:patientId", appointmentController.getAppointments);

module.exports = router;
