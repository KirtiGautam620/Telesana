const patientService = require("../services/patientService.js");

const getPatient = async (req, res) => {
  try {
    const { userId, fullName, phone, gender, dob } = req.query

    if (!userId || !fullName) {
      return res.status(400).json({ error: "User ID and Name are required." });
    }

    console.log(`Processing patient: ${fullName}`)

    const patient = await patientService.getOrCreatePatient(userId, fullName, phone, gender, dob);
    
    res.status(200).json(patient);

  } catch (err) {
    console.error('Controller Error:', err.message);
    res.status(500).json({ error: err.message })
  }
};

module.exports = { getPatient }