const doctorService = require("../services/doctorService.js");

const getDoctors = async (req, res) => {
  try {
    const doctors = await doctorService.getDoctors();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getDoctors
};

