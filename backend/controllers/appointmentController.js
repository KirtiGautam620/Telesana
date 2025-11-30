const appointmentService = require("../services/appointmentService.js");

const bookAppointment = async (req, res) => {
  try {
    const result = await appointmentService.bookAppointment(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAppointments = async (req, res) => {
  try {
    const { userId } = req.params;  
    const result = await appointmentService.getAppointmentsForUser(userId);  
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  bookAppointment,
  getAppointments
};
