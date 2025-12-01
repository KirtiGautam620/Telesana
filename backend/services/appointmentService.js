const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const bookAppointment = async (data) => {
  const {
    userId,
    doctorId,
    appointmentTime,
    mode
  } = data;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { patient: true }
  });

  if (!user) {
    throw new Error("User not found");
  }

  if (!user.patient) {
    throw new Error("Please complete your patient profile before booking an appointment. Go to User Profile to create your profile.");
  }

  const patientId = user.patient.id;

  // Verify doctor exists
  const doctor = await prisma.doctor.findUnique({
    where: { id: String(doctorId) }
  });

  if (!doctor) {
    throw new Error("Doctor not found");
  }

  return prisma.appointment.create({
    data: {
      patientId,
      doctorId: String(doctorId),
      appointmentTime: new Date(appointmentTime),
      mode,
      status: "SCHEDULED"
    },
    include: {
      patient: true,
      doctor: true
    }
  });
};

const getAppointmentsForUser = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { patient: true }
  });

  if (!user || !user.patient) return [];

  const patientId = user.patient.id;

  return prisma.appointment.findMany({
    where: { patientId },
    include: { patient: true, doctor: true },
    orderBy: { appointmentTime: "asc" }
  });
};

module.exports = {
  bookAppointment,
  getAppointmentsForUser
};
