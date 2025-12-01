const appointmentService = require("../services/appointmentService.js");

const bookAppointment = async (req, res) => {
  try {
    // Add userId from authenticated user
    const appointmentData = {
      ...req.body,
      userId: req.user.id
    };
    const result = await appointmentService.bookAppointment(appointmentData);
    res.json({ message: 'Appointment booked successfully', appointment: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
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

const getMyAppointments = async (req, res) => {
  try {
    // Get appointments for authenticated user
    const userId = req.user.id;
    const result = await appointmentService.getAppointmentsForUser(userId);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  bookAppointment,
  getAppointments,
  getMyAppointments
};
