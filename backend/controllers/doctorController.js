const doctorService = require("../services/doctorService.js");

const getDoctors = async (req, res) => {
  try {
    console.log('Controller: Getting doctors');
    const doctors = await doctorService.getDoctors();
    console.log('Controller: Doctors retrieved', doctors.length);
    res.json(doctors);
  } catch (err) {
    console.log('Controller: Error', err.message);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getDoctors
};

