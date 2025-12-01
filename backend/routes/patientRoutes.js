const router = require("express").Router();
const patientController = require("../controllers/patientController.js");

router.get("/", patientController.getPatient);

module.exports = router;
